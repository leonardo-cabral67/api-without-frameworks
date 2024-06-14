import { createServer, ServerResponse, IncomingMessage } from "node:http";
import { getMovies } from "./infra/database";

const routes = {
  "GET:/": (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200)
    res.end(JSON.stringify({ message: "api is working" }))
  },
  "GET:/api/v1/movies": (req: IncomingMessage, res: ServerResponse) => {
    const movies = getMovies()
    res.writeHead(200)
    res.end(JSON.stringify(movies))
  }
}

const httpHandler = async (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader("Content-type", "application/json");
  res.setHeader("Keep-alive", "timeout=1");
  const [httpMethod, path] = [req.method, req.url]
  const route: string = `${httpMethod}:${path}`
  if (!routes[route as keyof typeof routes]) return res
    .end(JSON.stringify({ page_not_found: "this page was not found" }))
    .writeHead(404)

  routes[route as keyof typeof routes](req, res)
};

const app = createServer(httpHandler);
const PORT = 3000;
app
  .listen(PORT, () => console.log('🚀 app running in port 3000'))
