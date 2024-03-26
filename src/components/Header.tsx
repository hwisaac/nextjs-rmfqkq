import Image from 'next/image';
import logoWhite from '../../public/logo-white.png';
import { FaYoutube } from 'react-icons/fa';
import { IoIosCafe } from 'react-icons/io';

type Props = {};
export default function Header({}: Props) {
  return (
    <div className='w-full shadow-lg text-slate-700 py-4 text-lg '>
      <div className='max-w-7xl mx-auto flex justify-between w-full '>
        {/* <Image src={logoWhite} alt='logo' className='scale-75' /> */}
        <div>글밥 아카데미</div>
        <div className='flex items-center gap-2  '>
          <ul className='flex gap-22 items-center gap-8 font-semibold text-sm mr-3'>
            <li>종합안내</li>
            <li>정규강의</li>
            <li>보충강의</li>
            <li>Q&A</li>
            <li>모집일정</li>
            <li>링크</li>
          </ul>
          <div className='w-[1px] h-6 bg-gray-300 mr-3' />
          <ul className='flex text-sm font-semibold gap-6'>
            <li>
              <FaYoutube
                className='opacity-50 hover:opacity-80 transition-all cursor-pointer'
                size={20}
              />
            </li>
            <li>
              <IoIosCafe
                className='opacity-50 hover:opacity-80 transition-all cursor-pointer'
                size={20}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
