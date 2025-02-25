import Left from './left';

function Home() {
  return (
    <div className="md:relative h-screen flex items-center justify-start md:px-24 px-24">
      <div className="absolute top-10 left-0 right-0 border-b-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 animate-home-borders-fadeIn"></div>
      <div className="absolute top-12 left-0 right-0 border-b-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 animate-home-borders-fadeIn"></div>
      <div className="h-full absolute left-10 top-0 bottom-0 border-l-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 mx-4 animate-home-borders-fadeIn"></div>
      <div className="h-full absolute left-12 top-0 bottom-0 border-l-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 mx-4 animate-home-borders-fadeIn"></div>

      <div className='flex gap-64 items-center'>
        <Left />
      </div>

      <div className="absolute bottom-10 left-0 right-0 border-b-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 animate-home-borders-fadeIn"></div>
      <div className="absolute bottom-12 left-0 right-0 border-b-2 border-dashed animate-dotted-border border-slate-200 dark:border-stone-900 animate-home-borders-fadeIn"></div>
    </div>
  );
}

export default Home;
