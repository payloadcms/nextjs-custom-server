import { createContext, useContext } from 'react';
import initialContext from './initialContext';
import { IContext } from '../types';

const FormContext = createContext(initialContext);
const FieldContext = createContext(initialContext);
const SubmittedContext = createContext(false);
const ProcessingContext = createContext(false);
const ModifiedContext = createContext(false);

const useForm = (): IContext => useContext(FormContext);
const useFormFields = (): IContext => useContext(FieldContext);
const useFormSubmitted = (): boolean => useContext(SubmittedContext);
const useFormProcessing = (): boolean => useContext(ProcessingContext);
const useFormModified = (): boolean => useContext(ModifiedContext);

export {
  FormContext,
  FieldContext,
  SubmittedContext,
  ProcessingContext,
  ModifiedContext,
  useForm,
  useFormFields,
  useFormSubmitted,
  useFormProcessing,
  useFormModified,
};
