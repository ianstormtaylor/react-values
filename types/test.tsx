/* tslint-disable */
// TypeScript Version: 2.7

import * as React from 'react';
import {
  AnyValue, AnyValueRenderProps,
  ArrayValue, ArrayValueRenderProps,
  BooleanValue, BooleanValueRenderProps,
  SetValue, SetValueRenderProps,
  MapValue, MapValueRenderProps, createValue, createArrayValue, createBooleanValue, createMapValue, createSetValue
} from './index';

const noop = () => null;

/* AnyValue */
{
  const render: AnyValueRenderProps<number> = ({value}) => {
    return null;
  };
  const onNChange = (value: number) => ({});
  const onSChange = (value: string) => ({});
  const Value = createValue(42);
  [
    <AnyValue>{render}</AnyValue>,
    <Value>{render}</Value>,
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
  const Value = createArrayValue([1, 2, 3]);
  [
    <ArrayValue>{render}</ArrayValue>,
    <Value>{render}</Value>,
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
  const Value = createBooleanValue(false);
  [
    <BooleanValue>{render}</BooleanValue>,
    <Value>{render}</Value>,
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
  var Value = createMapValue({x: 10, y: 22});
  [
    <MapValue defaultValue={{x: 10, y: 22}}>{render}</MapValue>,
    <Value defaultValue={{x: 10, y: 22}}>{render}</Value>,
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
  const Value = createSetValue({});
  [
    <SetValue>{render}</SetValue>,
    <Value>{render}</Value>,
    <SetValue defaultValue={new Set()} onChange={onBChange}>{noop}</SetValue>,
    // $ExpectError
    <SetValue/>,
  ];
}
