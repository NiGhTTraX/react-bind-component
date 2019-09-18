// eslint-disable-next-line space-infix-ops
import React, { Component, ComponentType } from 'react';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Create a HOC that binds some props for the wrapped component.
 *
 * @param C The component that will be wrapped.
 * @param boundProps A subset of the component's props.
 *
 * @returns A new component that accepts all of the original
 *   component's props minus the ones that were bound.
 */
export default function bindComponent<T, K extends keyof T>(
  C: ComponentType<T>,
  boundProps: Pick<T, K>
): ComponentType<Omit<T, K>> {
  return class BoundComponent extends Component<Omit<T, K>> {
    static displayName = `bind(${C.displayName || C.name})`;

    render() {
      const props = { ...this.props, ...boundProps } as T;

      return <C {...props} />;
    }
  };
}
