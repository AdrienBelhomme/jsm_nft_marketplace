import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import { CreatorCard } from '../components';
import Banner from '../components/Banner';
import images from '../assets';
import { makeId } from '../utils/makeId';

const Home = () => {
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const numRef = useRef(null);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const { theme } = useTheme();

  const creatorsIterator = [6, 7, 8, 9, 10];

  const useWindowSize = () => {
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);
    return windowSize;
  };
  const size = useWindowSize();

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          name="Discover, Collect, and Trade extraordinary NFTs"
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
        />
        <div className="">
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Top Sellers</h1>
          <div ref={parentRef} className="relative flex-1 max-w-full flex mt-3">
            <div ref={scrollRef} className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none">
              {creatorsIterator.map((i) => (
                <CreatorCard
                  key={i}
                  rank={i}
                  creatorImg={images[`creator${i}`]}
                  creatorName={`0x${makeId(3)}...${makeId(4)}`}
                  creatorEth={10 - i * 0.5}
                />
              ))}
              {creatorsIterator.length >= 5 && windowSize.width < 1200 && (
                <>
                  <div className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 left-0 cursor-pointer">
                    <Image src={images.left} layout="fill" objectFit="contain" alt="left-arrow" className={theme === 'light' ? 'filter invert' : undefined} />
                  </div>
                  <div className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 right-0 cursor-pointer">
                    <Image src={images.right} layout="fill" objectFit="contain" alt="right-arrow" className={theme === 'light' ? 'filter invert' : undefined} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
