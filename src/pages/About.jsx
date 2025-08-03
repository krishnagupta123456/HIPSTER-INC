import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={`${theme === 'theme1' ? ' text-black md:p-6 p-2' : `${theme === 'theme2' ? 'bg-gray-800 md:p-6 p-2 text-white' : `${theme === 'theme3' ? ' bg-pink-50 md:p-6 p-2' : ''}`} `}`}>
      <div>
        <h2 className="text-4xl font-bold text-center  text-green-600 mb-3">About Us</h2>

        <p className="text-lg md:w-[800px] flex mx-auto md:mb-16 mb-8 text-center">
          Welcome to our store! We are passionate about bringing you high-quality products across multiple categories such as fashion, electronics, and jewelry.
        </p>

        <div className="md:flex md:gap-20 md:my-20 my-10">
          <div className='md:w-[50%]'>
            <h3 className="text-2xl font-semibold  text-green-600 mb-2">Who We Are</h3>
            <p className="md:text-xl text-md mt-5 md:leading-9 leading-6 text-justify">
              We’re a dedicated team of developers, designers, and customer success experts committed to providing the best online shopping experience. With a wide range of products and reliable delivery services, we aim to meet all your lifestyle needs.
              We’re a dedicated team of developers, designers, and customer success experts committed to providing the best online shopping experience. With a wide range of products and reliable delivery services, we aim to meet all your lifestyle needs.
            </p>
          </div>

          <div className='md:w-[50%] md:mt-0 mt-10'>
            <img src="./team.jpg" alt="" />
          </div>
        </div>

        <hr className='flex mx-auto w-[90%] text-black border-[0.5] rounded-full border-gray-500' />

        <div className="md:flex gap-20 md:my-32 my-10">
          <div className='md:w-[50%] md:mb-0 mb-10'>
            <img src="./mission.jpg" alt="" />
          </div>
          <div className='md:w-[50%]'>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Our Mission</h3>
            <p className="md:text-xl text-md mt-5 md:leading-9 leading-6 text-justify">
              Our mission is to simplify online shopping with a user-friendly interface, fast delivery, and excellent customer support. We want to be your go-to store for trusted, affordable products with top-notch service.
              Our mission is to simplify online shopping with a user-friendly interface, fast delivery, and excellent customer support. We want to be your go-to store for trusted, affordable products with top-notch service.
              Our mission is to simplify online shopping with a user-friendly interface, fast delivery, and excellent customer support.
            </p>
          </div>
        </div>

        <div className="mt-10 mb-32">
          <div className={`${theme === 'theme2' ? 'bg-gray-700' : 'bg-slate-300'} rounded-2xl md:p-10 p-4`}>
            <h3 className="md:text-4xl text-xl font-semibold text-green-600">Why Choose Us?</h3>
            <div className="md:flex items-center gap-20">
              <ul className="md:w-[50%] list-disc md:text-xl text-md md:pl-6 md:mt-10 mt-4 space-y-2 md:ml-10 ml-4">
                <li>All our products are hand-picked and rigorously quality tested.</li>
                <li>Enjoy secure payments with fast, reliable, and trackable delivery options.</li>
                <li>Our customer service team is friendly, responsive, and always ready.</li>
                <li>Trusted by thousands of loyal customers for quality and reliability.</li>
                <li>We prioritize your satisfaction with every order, big or small.</li>
                <li>Seamless shopping experience designed for comfort, speed, and confidence.</li>
              </ul>
              <div className='md:w-[50%] mt-10'>
                <img src="./team.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;