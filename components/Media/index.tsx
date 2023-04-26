import React from 'react';
import { Type as MediaType, Size } from '../../collections/Media';
import useStyles from './css';

type Props = MediaType & {
  className?: string
  preferredSize?: Size
}

const Media: React.FC<Props> = ({
  className,
  mimeType,
  filename,
  alt,
  preferredSize,
  sizes,
}) => {
  const classes = useStyles();

  if (mimeType.includes('video')) {
    return (
      <div className={className}>
        <video
          autoPlay
          muted
          loop
          controls={false}
          className={classes.video}
        >
          <source src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${filename}`} />
        </video>
      </div>
    );
  }

  return (
    <div className={className}>
      <img
        className={classes.image}
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${sizes?.[preferredSize]?.filename || filename}`}
        alt={alt}
      />
    </div>
  );
};

export default Media;