import { Builder } from "./Builder";

console.log("start");

const builder = Builder.createNew<string>();
const withValue = builder.with("hello");
const value = withValue.build();

console.log("builder:", builder);
console.log("with:", withValue);
console.log("value:", value);