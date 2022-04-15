import { GetServerSidePropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeIUp, routeAnimation, stagger } from "../animate";
function Home() {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium text-justify">
        INFP personalities are true idealists, always looking for the hint of
        good in even the worst of people and events, searching for ways to make
        things better. While they may be perceived as calm, reserved, or even
        shy, INFPs have an inner flame and passion that can truly shine.
        Comprising just 4% of the population, the risk of feeling misunderstood
        is unfortunately high for the INFP personality type – but when they find
        like-minded people to spend their time with, the harmony they feel will
        be a fountain of joy and inspiration.
      </h5>
      <div
        className="flex-grow p-4 mt-1 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">
          What I am doing
        </h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2 "
          variants={stagger}
          animate="animate"
          initial="initial"
        >
          {services.map((service) => {
            return (
              <motion.div
                variants={fadeIUp}
                // animate="animate"
                // initial="initial"
                className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200"
                key={service.title}
              >
                <ServiceCard service={service} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   return {
//     props: { services: data.services },
//   };
// };
