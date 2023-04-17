import * as React from 'react';
import { useMouseInfo } from '@faceless-ui/mouse-info';
import useStyles from './css';
import { joinClassNames } from '../../../css/joinClassNames';

type Props = {
  show?: boolean
}

export const DragHandle:React.FC<Props> = (props) => {
  const { show = false } = props;
  const classes = useStyles();
  const mouseInfo = useMouseInfo();
  const [savedPosition, savePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (show) {
      savePosition({ x: mouseInfo.x, y: mouseInfo.y });
    }
  }, [show, mouseInfo]);

  return (
    <div className={joinClassNames([show && classes.showHandle, classes.handleContainer])}>
      <div
        className={classes.handle}
        style={show ? { left: mouseInfo.x, top: (mouseInfo.y - 8) } : { left: savedPosition.x, top: savedPosition.y }}
      >
        Drag Me
      </div>
    </div>
  );
};
