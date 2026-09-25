self.addEventListener("push", (event) => {
  event.waitUntil(self.registration.showNotification("R-DUB'S Team Notice", {
    body: "You have a new team notice. Tap to open the app.",
    icon: "./gunner.png",
    badge: "./gunner.png",
    tag: "rdubs-team-notice",
    renotify: true,
    data: { url: "./" }
  }));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil((async () => {
    const all = await clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const client of all) {
      if ("focus" in client) {
        await client.focus();
        return;
      }
    }
    if (clients.openWindow) return clients.openWindow("./");
  })());
});
