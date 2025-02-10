
// "use client"
// //@ts-nocheck
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/react";
// import account from '../../../public/account.svg';
// import AccountModal from '../../modal/accountModal';


// const AccountDropDownMenu = () => {
//   const [isLogin, setIsLogin] = useState(false);
 
//   const handleLogin = () => {
//     setIsLogin(!isLogin);
//     console.log('user wants to log in from landing page')
//   };
 
//   return (
//     <div className='flex items-center gap-4'>
//       <Dropdown placement='bottom-end'>
//         <DropdownTrigger>
//         <button onClick={handleLogin}>
//             <Image 
//               src={account}
//               alt='account-icon'
//               className='w-[30px] h-[30px]'
//             />
//         </button>
//         </DropdownTrigger>
//         <DropdownMenu>
//             <DropdownItem key='profile' className='h-13 gap-4'>
//               {isLogin ? (
//                 <Link href='/login'>
//                   <p>Login</p>
//                 </Link>
//                 ): (
//                 <Link href='/signup'>
//                   {isLogin}
//                     {
//                     <div className='justify-center items-center'>
                      
//                       <AccountModal show={isLogin} setShow={setIsLogin}/>
//                     </div>
//                     }
//                 <p>Sign up</p>
//               </Link>
//             )}
//             </DropdownItem>
//           </DropdownMenu>
//       </Dropdown>
//     </div>

//   )

// };

// export default AccountDropDownMenu;