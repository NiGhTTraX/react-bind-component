> Create type safe HOCs that partially apply components

[![Build Status](https://travis-ci.com/NiGhTTraX/react-bind-component.svg?branch=master)](https://travis-ci.com/NiGhTTraX/react-bind-component)
[![codecov](https://codecov.io/gh/NiGhTTraX/react-bind-component/branch/master/graph/badge.svg)](https://codecov.io/gh/NiGhTTraX/react-bind-component)

----


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
