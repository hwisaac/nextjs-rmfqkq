import Image from 'next/image';
import logoWhite from '../../public/logo-white.png';

type Props = {};
export default function Header({}: Props) {
  return (
    <div className='w-full shadow-lg text-slate-700 py-4 text-lg '>
      <div className='max-w-7xl mx-auto flex justify-between w-full '>
        {/* <Image src={logoWhite} alt='logo' className='scale-75' /> */}
        <div>글밥 아카데미</div>
        <div className='flex items-center gap-10'>
          <ul className='flex gap-22 items-center gap-8'>
            <li>종합안내</li>
            <li>정규강의</li>
            <li>보충강의</li>
            <li>Q&A</li>
            <li>모집일정</li>
            <li>링크</li>
          </ul>
          <div className='bg-blue-500 rounded-md flex items-center justify-center px-6 py-2 text-white font-semibold'>
            로그인
          </div>
        </div>
      </div>
    </div>
  );
}
