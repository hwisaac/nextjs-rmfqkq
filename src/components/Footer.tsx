type Props = {};

export default function Footer({}: Props) {
  return (
    <section className='border-t border-t-gray-400 text-slate-500'>
      <div className='w-full max-w-7xl mx-auto flex flex-col'>
        <div className='flex justify-between items-end py-[20px]'>
          <ul>
            <li>법인명 : 글밥아카데미</li>
            <li>
              주소 : 서울시 마포구 어울마당로 26 제일빌딩 5층 (당인동 12-1)
            </li>
            <li>대표자명 : 김명철</li>
            <li>사업자번호 : 141-90-03143</li>
            <li>계좌번호 : 1002-329-520715 우리은행 김명철 (바른번역)</li>
          </ul>
          <div>
            <ul>
              <li>전화: 070-4711-2241 (평일, 오후 1시~ 오후5시)</li>
              <li>이메일: glbabstory@naver.com (평일, 오전10시 ~ 오후5시)</li>
            </ul>
          </div>
        </div>
        <div className='pb-[70px] pt-[30px] text-slate-400 justify-center flex border-t'>
          <p>Copyright © 2022 Baruntranslation Co., ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </section>
  );
}
