import React from 'react';
import image1 from '../../Image/Image1.jpg'

const About = () => {
    return (
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Buy Before Sold Out
        <br class="hidden lg:inline-block"/>Readymade Furniture</h1>
      <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, velit! Voluptates odit dolores, eaque modi soluta quas sint. Omnis quibusdam ducimus inventore molestiae minima eos, ex consequatur officia hic voluptatibus.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Buy Now</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={image1} />
    </div>
  </div>
</section>
    
    );
};

export default About;