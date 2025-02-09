"use client"
import IG from '../../public/static-images/footer-images/ig-icon.png';
import youtube from '../../public/static-images/footer-images/youtube-icon.png';
import facebook from '../../public/static-images/footer-images/facebook-icon.png';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className='realtive translate-y-72 overflow-x-hidden flex flex-row justify-center items-center border-black full sm:[393px] h-[136px]'>
      <div>
        <div className='flex flex-row justify-center justify-space items-center'>
          <div className='p-1'>
          <Image 
            src={facebook}
            alt='facebook'
            className='w-[21px] h-[21px]'
            />
          </div>
          <div className='p-1'>
          <Image 
            src={youtube}
            alt='youtube'
            className='w-[21px] h-[21px]'
          />
          </div>
          <div className='p-1'>
          <Image 
            src={IG}
            alt='IG'
            className='w-[21px] h-[21px]'
          />
          </div>
        </div>
        <div className='text-center leading-tight text-[10px] text-transform: uppercase'>
          <p className='pt-5'>random text spot for footer things, don’t know what will be here yet</p>
          <br/>
          <p className='pt-5'>

            © 2025 SD20s. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )

};

export default Footer;