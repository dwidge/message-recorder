import { test, beforeEach, expect, vi } from "vitest";
import { render, screen } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";
import { App } from "./App";
import { setupTests } from "./lib/setupTests";

setupTests();

vi.mock("./lib/makeMessagesVideo", () => ({
  async makeMessagesVideo() {
    return new Blob();
  },
}));

beforeEach(async () => {
  render(<App />);
});

test("records video", async () => {
  const b: HTMLButtonElement = screen.getByText("Download Video");
  await vi.waitFor(() => expect(b.disabled).toBeTruthy());
  await userEvent.type(
    screen.getByPlaceholderText("Enter text lines separated by new lines"),
    "aaa"
  );
  await userEvent.click(screen.getByText("Generate Video"));
  await vi.waitFor(() => expect(b.disabled).toBeFalsy());
  await userEvent.click(screen.getByText("Generate Video"));
  await vi.waitFor(() => expect(b.disabled).toBeFalsy());
});
