import { BuilderSettings } from "./BuilderSettings";

export interface Buildable<T>
{
    builderSettings: BuilderSettings;
    build(): T;
}
