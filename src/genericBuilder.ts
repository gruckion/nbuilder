import { Sample } from "./sample";

export class Builder<TModel> {
    private data: any;

    public constructor(defaultModel?: TModel) {
        this.data = defaultModel ?
            defaultModel : {};
    }

    public with<K extends keyof TModel>(key: K, value: TModel[K]) {
        this.data[key] = value;
        return this;
    }

    public build(): TModel {
        return this.data;
    }
}

/**
 * The generic builder can be used like so
 */

const sample = new Builder<Sample>()
    .with("name", "Bob")
    .build();

/**
 * The defaults for the 
 */    
const model = new Builder<Sample>(
    {
        name: "",
        age: 0,
        cars: 0,
        educated: false,
        nested: { id: "1", name: "Bob", nesting: 1}
    })
    .with("name", "Henry")
    .with("age", 28)
    .build();