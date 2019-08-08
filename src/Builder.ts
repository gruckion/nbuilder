import { SingleObjectBuilder } from "./SingleObjectBuilder";
import { ObjectBuilder } from "./implementation/ObjectBuilder";

export abstract class Builder
{
    public static createNew<T>(): SingleObjectBuilder<T> {
        return new ObjectBuilder<T>();
    }
}
