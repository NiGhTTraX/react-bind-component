import React from 'react';
import createReactMock from 'react-mock-component';
import { $render, describe, expect, it } from './suite';
import bindComponent from '../../src/bind-component';

interface FooProps {
  foo: number;
  bar: number;
}

describe('bindComponent', () => {
  it('should bind props', () => {
    const Bar = createReactMock();
    const Foo = (props: FooProps) => <Bar {...props} />;

    const BoundFoo = bindComponent(Foo, {
      foo: 1
    });

    $render(<BoundFoo bar={2} />);

    expect(Bar).to.have.been.renderedWith({
      foo: 1,
      bar: 2
    });
  });
});
