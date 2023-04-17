import React from 'react';
import { Type as ImageType, Size } from '../../collections/Media';
import useStyles from './css';

type Props = ImageType & {
  className?: string
  preferredSize?: Size
}

const Image: React.FC<Props> = ({
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

export default Image;
