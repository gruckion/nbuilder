import { Builder } from "./sampleBuilder";
import { Sample } from "./sample";

console.log("start");

const name = "bob";
const sample = new Builder<Sample>()
    .build();

console.dir(sample);
