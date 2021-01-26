import React from 'react';
import { Layout } from '../../collections/Page';
import { components } from '../../blocks';
import classes from './index.module.css';

type Props = {
  layout: Layout[]
  className?: string
}

const RenderBlocks: React.FC<Props> = ({ layout, className }) => (
  <div className={[
    classes.renderBlocks,
    className,
  ].filter(Boolean).join(' ')}
  >
    {layout.map((block, i) => {
      const Block: React.FC<any> = components[block.blockType];

      if (Block) {
        return (
          <section
            key={i}
            className={classes.block}
          >
            <Block {...block} />
          </section>
        );
      }

      return null;
    })}
  </div>
);

export default RenderBlocks;
