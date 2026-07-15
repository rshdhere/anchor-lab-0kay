const express = require("express");
const todosRouter = require("./routes/todos");

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.get("/", (_req, res) => {
  res.type("html").send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Ripple Kit</title>
  <style>
    :root { color-scheme: light; font-family: ui-sans-serif, system-ui, sans-serif; }
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f4f6f8; color: #111; }
    main { width: min(28rem, 92vw); }
    h1 { font-size: 1.35rem; margin: 0 0 0.5rem; }
    p { margin: 0 0 1rem; color: #444; line-height: 1.45; }
    a { color: #0b57d0; }
  </style>
</head>
<body>
  <main>
    <h1>Ripple Kit</h1>
    <p>Scaffold is running. Implement the full app (UI + API), then keep <code>GET /</code> user-facing.</p>
    <p><a href="/health">/health</a> · <a href="/todos">/todos</a></p>
  </main>
</body>
</html>`);
});

app.use("/todos", todosRouter);

const port = Number(process.env.PORT || 3000);
app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});
