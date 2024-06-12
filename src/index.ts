import { createServer, ServerResponse, IncomingMessage } from "node:http";
import eventEmitter from "node:events";
import url from "node:url";

const httpHandler = async (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader("Content-type", "application/json");
  res.setHeader("Keep-alive", "timeout=1");
  res.writeHead(200);
  res.end(JSON.stringify({ message: "hello world" }));
};

const app = createServer(httpHandler);
const PORT = 3000;
app
  .listen(PORT)
  .on("listening", () => console.log("🚀 app running in port", PORT));
