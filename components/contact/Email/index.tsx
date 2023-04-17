import React from 'react';
import { useFormProcessing } from '../../forms/Form/context';
import useFieldType from '../../forms/useFieldType';
import validateEmail from '../../forms/validations/email';
import Arrow from '../../graphics/Arrow';
import useStyles from './css';

const Email: React.FC = () => {
  const processing = useFormProcessing();

  const { value, setValue, showError } = useFieldType({
    path: 'email',
    validate: validateEmail,
  });

  const classes = useStyles({ showError });

  return (
    <div className={classes.wrap}>
      <input
        placeholder="Enter your email here..."
        className={classes.email}
        type="text"
        name="email"
        onChange={(e) => setValue(e.target.value)}
        value={value as string || ''}
      />
      <button
        type="submit"
        disabled={processing}
        className={classes.button}
      >
        <Arrow />
      </button>
    </div>
  );
};

export default Email;
