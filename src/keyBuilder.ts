import { Sample } from "./sample";

declare type KeyOf<TModel> = {
    [K in keyof TModel]?: KeyOf<TModel[K]>
}

export class Builder<TModel> {
    private data: any;

    public constructor(defaultModel?: TModel) {
        this.data = defaultModel ?
            defaultModel : {};
    }

    public with(obj: KeyOf<TModel>) {
        Object.keys(obj).map(k => this.data[k] = obj[k]); 
        return this;
    }

    public build(): TModel {
        return this.data;
    }
}

const sample = new Builder<Sample>()
    .with({ name: "Bob", age: 9 })
    .build();
    