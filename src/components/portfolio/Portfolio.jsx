import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, accusamus omnis tempore hic aliquam quis magnam asperiores fugiat deserunt architecto quisquam harum repudiandae perferendis placeat quasi velit, iste, quam dolores.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, accusamus omnis tempore hic aliquam quis magnam asperiores fugiat deserunt architecto quisquam harum repudiandae perferendis placeat quasi velit, iste, quam dolores.",
  },
  {
    id: 3,
    title: "Vanilla JS APP",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, accusamus omnis tempore hic aliquam quis magnam asperiores fugiat deserunt architecto quisquam harum repudiandae perferendis placeat quasi velit, iste, quam dolores.",
  },
  {
    id: 4,
    title: "Music APP",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-green-rolling-landscape-with-a-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, accusamus omnis tempore hic aliquam quis magnam asperiores fugiat deserunt architecto quisquam harum repudiandae perferendis placeat quasi velit, iste, quam dolores.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start","end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
