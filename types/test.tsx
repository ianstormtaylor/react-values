/* tslint-disable */
// TypeScript Version: 2.7

import * as React from 'react';
import {
  AnyValue, AnyValueRenderProps,
  ArrayValue, ArrayValueRenderProps,
  BooleanValue, BooleanValueRenderProps,
  SetValue, SetValueRenderProps,
  MapValue, MapValueRenderProps
} from './index';

const noop = () => null;

/* AnyValue */
{
  const render: AnyValueRenderProps<number> = ({value}) => {
    return null;
  };
  const onNChange = (value: number) => ({});
  const onSChange = (value: string) => ({});
  [
  <AnyValue>{render}</AnyValue>,
  <AnyValue defaultValue={10} onChange={onNChange}>{noop}</AnyValue>,
  // $ExpectError
  <AnyValue defaultValue={10} onChange={onSChange}>{noop}</AnyValue>,
  // $ExpectError
  <AnyValue/>,
  // $ExpectError
  <AnyValue defaultValue="string">{render}</AnyValue>,
];
}

/* ArrayValue */
{
  const render: ArrayValueRenderProps<number> = ({value}) => {
    return null;
  };
  const onNChange = (value: number) => ({});
  const onAChange = (value: number[]) => ({});
  [
    <ArrayValue>{render}</ArrayValue>,
    <ArrayValue onChange={onAChange}>{noop}</ArrayValue>,
    <ArrayValue defaultValue={[10]}>{render}</ArrayValue>,
    // $ExpectError
    <ArrayValue onChange={onNChange}>{noop}</ArrayValue>,
    // $ExpectError
    <ArrayValue/>,
    // $ExpectError
    <ArrayValue defaultValue={10}>{render}</ArrayValue>,
  ];
}

/* BooleanValue */
{
  const render: BooleanValueRenderProps = ({value}) => {
    return null;
  };
  const onBChange = (value: boolean) => ({});
  const onSChange = (value: string) => ({});
  [
    <BooleanValue>{render}</BooleanValue>,
    <BooleanValue defaultValue={true} onChange={onBChange}>{noop}</BooleanValue>,
    // $ExpectError
    <BooleanValue defaultValue={10} onChange={onNChange}>{noop}</BooleanValue>,
    // $ExpectError
    <BooleanValue/>,
  ];
}

/* MapValue */
{
  const render: MapValueRenderProps<any> = ({value}) => {
    return null;
  };
  const onSChange = (value: string) => ({});
  const onOChange = (value: { [key: string]: number }) => ({});
  [
    <MapValue defaultValue={{x: 10, y: 22}}>{render}</MapValue>,
    <MapValue defaultValue={{x: 10, y: 22}} onChange={onOChange}>{render}</MapValue>,
    <MapValue defaultValue={{x: 10, y: 22}}>{render}</MapValue>,
    <MapValue defaultValue={{x: 10, y: 22}}>{({set}) => set('x', 22) as any}</MapValue>,
    // $ExpectError
    <MapValue defaultValue={{x: 10, y: 22}}>{({set}) => set('x', 'string') as any}</MapValue>,
    // $ExpectError
    <MapValue defaultValue={{x: 10, y: 22}}>{({set}) => set('z', 22) as any}</MapValue>,
    <MapValue defaultValue={{x: 10, y: 22} as any}>{({set}) => set('z', 22) as any}</MapValue>,
    // $ExpectError
    <MapValue defaultValue={{x: 10, y: 22}} onChange={onSChange}>{render}</MapValue>,
    // $ExpectError
    <MapValue/>,
  ];
}

/* SetValue */
{
  const render: SetValueRenderProps<any> = ({value}) => {
    return null;
  };
  const onBChange = (value: Set<any>) => ({});
  const onSChange = (value: string) => ({});
  [
    <SetValue>{render}</SetValue>,
    <SetValue defaultValue={new Set()} onChange={onBChange}>{noop}</SetValue>,
    // $ExpectError
    <SetValue/>,
  ];
}
