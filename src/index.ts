import { Builder } from "./keyBuilder";
import { Sample } from "./sample";

console.log("start");









const name = "bob";
const sample = new Builder<Sample>().with({ nested: { }})
    .build();

console.dir(sample);

