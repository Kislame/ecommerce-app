import uniqid from 'uniqid';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function Categories() {
  const categories = useMemo(
    () => [
      {
        img: '/assets/images/coats.jpg',
        title: 'COATS',
      },
      {
        img: '/assets/images/dress.jpg',
        title: 'DRESSES',
      },
      {
        img: '/assets/images/shirt.jpg',
        title: 'SHIRTS',
      },
    ],
    []
  );
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex pt-8 flex-wrap  max-w-full   mt-14"
    >
      {categories.map((item) => (
        <Categoryitem img={item.img} title={item.title} key={uniqid()} />
      ))}
    </motion.div>
  );
}

export default Categories;

function Categoryitem({ img, title }) {
  return (
    <motion.div
      variants={projectVariant}
      className="lg:flex-1  flex-auto    h-[70vh] relative m-2"
    >
      <img src={img} alt={title} className="w-full h-full object-cover " />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col ">
        <h2 className="text-white text-4xl  font-bold font-open mb-4">
          {title}
        </h2>
        <button
          className="py-4 px-6 font-medium bg-white font-open  hover:bg-black hover:text-white transition duration-300 ease-in"
          type="button"
        >
          SHOP NOW
        </button>
      </div>
    </motion.div>
  );
}
