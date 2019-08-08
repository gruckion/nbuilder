import { SingleObjectBuilder } from "../SingleObjectBuilder";

export interface ObjectBuilder<T> extends SingleObjectBuilder<T> {
    with(x: string): ObjectBuilder<T>;
}

export class ObjectBuilder<T> implements ObjectBuilder<T> {
    public with(x: string): ObjectBuilder<T> {
        // Add the parsed in this to the builder
        return this;
    }

    public build(): T {
        return null;
    }
}

// TODO
// https://github.com/nbuilder/nbuilder/blob/a92f8f7b92e7bf6b63a32ecacf837926b3057720/src/FizzWare.NBuilder/Implementation/ObjectBuilder.cs

// export declare type FindConditions<T> = {
//     [P in keyof T]?: FindConditions<T[P]>;
// };