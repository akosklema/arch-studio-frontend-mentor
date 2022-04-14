import useResponsiveImage from '../hooks/useResponsiveImage';

import Heading from '../components/UI/Heading';
import Paragraph from '../components/UI/Paragraph';

import classes from './ImageWithTextLayout.module.css';

function ImageWithTextLayout({ srcObject, title, largeTitle, children, alt }) {
  const src = useResponsiveImage(srcObject);

  return (
    <div className={classes['layout-container']}>
      <div className={classes['image-container']}>
        <img className={classes['image']} src={src} alt={alt} />
      </div>
      <div className={classes['text-container']}>
        <Heading className={classes['large-title']} level="1" large={true}>{largeTitle}</Heading>
        <Heading className={classes['title']} level="2">{title}</Heading>
        <Paragraph className={classes['text']}>{children}</Paragraph>
      </div>
    </div>
  );
};

export default ImageWithTextLayout;