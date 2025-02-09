"use client"
import Image from 'next/image';
import imageA from '../../../public/static-images/imageA.png';
import imageB from '../../../public/static-images/imageB.png';
import imageC from '../../../public/static-images/imageC.png';
import digitalCam from '../../../public/static-images/digital-cam.png';
import inDigitalCamImage from '../../../public/static-images/digitalCam-image.png';
import titleText from '../../../public/titleText.svg';

const LandingBlock = () => {
  return (
    <div className='flex-col z-0'>
      <div className='translate-x-20 -translate-y-14'>
        <Image 
        alt='image-A'
        src={imageA}
        className='w-[336px] h-[316px] object-cover'
        />
      </div>
      <div className='flex-row absolute z-10 left-3 -translate-x-1 -translate-y-28 mt-9'>
        <div>
          <Image 
          alt='title-text'
          src={titleText}
          className='w-[183.76px] h-[133.12px]'
          />
        </div>
        <div className='mt-3 translate-x-44 -translate-y-28 w-[198.41px] h-[23.02px] text-right text-[10px] leading-tight'>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>

      <div className='absolute z-5 translate-y-8 -translate-x-7'>
        <Image 
        alt='image-B'
        src={imageB}
        className='w-[182.76px] h-[220.22px]'
        />
      </div>
      <div className='flex-row w-[423.8px] h-[228.53px] absolute z-5 -right-7 translate-y-24 translate-x-20'>
        <div>
          <Image 
          alt='digital-cam'
          src={digitalCam}
          className='w-96 h-30'
          />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='relative -z-10 top-20 left-20 translate-y-44 translate-x-5 rotate-19'>
          <Image 
          alt='digital-cam-image'
          src={inDigitalCamImage}
          className='w-[270.13px] h-[230.74px]'
          />
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