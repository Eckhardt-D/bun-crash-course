// Read a file
const file = Bun.file("package.json")
const contents = await file.json()

if (contents.scripts) {
  contents.scripts.start = "bun run src/files.ts"
}

Bun.write("package.json", JSON.stringify(contents, null,2))

// Paths
const { file: theFile, path, dir, main, url } = import.meta

console.log({
  file: theFile,
  path,
  dir,
  main,
  url
})


const txt = `${import.meta.dir}/test.txt`

// open writer
const file2 = Bun.file(txt)
const  writer = file2.writer()

// write some stuff
writer.write("Something \n")

// do some stuff
console.log("Still writing");


// write some more stuff
writer.write("Something else \n")
console.log("Wrote some more stuff");
console.log("Finishing..");

// flush writer
writer.flush();
// close
writer.end();


Bun.write(file, "Some content to stdout")
