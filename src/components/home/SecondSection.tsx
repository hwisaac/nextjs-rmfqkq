type Props = {};

export default function SecondSection({}: Props) {
  return (
    <section className='w-full'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 rounded-lg shadow-xl text-slate-900 mx-auto sm:w-[23.4375rem] dark:text-slate-300'>
          <div className='bg-white rounded-lg overflow-hidden ring-1 ring-slate-900/5 dark:bg-slate-800 dark:highlight-white/5 dark:ring-0 flex w-[650px]'>
            <div className='bg-slate-500 h-[230px] w-[180px] shrink-0' />
            <div className='flex flex-col px-5 py-4 justify-center gap-4'>
              <div className='w-full'>
                "글밥 아카데미의 따뜻한 커뮤니티는 제게 끊임없는 영감을 주었고,
                같은 꿈을 가진 친구들과의 네트워킹은 제 번역가로서의 여정을 더욱
                풍부하게 만들어 주었습니다."
              </div>
              <div className='relative left-1'>
                <p className='text-sky-500'>김가상</p>
                <p className='text-sm '>영상, 출판 번역가</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
