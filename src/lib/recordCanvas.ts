export const recordCanvas = (
  canvas: HTMLCanvasElement,
  render: () => Promise<void>,
  { fps = 24, type = "video/webm; codecs=h264" } = {}
) =>
  new Promise<Blob>(async (resolve) => {
    const stream = canvas.captureStream(fps);
    const recorder = new MediaRecorder(stream);
    const chunks: Blob[] = [];

    recorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

    recorder.onstop = () => {
      const videoBlob = new Blob(chunks, { type });
      resolve(videoBlob);
    };

    recorder.start();
    await render();
    recorder.stop();
  });
