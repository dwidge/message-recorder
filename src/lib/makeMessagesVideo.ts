import { recordCanvas } from "./recordCanvas";
import { sleep } from "./sleep";

export const makeMessagesVideo = async (
  textArray: string[],
  {
    width = 1024,
    height = 960,
    fps = 24,
    type = "video/webm; codecs=h264",
  } = {}
) => {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error();

  return recordCanvas(
    canvas,
    async () => {
      for (const text of textArray) {
        renderFrame(ctx, text);
        await sleep(1000);
      }
    },
    { fps, type }
  );
};

const renderFrame = (ctx: CanvasRenderingContext2D, text: string) => {
  const { width, height } = ctx.canvas;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  fillTextCenter(ctx, text, 30);
};

function fillTextCenter(
  ctx: CanvasRenderingContext2D,
  text: string,
  textHeight: number
) {
  const { width, height } = ctx.canvas;

  const textWidth = ctx.measureText(text).width;

  const x = (width - textWidth) / 2;
  const y = (height - textHeight) / 2 + textHeight;

  ctx.fillText(text, x, y);
}
