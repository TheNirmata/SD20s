import Image from 'next/image';
import imageA from '../../../public/static-images/imageA.png';
import imageB from '../../../public/static-images/imageB.png';
import imageC from '../../../public/static-images/imageC.png';
import digitalCam from '../../../public/static-images/digital-cam.png';
import inDigitalCamImage from '../../../public/static-images/digitalCam-image.png';
import titleText from '../../../public/titleText.svg';

const LandingBlock = () => {
  return (
    <div className='flex-col relative'>
      <div className='translate-x-20 -translate-y-14'>
        <Image 
        alt='image-A'
        src={imageA}
        className='w-[336px] h-[316px] object-cover'
        />
      </div>
      <div className='flex flex-row relative z-10'>
        <div className='-translate-x-1 -translate-y-24 mt-4'>
          <Image 
          alt='title-text'
          src={titleText}
          className='w-[183.76px] h-[133.12px]'
          />
        </div>
        <div className='-translate-x-3 -translate-y-10 w-[198.41px] h-[23.02px] text-right text-[10px] leading-tight'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <div className='z-5 -translate-y-32 mt-2 -translate-x-7 ml-6'>
        <Image 
        alt='image-B'
        src={imageB}
        className='w-[182.76px] h-[220.22px]'
        />
      </div>
      {/* DIGITAL CAMERA */}
        <div className='flex flex-row -translate-y-96'>
        <div className='absolute z-5 -right-7 translate-y-24 -translate-x-15'>
          <div>
            <Image 
            alt='digital-cam'
            src={digitalCam}
            className='w-[350.8px] h-[338.53px]'
            />
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='relative -z-10 top-20 left-20 translate-y-32 translate-x-10 rotate-19'>
            <Image 
            alt='digital-cam-image'
            src={inDigitalCamImage}
            className='w-[243.13px] h-[220.74px]'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-row absolute z-1'>
        <div className='justify-center translate-x-2 translate-y-[350px]'>
        <Image 
        alt='image-C'
        src={imageC}
        className='w-[429.86px] h-[258.26px]'
        />
        </div>
      </div>
    </div>

  );
};

export default LandingBlock;