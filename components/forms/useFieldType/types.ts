import { Validate, Value } from '../types';

export interface Options {
  path: string
  validate: Validate
}

export type SetValue = (e: Value) => void

export interface FieldType {
  showError: boolean
  errorMessage?: string
  value: Value
  formSubmitted: boolean
  formProcessing: boolean
  setValue: SetValue
}
