import { FunctionComponent } from "react";
import { Iskill } from "../type";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{ data: Iskill }> = ({
  data: { Icon, name, level },
}) => {
  const bar_width = `${level}%`;

  const varients = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      taransition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to to-blue-500"
        style={{
          width: bar_width,
        }}
        variants={varients}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};
export default Bar;
