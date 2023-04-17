import React from 'react';
import { Type as FooterType } from '../../../globals/Footer';
import { Type as SocialMediaType } from '../../../globals/SocialMedia';
import Noise from '../../Noise';
import Footer from '../Footer';
import useStyles from './css';

type Props = {
  className?: string
  socialMedia: SocialMediaType
  footer: FooterType
}

const Template: React.FC<Props> = ({ children, className, footer, socialMedia }) => {
  const { template } = useStyles();

  return (
    <div className={[className, template].filter(Boolean).join(' ')}>
      <Noise />
      {children}
      <Footer
        footer={footer}
        socialMedia={socialMedia}
      />
    </div>
  );
};

export default Template;
