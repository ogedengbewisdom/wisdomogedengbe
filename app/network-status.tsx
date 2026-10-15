"use client";

import { useEffect, useState } from "react";

type NetworkMessage = "offline" | "online" | "slow" | null;

const messages: Record<Exclude<NetworkMessage, null>, string> = {
  offline: "You seem to be offline. Check your connection and reload the page.",
  online: "You're back online",
  slow: "Taking a little longer than usual. Your connection may be slow, hang on.",
};

export default function NetworkStatus() {
  const [message, setMessage] = useState<NetworkMessage>(null);

  useEffect(() => {
    let isOnline = navigator.onLine;
    let slowLoadTimer: number | undefined;
    let onlineMessageTimer: number | undefined;

    const clearSlowLoadTimer = () => {
      if (slowLoadTimer !== undefined) {
        window.clearTimeout(slowLoadTimer);
        slowLoadTimer = undefined;
      }
    };

    const clearOnlineMessageTimer = () => {
      if (onlineMessageTimer !== undefined) {
        window.clearTimeout(onlineMessageTimer);
        onlineMessageTimer = undefined;
      }
    };

    const handleLoad = () => {
      clearSlowLoadTimer();
      setMessage((current) => (current === "slow" ? null : current));
    };

    const handleOffline = () => {
      isOnline = false;
      clearOnlineMessageTimer();
      setMessage("offline");
    };

    const handleOnline = () => {
      isOnline = true;
      clearOnlineMessageTimer();
      setMessage("online");
      onlineMessageTimer = window.setTimeout(() => {
        onlineMessageTimer = undefined;
        setMessage((current) => (current === "online" ? null : current));
      }, 3000);
    };

    window.addEventListener("load", handleLoad);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    if (!isOnline) {
      setMessage("offline");
    }

    if (document.readyState !== "complete") {
      slowLoadTimer = window.setTimeout(() => {
        slowLoadTimer = undefined;
        if (isOnline) setMessage((current) => (current ? current : "slow"));
      }, 5000);
    }

    return () => {
      clearSlowLoadTimer();
      clearOnlineMessageTimer();
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!message) return null;

  return (
    <div aria-live="polite" className={`network-status network-status-${message}`} role="status">
      {messages[message]}
    </div>
  );
}
