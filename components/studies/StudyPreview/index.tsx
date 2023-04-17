import React from 'react';
import One from './One';
import Two from './Two';
import Three from './Three';
import { Type as StudyType } from '../../../collections/Study';
import useStyles from './css';

type Props = {
  template: number
  study: StudyType
  first: boolean
  last: boolean
}

const templates = {
  1: One,
  2: Two,
  3: Three,
};

const StudyPreview: React.FC<Props> = ({ template, study, first, last }) => {
  const Template = templates[template];
  const classes = useStyles({ first, last });

  return (
    <div className={classes.preview}>
      <Template {...study} />
    </div>
  );
};

export default StudyPreview;
