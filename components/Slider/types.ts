import React from 'react';

export type ISlide = {
  isIntersecting: boolean
  width: number
  height: number
}

export type UPDATE = {
  type: 'UPDATE'
  i: number
  slide: ISlide
}

export type UPDATE_SIZE = {
  type: 'UPDATE_SIZE'
  i: number
  width: number
  height: number
}

export type Action = UPDATE | UPDATE_SIZE

export type SliderContext = {
  next: () => void
  prev: () => void
  hasNext: boolean
  hasPrev: boolean
  currentSlide: number
  percentScrolled: number
  containerRef?: React.MutableRefObject<null | HTMLDivElement>
  dispatch: React.Dispatch<Action>
  slides: ISlide[]
}

export type Props = {
  children: React.ReactNode
  hideScrollbar?: boolean
}

export type Reducer = (state: ISlide[], action: Action) => ISlide[]
