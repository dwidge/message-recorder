import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

const load = async () => {
  const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.4/dist/esm";
  const ffmpeg = new FFmpeg();
  ffmpeg.terminate();
  ffmpeg.on("log", ({ message }) => {
    console.log(message);
  });

  const coreURL = await toBlobURL(
    `${baseURL}/ffmpeg-core.js`,
    "text/javascript"
  );
  const wasmURL = await toBlobURL(
    `${baseURL}/ffmpeg-core.wasm`,
    "application/wasm"
  );
  await ffmpeg.load({
    coreURL,
    wasmURL,
  });
  return ffmpeg;
};

export const transcode = async (input: string | Blob | File) => {
  const ffmpeg = await load();
  console.log("load1");
  await ffmpeg.writeFile("input.webm", await fetchFile(input));
  await ffmpeg.exec(["-i", "input.webm", "output.mp4"]);
  console.log("exec1");
  const data = await ffmpeg.readFile("output.mp4");
  console.log("data1");
  ffmpeg.terminate();
  return new Blob([data], { type: "video/mp4" });
};
