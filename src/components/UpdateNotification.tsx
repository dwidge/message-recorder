import "../styles/flex.css";
import "../styles/border.css";
import { useState } from "react";
import { registerSW } from "virtual:pwa-register";

export const UpdateNotification = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  const updateSW = registerSW({
    onRegistered(r) {
      r &&
        document.addEventListener("visibilitychange", () => {
          console.log("visibilitychange1", { hidden: document.hidden });
          if (!document.hidden) r.update();
        });
    },
    onNeedRefresh() {
      setUpdateAvailable(true);
      console.log("onNeedRefresh1");
    },
    onOfflineReady() {
      console.log("onOfflineReady1");
    },
  });

  if (updateAvailable)
    return (
      <div className="flex horizontal border rounded">
        <div className="pad">Update available. Reload?</div>
        <button onClick={() => updateSW(true)}>Reload</button>
      </div>
    );
  else return <></>;
};
