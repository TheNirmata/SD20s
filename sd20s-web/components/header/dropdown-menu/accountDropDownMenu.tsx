
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@heroui/react";
import account from '../../../public/account.svg';
import LoginModal from '../../modal/accountModal';


const AccountDropDownMenu = () => {
  const [isLogin, setIsLogin] = useState(false);
 
  const handleLogin = () => {
    setIsLogin(!isLogin);
    console.log('user wants to log in from landing page')
  };
 
  return (
    <div className='flex items-center gap-4'>
      <Dropdown placement='bottom-end'>
        <DropdownTrigger>
        <button onClick={handleLogin}>
            <Image 
              src={account}
              alt='account-icon'
              className='w-[30px] h-[30px]'
            />
        </button>
        </DropdownTrigger>
        <DropdownMenu>
            <DropdownItem key='profile' className='h-13 gap-4'>
              {isLogin ? (
                <Link href='/login'>
                  <p>Login</p>
                </Link>
                ): (
                <Link href='/signup'>
                  {isLogin}
                    {
                    <div className='justify-center items-center'>
                      <LoginModal show={true} setShow={true}/>
                    </div>
                    }
                <p>Sign up</p>
              </Link>
            )}
            </DropdownItem>
          </DropdownMenu>
      </Dropdown>
    </div>

  )

};

export default AccountDropDownMenu;