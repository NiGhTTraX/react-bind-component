> Create type safe HOCs that partially apply components


## Usage

```tsx
interface FooProps {
  foo: number;
  bar: number;
}

const Foo = (props: FooProps) => null;

const BoundFoo = bindComponent(Foo, { bar: 2 });

ReactDOM.render(<BoundFoo foo={1} />);
```
