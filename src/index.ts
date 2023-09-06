import { type ServeOptions } from "bun"

Bun.serve({
  
  fetch(request: Request) {
    throw new Error("bad request");
  },

  error(error) {
    console.log(error)
    return new Response("oops!!")
  },


  // tls: {
    // key: Bun.file("./key.pem"),
    // cert: Bun.file("./cert.pem")
  // }


} as ServeOptions)
