import React, { useState } from 'react';
import useFieldType from '../../forms/useFieldType';
import validateText from '../../forms/validations/text';
import useStyles from './css';

const currentTime = new Date();
const nextYear = currentTime.getFullYear() + ((currentTime.getMonth() + 1) > 6 ? 2 : 1);

export const initialMessage = `Hi there,

My name is John Doe and I work at Fancy Company. I have a project that’s in it’s beginning stages and I’m interested enlisting the help of the team at Payload.  We hope to have our project completed by early ${nextYear} and have a couple of other pertinent details we’d like to discuss in person.

Looking forward to talking!`;

const initialHeight = 360;

const Message: React.FC = () => {
  const classes = useStyles();
  const [height, setHeight] = useState(initialHeight);

  const { value, setValue } = useFieldType({
    path: 'message',
    validate: validateText,
  });

  return (
    <textarea
      name="message"
      className={classes.messageField}
      value={value as string || ''}
      style={{
        height,
      }}
      onChange={(e) => {
        setHeight(Math.max(e.target.scrollHeight, initialHeight));
        setValue(e.target.value);
      }}
    />
  );
};

export default Message;
