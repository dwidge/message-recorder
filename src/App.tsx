import React, { useState } from "react";
import { downloadBlob } from "./lib/downloadBlob";
import { makeMessagesVideo } from "./lib/makeMessagesVideo";

export const App: React.FC = () => {
  const [textArray, setTextArray] = useState<string[]>([]);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);

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
          makeMessagesVideo(textArray).then(setVideoBlob);
        }}
      >
        Generate Video
      </button>
      <button
        onClick={() =>
          videoBlob && downloadBlob(videoBlob, "record-messages.webm")
        }
        disabled={!videoBlob}
      >
        Download Video
      </button>
    </div>
  );
};
