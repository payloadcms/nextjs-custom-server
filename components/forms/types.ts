import React from 'react';

export type Validate = undefined | ((value: unknown) => boolean | string)

export type Value = unknown

export interface Property {
  [key: string]: Value
}

export interface Data {
  [key: string]: Value | Property | Property[]
}

export interface OnSubmit {
  (data: Property): void | Promise<void>
}

export interface Field {
  valid: boolean
  initialValue: Value
  errorMessage?: string
  value: Value
}

export interface InitialState {
  [key: string]: Field
}

export interface Props {
  onSubmit?: OnSubmit
  children: React.ReactNode
  initialState?: InitialState
  method?: 'GET' | 'POST'
  action?: string
  className?: string
}

export interface Fields {
  [key: string]: Field
}

export interface SetModified {
  (modified: boolean): void
}

export interface SetProcessing {
  (processing: boolean): void
}

export interface SetSubmitted {
  (submitted: boolean): void
}

interface REPLACE_STATE {
  type: 'REPLACE_STATE'
  state: Fields
}

interface REMOVE {
  type: 'REMOVE'
  path: string
}

interface UPDATE {
  type: 'UPDATE'
  path: string
  value: Value
  initialValue?: Value
  errorMessage?: string
  valid: boolean
}

export type Action = REPLACE_STATE | REMOVE | UPDATE

export interface IContext {
  initialState: InitialState
  fields: Fields
  validateForm: () => boolean
  submit?: (e: React.ChangeEvent<HTMLFormElement>) => Promise<boolean> | void | false
  getFields: () => Fields
  getField: (path: string) => Field | undefined
  getData?: () => Data
  dispatchFields: React.Dispatch<Action>
  setModified: (modified: boolean) => void
  setProcessing: (processing: boolean) => void
  setSubmitted: (submitted: boolean) => void
}
