import React from 'react';
import { $render, describe, expect, it } from './suite';
import bindComponent from '../../src/bind-component';
import { createReactStub } from 'react-mock-component';

interface FooProps {
  foo: number;
  bar: number;
}

describe('bindComponent', () => {
  it('should bind props', () => {
    const Bar = createReactStub();
    const Foo = (props: FooProps) => <Bar {...props} />;

    const BoundFoo = bindComponent(Foo, {
      foo: 1
    });

    $render(<BoundFoo bar={2} />);

    expect(Bar.renderedWith({
      foo: 1,
      bar: 2
    })).to.be.true;
  });
});
