import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';
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
          className={`flex md:text-2xl flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3 
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

const ButtonGroup = ({ setActive, router }) => {
  const hasConnected = true;

  return hasConnected ? (
    <Button
      btnName="Create"
      classStyles="mx-2 rounded-xl"
      handleClick={() => {
        console.log('create');
        setActive('');
        router.push('/create-nft');
      }}
    />
  ) : <Button btnName="Connect" classStyles="mx-2 rounded-xl" handleClick={() => {}} />;
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setTheme('dark');
  }, []);

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b-2 dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="flexCenter cursor-pointer" onClick={() => {}}>
            <Image src={images.logo02} objectFit="contain" alt="logo" width={32} height={32} />
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

        <div className="flex md:hidden">
          <MenuItems isMobile={false} active={active} setActive={setActive} />
          <div className="ml-4">
            <ButtonGroup setActive={setActive} router={router} />
          </div>
        </div>
      </div>

      <div className="hidden md:flex ml-2" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? (
          <Image
            src={images.cross}
            objectFit="contain"
            width={20}
            height={20}
            alt="close"
            className={theme === 'light' && 'filter invert'}
          />
        ) : (
          <Image
            src={images.menu}
            objectFit="contain"
            width={20}
            height={20}
            alt="menu"
            className={theme === 'light' && 'filter invert'}
          />
        )}

        {isOpen && (
        <div className="fixed inset-0 top-65 dark:bg-nft-dark z-10 flex justify-between flex-col items-center height-fc top-auto bottom-1/4">
          <div className="flex-1 p-4">
            <MenuItems active={active} setActive={setActive} isMobile setIsOpen={setIsOpen} />
          </div>
          <div className="p-4">
            <ButtonGroup router={router} setActive={setActive} setIsOpen={setIsOpen} />
          </div>
        </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
