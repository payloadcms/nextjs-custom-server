type TJoinClassNames = string[];

export const joinClassNames = (classes: TJoinClassNames): string => [...classes].filter(Boolean).join(' ');
