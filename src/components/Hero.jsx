import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  const refBtn = useRef(null);
  const [btn, setBtn] = useState({
    x: null,
    y: null,
  });
  function handleMouseMove(e) {
    const x = e.pageX - refBtn.current.offsetLeft;
    const y = e.pageY - refBtn.current.offsetTop;
    setBtn({ x, y });
  }

  return (
    <section className=" bg-brand-light sm:pt-28 pt-28  pb-10 ">
      <section className="grid grid-cols-none lg:grid-cols-2 lg:gap-0 gap-12 place-items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="  grid lg:block  place-items-center "
        >
          <h1 className="text-brand-dark font-playfair font-bold  lg:text-6xl sm:leading-loose  leading-relaxed lg:leading-[1.2]  sm:text-4xl  md:text-5xl  text-center sm:text-start w-72 sm:w-full  lg:w-96 text-4xl">
            Make Your Style Looks Perfect
          </h1>
          <p className="font-open font-semibold md:text-lg text-brand lg:leading-loose leading-relaxed lg:text-start text-center mt-7 sm:w-auto w-52 ">
            Our Collection will help your fashion looks better
          </p>
          <p className="font-open font-semibold md:text-lg text-brand lg:leading-loose  leading-relaxed  lg:text-start text-center  sm:w-auto w-52">
            and we will provide the best product for you.
          </p>
          <Link
            to="/products"
            ref={refBtn}
            onMouseMove={(e) => handleMouseMove(e)}
            className={`bg-brand-dark text-white font-open font-bold w-fit  text-xl relative sm:flex hidden  mt-8  px-8 py-4
              before:absolute  before:top-${btn.y} before:left-${btn.x} before:w-0 before:h-0 before:bg-brand overflow-hidden before:transition-all before:duration-500 before:rounded-full hover:before:w-[300px] hover:before:h-[300px] before:translate-x-[-50%] before:translate-y-[-50%]`}
          >
            <span className="relative z-1">SHOP NOW</span>
          </Link>
        </motion.div>
        <div className=" relative  sm:py-12  py-0">
          <img
            src="/assets/pattern blue.svg"
            alt="square"
            className="absolute top-0 -left-16 hidden sm:block"
          />
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/assets/images/1x.jpg 420w ,
                   /assets/images/2x.jpg 840w ,
                  /assets/images/3x.jpg 1260w   "
              sizes="30vw"
            />

            <source
              media="(min-width: 640px)"
              srcSet="/assets/images/phone-1x.jpg 390w ,
                   /assets/images/phone-2x.jpg 780w "
              sizes="50vw"
            />
            <source
              media="(min-width: 200px)"
              srcSet="/assets/images/phone-1x.jpg 390w ,
                   /assets/images/phone-2x.jpg 780w "
              sizes="100vw"
            />
            <img
              src="/assets/images/phone-1x.jpg"
              alt="hero"
              className="h-auto max-w-full"
            />
          </picture>

          <img
            src="/assets/pattern blue.svg"
            alt="square"
            className="absolute bottom-0 -right-16  hidden sm:block"
          />
          <div className="absolute bottom-[34px] left-[50%] -ml-[88px] w-max    sm:hidden">
            <a
              href="#products"
              className={`bg-brand-dark text-white   font-open font-bold text-xl w-[176px]  mt-8  px-8 py-4 sm:hidden
              relative    before:content-[''] before:absolute before:top-0 before:left-0  before:w-0  before:h-[100%]  before:bg-brand   before:transition-all before:duration-500  hover:before:w-[100%] overflow-hidden  `}
            >
              <span className="relative z-1">SHOP NOW</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
