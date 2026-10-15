import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.svg':'image/svg+xml', '.jpg':'image/jpeg', '.woff2':'font/woff2', '.txt':'text/plain; charset=utf-8' };
const server = http.createServer(async (req,res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    let pathname = decodeURIComponent(url.pathname);
    // Mirrors GitHub's project-site prefix for verification.
    if (pathname.startsWith('/portfolio/')) pathname = pathname.slice('/portfolio'.length);
    const target = path.resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
    if (!target.startsWith(root)) {res.writeHead(403);res.end('Forbidden');return;}
    const data = await fs.readFile(target);
    res.writeHead(200, {'Content-Type':types[path.extname(target)] || 'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});res.end(data);
  } catch {res.writeHead(404);res.end('Not found');}
});
server.listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173/portfolio/'));
