
declare module '@faceless-ui/mouse-info' {
  export declare function useMouseInfo(): {
    x: number
    y: number
    xDifference: number
    yDifference: number
    xDirection: 'left' | 'right'
    yDirection: 'up' | 'down'
    xPercentage: number
    yPercentage: number
    totalPercentage: number
    isInViewport: boolean
    eventsFired: number
    animationScheduled: boolean
  };

  export const MouseInfoProvider: React.FC<{
    children?: React.ReactNode | undefined,
  }>;
}
