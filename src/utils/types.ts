import React, {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
} from "react";
import IntrinsicElements = React.JSX.IntrinsicElements;

export type User = {
  id: string;
  provided_id: string;
  email: string;
  last_name: string;
  first_name: string;
  picture: string;
  last_signed_in: string;
  created_on: string;
};

type MaybeArray<T> = T[] | T;
export type ChildrenOfType<
  T extends ElementType<any, keyof IntrinsicElements>,
> = MaybeArray<ReactElement<ComponentPropsWithoutRef<T>>>;
