> `Function.prototype.bind` for React components

[![Build Status](https://travis-ci.com/NiGhTTraX/react-bind-component.svg?branch=master)](https://travis-ci.com/NiGhTTraX/react-bind-component)
[![codecov](https://codecov.io/gh/NiGhTTraX/react-bind-component/branch/master/graph/badge.svg)](https://codecov.io/gh/NiGhTTraX/react-bind-component)

----


## Usage

```tsx
import bindComponent from 'react-bind-component';

interface FooProps {
  foo: number;
  bar: number;
}

const Foo = (props: FooProps) => null;

const BoundFoo = bindComponent(Foo, { bar: 2 });

ReactDOM.render(<BoundFoo foo={1} />);
```

Just like `Function.prototype.bind`, `bindComponent` creates a new component
that renders the original one with the supplied props plus any other props
that are passed when the new component is rendered.
