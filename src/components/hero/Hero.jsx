import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
    scrollButton:{
        option: 0,
        y: 10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          varaints={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 varaints={textVariants}>Areeb & Anas & Israr</motion.h2>
          <motion.h1 varaints={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div className="buttons" varaints={textVariants}>
            <motion.button varaints={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button varaints={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt="" animate='scrollButton' varaints={textVariants} />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" varaints={sliderVariants} initial="initial" animate="animate">
        Write Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
