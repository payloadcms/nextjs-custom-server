import React from 'react';
import { Action } from '../types';

export type Props = {
  children: React.ReactNode
  containerRef?: React.MutableRefObject<null | HTMLDivElement>
  i: number
  dispatch: React.Dispatch<Action>
}
