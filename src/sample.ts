export interface Sample {
 name: string;
 age: number;
 cars: number;
 educated: boolean;
 nested: Nested;
}

interface Nested {
    id: string;
    name: string;
    nesting: number;
}