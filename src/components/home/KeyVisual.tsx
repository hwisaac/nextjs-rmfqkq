import Image from 'next/image';
import mainVisual from '../../../public/main_visual.jpeg';

type Props = {};

export default function KeyVisual({}: Props) {
  return (
    <section className='w-full border relative'>
      <div className='w-full max-w-7xl mx-auto flex flex-col items-center py-[150px] relative'>
        <h1 className='text-[#0f172a] font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white max-w-4xl drop-shadow drop-shadow-2xl '>
          글로 세상을 잇다, 당신의 번역으로 시작되는 새로운 여정
        </h1>
        <p className='mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400'>
          <span className='font-mono font-bold dark:text-sky-400 drop-shadow-xl underline underline-offset-6 decoration-dotted'>
            글밥아카데미
          </span>
          와 함께 다양한 분야의 커리큘럼을 통해 본인의 연관분야를 확장할수
          있습니다.
        </p>
        <div className='flex gap-3 relative mt-12'>
          <button className='bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400'>
            모집일정
          </button>
          <button className='border bg-white/90 border-slate-900 text-slate-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400'>
            회원가입
          </button>
        </div>
      </div>
      <Image
        src={mainVisual}
        alt='main-visual'
        layout='fill'
        objectFit='cover'
        className='absolute top-0 w-full h-full -z-10'
      />
      {/* 그라디언트 효과를 위한 div */}
      <div className='absolute top-0 w-full h-full -z-10 bg-gradient-to-r from-white to-gray-100 opacity-60'></div>
    </section>
  );
}
