import React from 'react'
import { Constant } from '../_utils/Constant'


const Hero = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            <span className='text-primary'>Upload, Save</span> and easily <br />
            <span className='text-primary'>Share</span> your files in one place
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-500">
            {Constant.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded 
             bg-primary px-12 py-3 text-sm font-medium text-white 
             hover:bg-blue-700 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/files"
            >
             Get started
            </a>

            <a
              className="block w-full rounded border px-12 py-3 
              text-sm font-medium text-primary hover:bg-blue-700 
              focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
