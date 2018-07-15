// TypeScript Version: 2.4

import * as React from 'react';

/* Utils */

export type Callback<T> = (value: T) => void;

export type VoidCallback = () => void;

export interface ReactValueProps<T> {
  value?: T;
  defaultValue?: T;
  onChange?: Callback<T>;
  disabled?: boolean;
}

export interface ReactValueRenderProps<T> {
  value: T;
  set: (v: T) => void;
  clear: VoidCallback;
  reset: VoidCallback;
  disabled: true;
}

/* AnyProps */

export type AnyValueRenderProps<T> = (props: ReactValueRenderProps<T> & {}) => React.ReactNode;

export type AnyValueProps<T> = ReactValueProps<T> & {
  children: AnyValueRenderProps<T>;
};

export class AnyValue<T> extends React.Component<AnyValueProps<T>> {
}

/* ArrayValue */

export type ArrayValueRenderProps<T, A = T[]> = (props: ReactValueRenderProps<A> & {
  concat: (...values: T[]) => void;
  fill: (fill: T) => void;
  filter: (callback: (i: T) => boolean) => void;
  map: (callback: (i: T, index: number) => T) => void;
  pop: () => void;
  push: (i: T) => void;
  reverse: () => void;
  shift: () => void;
  slice: (begin: number, end: number) => void;
  sort: (compare: (a: T, b: T) => number) => void;
  splice: (start: number, count: number, ...items: T[]) => void;
  unshift: (i: T) => void;
}) => React.ReactNode;

export type ArrayValueProps<T, A = T[]> = ReactValueProps<A> & {
  children: ArrayValueRenderProps<T, A>;
};

export class ArrayValue<T> extends React.Component<ArrayValueProps<T>> {
}

/* BooleanValue */

export type BooleanValueRenderProps = (props: ReactValueRenderProps<boolean> & {
  toggle: () => void;
}) => React.ReactNode;

export type BooleanValueProps<T> = ReactValueProps<T> & {
  children: BooleanValueRenderProps;
};

export class BooleanValue extends React.Component<BooleanValueProps<boolean>> {
}

/* DateValue */

export type DateValueRenderProps = (props: ReactValueRenderProps<Date> & {
  date: number;
  hours: number;
  milliseconds: number;
  minutes: number;
  month: number;
  seconds: number;
  year: number;
  setDate: (d: Date) => void;
  setHours: (d: number) => void;
  setMilliseconds: (d: number) => void;
  setMinutes: (d: number) => void;
  setMonth: (d: number) => void;
  setSeconds: (d: number) => void;
  setYear: (d: number) => void;
  incrementDate: (amount: number) => void;
  incrementHours: (amount: number) => void;
  incrementMilliseconds: (amount: number) => void;
  incrementMinutes: (amount: number) => void;
  incrementMonth: (amount: number) => void;
  incrementSeconds: (amount: number) => void;
  incrementYear: (amount: number) => void;
  decrementDate: (amount: number) => void;
  decrementFullYear: (amount: number) => void;
  decrementHours: (amount: number) => void;
  decrementMilliseconds: (amount: number) => void;
  decrementMinutes: (amount: number) => void;
  decrementMonth: (amount: number) => void;
  decrementSeconds: (amount: number) => void;
}) => React.ReactNode;

export type DateValueProps = ReactValueProps<Date> & {
  children: DateValueRenderProps;
};

export class DateValue extends React.Component<DateValueProps> {
}

/* MapValue */

export type MapValueRenderProps<T extends object, K extends keyof T = keyof T> = (props: ReactValueRenderProps<T> & {
  set: (key: K, value: T[K]) => void;
  unset: (key: K) => void;
  delete: (key: K) => void;
}) => React.ReactNode;

export type MapValueProps<T extends object, K extends keyof T> = ReactValueProps<T> & {
  children: MapValueRenderProps<T, K>;
};

export class MapValue<T extends object, K extends keyof T> extends React.Component<MapValueProps<T, K>> {
}

/* NumberValue */

export type NumberValueRenderProps = (props: ReactValueRenderProps<number> & {
  increment: () => void;
  decrement: () => void;
}) => React.ReactNode;

export type NumberValueProps = ReactValueProps<number> & {
  children: NumberValueRenderProps;
};

export class NumberValue extends React.Component<NumberValueProps> {
}

/* SetValue */

export type SetValueRenderProps<V, T = Set<V> > = (props: ReactValueRenderProps<T> & {
  add: (v: V) => void;
  remove: (v: V) => void;
  delete: (v: V) => void;
  toggle: (v: V, add: boolean) => void;
}) => React.ReactNode;

export type SetValueProps<V, T = Set<V>> = ReactValueProps<T> & {
  children: SetValueRenderProps<V, T>;
};

export class SetValue<V, T = Set<V>> extends React.Component<SetValueProps<V, T>> {
}

/* StringValue */

export type StringValueRenderProps = (props: ReactValueRenderProps<string> & {
  concat: (v: string) => void;
  padEnd: (length: number, pattern?: string) => void;
  padStart: (length: number, pattern?: string) => void;
  repeat: (count: number) => void;
  replace: (replace: RegExp | string, newSubstr: string | ((match: string, ...matches: string[]) => string)) => void;
  slice: (begin: number, end?: number) => void;
  substr: (begin: number, length?: number) => void;
  substring: (begin: number, indexEnd?: number) => void;
  toLowerCase: () => void;
  toUpperCase: () => void;
  trim: () => void;
  trimEnd: () => void;
  trimStart: () => void;
}) => React.ReactNode;

export type StringValueProps = ReactValueProps<string> & {
  children: StringValueRenderProps;
};

export class StringValue<T> extends React.Component<StringValueProps> {
}
