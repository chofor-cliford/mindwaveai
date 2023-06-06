import { styles } from "../styles";
import { AiOutlineRight } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col bg-transparent justify-center relative items-center w-full mt-14 ${styles.paddingY}`}
    >
      <AnimatePresence>
        <motion.div
          className="items-center flex justify-center flex-col relative "
          transition={{ duration: 1.2, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
        >
          <a
            href="#"
            target="_blank"
            className="flex text-gray-400 border-solid border-2 shadow-md bg-secondary p-2 rounded-full border-gray-800 gap-1 align-center cursor-pointer no-underline"
          >
            <p className="text-sm font-medium bg-transparent">
              Free Alpha Release Now Available!
            </p>
            <AiOutlineRight className="hover:translate-x-1 bg-transparent" />
          </a>
          <h1 className={`${styles.heroHeadText} text-center`}>
            Unlock the Power of the <br />
            Mind with AI
          </h1>
          <h2 className={`${styles.heroSubText}`}>
            Sign up to get access to GPT-4, <br />
            Images, Personas, Chats & More!
          </h2>
          <div className="hidden sm:flex flex-row gap-10 mt-9">
            <button className=" hover:text-white text-[18px] border-solid border-gray-800 px-8 py-2 rounded-md border-2 cursor-pointer text-gray-400 font-medium">
              Join Discord
            </button>
            <button className="bg-blue-gradient rounded-md py-2 px-8 hover:text-gray-500 text-[18px] font-medium cursor-pointer text-white">
              {" "}
              Sign up for free
            </button>
            <div className="gradient white__gradient blue__gradient" />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;

