import HomePartOne from "../../components/homePartOne";
import HomePartTwo from "../../components/HomePartTwo";
import video1 from '../../assets/video.mp4'
import video2 from '../../assets/video2.mp4'
import Feature from "../../components/Feature";
import Vehicle from "../../components/Vehicle";
import WhyChoseus from "../../components/WhyChoseus";
import AutoRpairService from "../../service/AutoRpairService";
export default function Home() {
  return (
    <div>
      {/* car servicing related  video */}
 <div className="main w-full">
  {/* First video */}
  <video
    src={video1}
    autoPlay
    loop
    muted
    className="background-video"
  />
  <div className="content">
    <h1>Welcome to Car Servicing Center</h1>
    <p>Nice to visit our webpage</p>
  </div>

  {/* Second video */}
  <video
    src={video2}
    autoPlay
    loop
    muted
    className="background-video"
  />
</div>


      {/* left text right image hero daisy */}
      <div className='w-11/12 mx-auto mt-24'>
      <Feature />
      </div>
       <div className='w-11/12 mx-auto mt-24'>
       <HomePartOne />
     </div>
      <div className="w-full">
          <Vehicle />

      </div>
      <div className="w-11/12 mx-auto">
        <AutoRpairService />
      </div>
      <div className="w-11/12 mx-auto">
      <WhyChoseus />
      </div>
     <div className='w-11/12 mx-auto mt-24'>
       <HomePartTwo />
     </div>
      
      {/* feature  card wise */}
      {/* righ text left image hero daisy */}
      {/* Servicing core feature */}
      {/*  meet our team tecnician expert image also details card wise show  */}
      {/* user review */}
      {/* Why choose us */}
      {/* footer */}
    </div>
  );
}
