import { Sample } from "./sample";

export declare type FindConditions<T> = {
    [P in keyof T]?: FindConditions<T[P]>;
};

export class Builder<T> {
    private generic: T;

    public constructor() {
        this.generic = {} as T;
    }

    public with(property: FindConditions<T>) {
        Object.keys(property).map(k => this.generic[k] = property[k]);
        return this;
    }

    public build(): T {
        return this.generic;
    }
}

const sample = new Builder<Sample>().with({doesntExist: "Bob"})
    .build();









class GenericBuilder<TModel> {
    private data: any;
    constructor() {
        this.data = {};
    }
    public with<K extends keyof TModel>(key: K, value: TModel[K]) {
        this.data[key] = value;
        return this;
    }
    public build(): TModel {
        return this.data;
    }
}

const sample2 = new GenericBuilder<Sample>().with("name", "Bob").build();



class GenericBuilder2<TModel> {
    private data: TModel;
    constructor(defaultObject: TModel) {
        this.data = defaultObject;
    }
    public with<K extends keyof TModel>(key: K, value: TModel[K]) {
        this.data[key] = value;
        return this;
    }
    public build(): TModel {
        return this.data;
    }
}

interface MyType {
    name: string;
    age: number
}

const model = new GenericBuilder2<MyType>({ name: "", age: 0 })
    .with("name", "Henry")
    .with("age", 28)
    .build();