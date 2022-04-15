import Bar from "../components/Bar";
import { langueges, tools } from "../data";
import { motion } from "framer-motion";
import { fadeIUp, routeAnimation } from "../animate";
const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* sducation and expo */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeIUp} animate="animate" initial="initial">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-3 text-xl font-bold">
              Computer Software Engineering
            </h5>
            <p className="font-semibold">
              Shariaty Technical and Vocational University (2010-2014)
            </p>
            <p className="my-3">I graduate from Shariaty University</p>
          </div>
        </motion.div>
        <motion.div variants={fadeIUp} animate="animate" initial="initial">
          <h5 className="my-3 text-2xl font-bold">Exprience</h5>
          <div>
            <h5 className="my-3 text-xl font-bold">Freelancer</h5>
            <p className="font-semibold">Self Employed</p>
            <p className="my-3">
              I have worked in the area of web development since 2018.
              Specifically, I have focused on front-end development in recent
              years to improve my skills in this field
            </p>
          </div>
        </motion.div>
      </div>
      {/* langs and tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold ">languages & framworks</h5>
          <div className="my-2">
            {langueges.map((languege) => (
              <Bar data={languege} key={languege.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">tools & software</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
