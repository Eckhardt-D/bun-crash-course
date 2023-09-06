import {renderToString} from "react-dom/server";

const router = new Bun.FileSystemRouter({
  style: "nextjs",
  dir: "./pages"
})

const theMatch = router.match("/");

if (!theMatch) throw new Error("no match");

const App = (await import(theMatch.filePath)).default

console.log(renderToString(<App message="World!!" />))


Bun.serve({
  fetch(req) {
    const match = router.match(req)
    if (match) {
      return new Response(renderToString(<App message="World!!" />))
    }
    return new Response("Not found", {status: 404})
  }
})
