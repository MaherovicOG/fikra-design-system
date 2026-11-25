import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve('storybook-static')
const types = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.png': 'image/png',
}
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, 'http://localhost').pathname,
    )
    const filename = path.resolve(
      root,
      `.${pathname === '/' ? '/index.html' : pathname}`,
    )
    if (!filename.startsWith(root + path.sep)) {
      res.writeHead(403).end()
      return
    }
    const body = await readFile(filename)
    res
      .writeHead(200, {
        'Content-Type':
          types[path.extname(filename)] || 'application/octet-stream',
      })
      .end(body)
  } catch {
    res.writeHead(404).end('Not found')
  }
}).listen(6006, '127.0.0.1')
