export const getMimeExtension = (mime: string) =>
  [
    ["webm", "webm"],
    ["matroska", "mkv"],
    ["mp4", "mp4"],
  ].find(([pat]) => mime.includes(pat))?.[1];
