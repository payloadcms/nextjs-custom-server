import { Block } from 'payload/types';
import backgroundColor, { Type as BackgroundColorType } from '../../fields/backgroundColor';
import overlap, { Type as OverlapType } from '../../fields/overlap';
import stat, { Type as StatType } from '../../fields/stat';

export type Type = {
  stats: StatType[]
  backgroundColor: BackgroundColorType
  blockType: 'statistics'
} & OverlapType

const Statistics: Block = {
  slug: 'statistics',
  labels: {
    singular: 'Statistics',
    plural: 'Statistic Blocks',
  },
  fields: [
    backgroundColor,
    overlap,
    {
      name: 'stats',
      label: 'Statistics',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        stat,
      ],
    },
  ],
};

export default Statistics;
