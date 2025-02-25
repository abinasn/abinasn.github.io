import BorderDesign from '../components/border-design';
import { Background, BackgroundIllustration } from "../components/background";
import Left from './left';
// import Right from './right';

function Home() {
  return (
    <BorderDesign>
      <>
        <BackgroundIllustration />
        <Background />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto">
        <Left />
          {/* <div className="order-2 md:order-1">
            
          </div>
          <div className="order-1 md:order-2">
            <Right />
          </div> */}
        </div>
      </>
    </BorderDesign>
  );
}

export default Home;
