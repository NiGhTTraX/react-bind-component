import React from "react";
import { $render } from "@tdd-buffet/react";
import { describe, it } from "tdd-buffet/suite/node";
import { expect } from "tdd-buffet/expect/chai";
import createReactMock from "react-mock-component";
import bindComponent from "../src";

interface FooProps {
  foo: number;
  bar: number;
}

describe("bindComponent", () => {
  it("should bind props", () => {
    const Bar = createReactMock();
    // eslint-disable-next-line react/jsx-props-no-spreading
    const Foo = (props: FooProps) => <Bar {...props} />;

    const BoundFoo = bindComponent(Foo, {
      foo: 1,
    });

    $render(<BoundFoo bar={2} />);

    expect(
      Bar.renderedWith({
        foo: 1,
        bar: 2,
      })
    ).to.be.true;
  });
});
