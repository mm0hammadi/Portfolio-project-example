import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { AiFillCloseCircle, AiFillGithub, AiFillProject } from "react-icons/ai";
import { IProject } from "../type";
import { motion } from "framer-motion";
import { fadeIUp, stagger } from "../animate";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: number | null) => void;
}> = ({
  project: {
    name,
    description,
    category,
    github_url,
    key_techs,
    image_path,
    deployed_url,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        width={500}
        height={300}
        src={image_path}
        alt={name}
        layout="responsive"
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 bg-gray-100 rounded-lg tex:t-black md md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 md:p-10">
          <motion.div variants={stagger} animate="animate" initial="initial">
            {/* <img src={image_path} alt={name} /> */}
            <motion.div variants={fadeIUp} className="border-4 border-gray-100">
              <Image
                width={500}
                height={300}
                src={image_path}
                alt={name}
                layout="responsive"
              />
            </motion.div>
            <motion.div
              className="flex justify-center my-3 space-x-3"
              variants={fadeIUp}
            >
              <a
                href={github_url}
                className="flex justify-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>GitHub</span>
              </a>
              <a
                href={deployed_url}
                className="flex justify-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              className="mb-3 text-xl font-medium md:text-2xl "
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {name}
            </motion.h2>
            <motion.h3 className="mb-3 font-medium " variants={fadeIUp}>
              {description}
            </motion.h3>
            <motion.div
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
              variants={fadeIUp}
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm text dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute bg-gray-200 rounded-full P-1 top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <AiFillCloseCircle size={30} />
            {/* <MdClose size={30} /> */}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
