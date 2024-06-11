import {createServer} from 'node:http'

const app = createServer((_, response) => {
  response.setHeader('content-type', 'application/json')
  response.end(JSON.stringify({message: "olá"}))
})
const PORT = 3000
app.listen(PORT, () => console.log("🚀 app running in port", PORT))
