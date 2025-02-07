import Image from 'next/image';
import imageA from '../../../public/static-images/imageA.png';
const Background = () => {
  return (
    <Image 
      alt='image-1'
      src={imageA}
    />

  );
};

export default Background;