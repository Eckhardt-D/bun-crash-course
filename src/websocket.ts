Bun.serve({
  fetch(req, server) {
    if (server.upgrade(req)) {
      return;
    }
    return new Response("Upgrade failed", { status: 500});
  },
  websocket: {
    open() {
      console.log("A new client connected");
    },
    message(ws, message) {
      console.log(message);
      ws.sendText("Hello from Bun WS");
    }
  }
})
