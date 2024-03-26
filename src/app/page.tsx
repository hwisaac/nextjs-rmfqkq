import KeyVisual from '@/components/home/KeyVisual';
import SecondSection from '@/components/home/SecondSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <KeyVisual />
      <SecondSection />
    </main>
  );
}
