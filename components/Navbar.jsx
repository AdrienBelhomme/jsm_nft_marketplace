import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import Images from '../assets';
import { Button } from '.';

const MenuItems = ({ isMobile, active, setActive }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0: return '/';
      case 1: return '/created-nfts';
      case 2: return '/my-nfts';
      default: return '/';
    }
  };

  return (
    <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
      {['Explore NFTs', 'Listed NFTs', 'My NFTs'].map((item, i) => (
        <li
          key={i}
          onClick={() => { setActive(i); }}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3 
          ${active === i
            ? 'dark:text-white text-nft-black-1'
            : 'dark:text-nft-gray-3 text-nft-gray-2'
        }`}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

const ButtonGroup = () => {
  const hasConnected = false;

  return hasConnected ? (
    <Button classStyles="mx-2 rounded-xl" />
  ) : <Button classStyles="mx-2 rounded-xl" />;
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState(0);

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="flexCenter cursor-pointer" onClick={() => {}}>
            <Image src={Images.logo02} objectFit="contain" alt="logo" width={32} height={32} />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1 hidden minM:flex">CryptoKet</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-initial flex-row justify-end ">
        <div className="flex items-center mr-10">
          <input type="checkbox" className="checkbox" id="checkbox" onChange={handleChangeTheme} />
          <label htmlFor="checkbox" className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label">
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
      </div>

      <div className="flex md:hidden">
        <MenuItems isMobile={false} active={active} setActive={setActive} />
        <div className="ml-4">
          <ButtonGroup />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
