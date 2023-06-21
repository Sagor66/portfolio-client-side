import wave1 from '../../../assets/wave/wave1.png'
import './featured.css'

const FeaturedProjects = () => {
  return (
    <div className="bg-blue-500 h-[1080px] relative bg-featured">
      <img className='absolute top-0' src={wave1} alt="" />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold tracking-wider text-white text-center px-4 py-2 w-fit mx-auto pt-32">
          Featured Projects
        </h2>
      </div>
    </div>
  );
};

export default FeaturedProjects;
