import React from 'react';
import video from '../assets/video.mp4';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24 ml-10 mr-10'>
      <video className='w-full h-[500px] object-cover object-center' src={video} autoPlay loop />
      <div>
        <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <h1 className="text-orange-500 text-4xl font-bold">Real Dreams, Real Home</h1>
        </div>
      </div>
      <Search />
    </section>
  );
}

export default Banner;
