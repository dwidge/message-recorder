import "./App.css";
import "./styles/barberpole.css";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { downloadBlob } from "./lib/downloadBlob";
import { transcode } from "./lib/transcode";
import { getMimeExtension } from "./lib/getMimeExtension";
import { Loader } from "./components/Loader";
import { UpdateNotification } from "./components/UpdateNotification";
import { sentenceCase } from "change-case";
import { animateMessages } from "./lib/animateMessages";
import { recordCanvas } from "./lib/recordCanvas";

export const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [textArray, setTextArray] = useState<string[]>([]);
  const [videoConfig, setVideoConfig] = useState({
    fps: 30,
    width: 640 * 2,
    height: 480 * 2,
    delayMilliseconds: 1500,
  });
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
    <div
      className="flex vertical gap"
      style={
        { "--theme-color": import.meta.env.VITE_THEME_COLOR } as CSSProperties
      }
    >
      <UpdateNotification />
      <h1>{import.meta.env.VITE_TITLE}</h1>
      <textarea
        id="textArray"
        placeholder="Enter text lines separated by new lines"
        onChange={(e) => {
          setTextArray(e.target.value.split("\n"));
        }}
        rows={10}
        cols={50}
      />
      <form action="">
        {Object.entries(videoConfig).map(([k, v]) => (
          <>
            <label htmlFor={k}>{sentenceCase(k)}</label>
            <input
              key={k}
              id={k}
              value={v}
              onChange={(e) =>
                setVideoConfig({ ...videoConfig, [k]: e.target.value })
              }
            />
          </>
        ))}
      </form>
      <Loader>
        {(loading, setLoading) => (
          <button
            className={loading ? "barberpole" : ""}
            onClick={async () => {
              const canvas = canvasRef.current;
              if (!canvas) throw new Error("AppE1: No canvas");
              setLoading(true);
              canvas.hidden = false;
              await animateMessages(canvasRef.current, textArray, videoConfig);
              canvas.hidden = true;
              setLoading(false);
            }}
          >
            Preview
          </button>
        )}
      </Loader>
      <canvas ref={canvasRef} hidden={true} className="fill100" />
      <Loader>
        {(loading, setLoading) => (
          <button
            className={loading ? "barberpole" : ""}
            onClick={async () => {
              const canvas = canvasRef.current;
              if (!canvas) throw new Error("AppE1: No canvas");
              setLoading(true);
              setOriginalBlob(null);
              const blob = await recordCanvas(
                canvas,
                () => animateMessages(canvas, textArray, videoConfig),
                videoConfig
              );
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
