const next = require("next");
const url = require("url");
const https = require("http");
const path = require("path");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 4000;
app.prepare().then(() => {
  https.createServer((req, res) => {
    //parse the request url to get it's path name
    const parsedUrl = url.parse(req.url, true);
    const { pathName } = parsedUrl;
    
    //if a service worker is requested , serve it as a static file
    if (pathName === "/service-worker.js") {
        const filePath = path.join(__dirname, ".next", pathName);
        app.serveStatic(req, res, filePath);
    }
    //otherwise, let next take care of it
    else{
        handle(req, res, parsedUrl);
    }
  }).listen(port,() => {
      console.log(`Listening on port: ${port}`)
  });
});
