import {Database} from "bun:sqlite"

const db = new Database("db.sqlite");

const query = db.query("select 'hello' as message;");
const result = query.get();

console.log(result);
