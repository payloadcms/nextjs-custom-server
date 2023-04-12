import React from 'react';
import { Layout } from '../../collections/Page';
import { components } from '../../blocks';

type Props = {
  layout: Layout[]
  className?: string
}

const RenderBlocks: React.FC<Props> = ({ layout, className }) => (
  <div className={[
    className,
  ].filter(Boolean).join(' ')}
  >
    {layout.map((block, i) => {
      const Block: React.FC<any> = components[block.blockType];

      if (Block) {
        return (
          <section
            key={i}
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
