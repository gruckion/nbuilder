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