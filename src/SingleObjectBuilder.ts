import { Buildable } from "./Buildable";
import { ObjectBuilder } from "./implementation/ObjectBuilder";

export interface SingleObjectBuilder<T> extends Buildable<T> {

}

export abstract class SingleObjectBuilder<T> implements SingleObjectBuilder<T> {
    public with(x: string): SingleObjectBuilder<T> {
        (this as ObjectBuilder<T>).with(x);
        return this;
    }
}