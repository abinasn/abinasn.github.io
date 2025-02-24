import {
  LightBulbIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

import Button from "../components/button";

function Home() {
  const handleClick = () => {

  }
  return (
    <div className="relative h-screen flex items-center justify-start px-42 max-md:px-24">
      <div className="absolute top-26 left-0 right-0 border-b-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 animate-home-borders-fadeIn"></div>
      <div className="absolute top-30 left-0 right-0 border-b-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 animate-home-borders-fadeIn"></div>
      <div className="h-full absolute left-26 top-0 bottom-0 border-l-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 mx-4 animate-home-borders-fadeIn"></div>
      <div className="h-full absolute left-30 top-0 bottom-0 border-l-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 mx-4 animate-home-borders-fadeIn"></div>

      <div className="flex flex-col animate-texts">
        <p className="text-5xl">
          <span className="font-light">Hello!</span> <b>I'm Abinas.</b>

        </p>
        <p className="mt-3 text-md pl-[3px]">
          <span className='font-light'>I am a</span>
          <span> full-stack developer, tech enthusiast, system designer, problem solver.</span>
        </p>
        <p className="mt-1 text-md pl-[3px] font-light">
          Proficient developer with 8 years of experience building fast, user-friendly and <br /> scalable web applications using React.js, Node.js and modern development practices.
        </p>
        <div className='flex gap-4'>
          <Button onClick={handleClick} variant="primary" className="mt-4">
            <LightBulbIcon className='w-4 h-4 font-sans' />
            Skills
          </Button>
          <Button onClick={handleClick} variant="primary" className="mt-4">
            <BriefcaseIcon className='w-4 h-4 font-sans' />
            Experience
          </Button>
        </div>
      </div>

      <div className="absolute bottom-26 left-0 right-0 border-b-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 animate-home-borders-fadeIn"></div>
      <div className="absolute bottom-30 left-0 right-0 border-b-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 animate-home-borders-fadeIn"></div>
    </div>
  );
}

export default Home;
