import "./App.css";
import "./styles/barberpole.css";
import React, { useEffect, useRef, useState } from "react";
import { downloadBlob } from "./lib/downloadBlob";
import { makeMessagesVideo } from "./lib/makeMessagesVideo";
import { transcode } from "./lib/transcode";
import { getMimeExtension } from "./lib/getMimeExtension";
import { Loader } from "./components/Loader";
import { UpdateNotification } from "./components/UpdateNotification";

export const App: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [textArray, setTextArray] = useState<string[]>([]);
  const [originalBlob, setOriginalBlob] = useState<Blob | null>(null);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);

  useEffect(() => {
    setVideoBlob(originalBlob);
  }, [originalBlob]);

  useEffect(() => {
    if (videoBlob && videoRef.current)
      videoRef.current.src = URL.createObjectURL(videoBlob);
  }, [videoBlob]);

  return (
    <div className="flex vertical">
      <UpdateNotification />
      <h1>Record Messages</h1>
      <textarea
        id="textArray"
        placeholder="Enter text lines separated by new lines"
        onChange={(e) => {
          setTextArray(e.target.value.split("\n"));
        }}
        rows={10}
        cols={50}
      />
      <Loader>
        {(loading, setLoading) => (
          <button
            className={loading ? "barberpole" : ""}
            onClick={async () => {
              setLoading(true);
              setOriginalBlob(null);
              const blob = await makeMessagesVideo(textArray);
              setOriginalBlob(blob);
              setLoading(false);
            }}
          >
            Generate Video
          </button>
        )}
      </Loader>
      <div className="horizontal">
        {originalBlob && (
          <button
            className={videoBlob?.type.includes("webm") ? "border" : ""}
            onClick={() => setVideoBlob(originalBlob)}
          >
            WEBM
          </button>
        )}
        {originalBlob && (
          <Loader>
            {(loading, setLoading) => (
              <button
                className={
                  (loading ? "barberpole" : "") +
                  " " +
                  (videoBlob?.type.includes("mp4") ? "border" : "")
                }
                onClick={async () => {
                  setLoading(true);
                  await transcode(originalBlob).then(setVideoBlob);
                  setLoading(false);
                }}
              >
                MP4
              </button>
            )}
          </Loader>
        )}
      </div>
      {videoBlob && <DownloadBlobButton {...{ videoBlob }} />}
      {videoBlob && <video className="fill100" ref={videoRef} controls></video>}
    </div>
  );
};

function DownloadBlobButton({ videoBlob }: { videoBlob: Blob | null }) {
  return (
    <button
      onClick={() =>
        videoBlob &&
        downloadBlob(
          videoBlob,
          "record-messages." + (getMimeExtension(videoBlob?.type) ?? "webm")
        )
      }
      disabled={!videoBlob}
    >
      Download Video
    </button>
  );
}
