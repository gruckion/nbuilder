import { Builder } from "../sampleBuilder";

console.log("start");

const name = "bob";
const sample = new Builder<Sample>()
    .with({ name })
    .with({ age: 10 })
    .with( { educated: true })
    .build();

console.dir(sample);


// const sample2 = new SampleBuilder().with( { name: "Bob" }).build();