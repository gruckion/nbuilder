# Generic fluent builder pattern typescript

<img src="https://www.gatewayprocurement.co.uk/_webedit/cached-images/130-0-0-0-10000-10000-1084.jpg" />

Readable, maintainable and extensible code is key. The fluent builder pattern is great when creating complex objects that have many possible configurations. By allowing you to chain nameds methods to describe your object with various properties.

Consider the following model;

```typescript
interface Fruit {
    id: number;
    color: string;
    texture: string;
    picked: Date;
    expiration: Date;
}
```

If we wanted to create a concrete instance of this object, we could do the following.

```typescript
class Apple implements Fruit {
    public constructor() {

    }
}
```

## Resources

[Fluent builder: The hidden art of chaining behavior](https://medium.com/@dleroari/fluent-builder-the-hidden-art-of-chaining-behavior-36d9b43ef9e4)

[Builder pattern](https://refactoring.guru/design-patterns/builder)

[Builder pattern wikipedia](https://en.wikipedia.org/wiki/Builder_pattern)

[Fluent interface](https://en.wikipedia.org/wiki/Fluent_interface)

[The Builder Pattern in Node.js & Typescript](https://medium.com/@itayelgazar/the-builder-pattern-in-node-js-typescript-4b81a70b2ea5)

[Nbuilder](https://github.com/nbuilder/nbuilder)
