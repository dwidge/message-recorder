import React, { useState } from "react";
import { downloadBlob } from "./lib/downloadBlob";
import { makeMessagesVideo } from "./lib/makeMessagesVideo";
import { supportedVideoTypes } from "@dwidge/media-recorder-types";

const getMimeExtension = (mime: string) =>
  [
    ["webm", "webm"],
    ["matroska", "mkv"],
    ["mp4", "mp4"],
  ].find(([pat]) => mime.includes(pat))?.[1];

export const App: React.FC = () => {
  const [textArray, setTextArray] = useState<string[]>([]);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const [videoType, setVideoType] = useState<string>(supportedVideoTypes[0]);

  return (
    <div>
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
      <br />
      <button
        onClick={() => {
          setVideoBlob(null);
          makeMessagesVideo(textArray, { type: videoType }).then(setVideoBlob);
        }}
      >
        Generate Video
      </button>
      <button
        onClick={() =>
          videoBlob &&
          downloadBlob(
            videoBlob,
            "record-messages." + (getMimeExtension(videoType) ?? "webm")
          )
        }
        disabled={!videoBlob}
      >
        Download Video
      </button>
      <select value={videoType} onChange={(e) => setVideoType(e.target.value)}>
        {supportedVideoTypes.map((type) => (
          <option>{type}</option>
        ))}
      </select>
      <h2>Supported types</h2>
      <textarea>{supportedVideoTypes.join("\n")}</textarea>
    </div>
  );
};
