import Image from "next/image";
import avator from "../public/images/avator.jpeg";
import { GoLocation } from "react-icons/go";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <Image
        src={avator}
        alt="user avator"
        className="mx-auto rounded-full object-fill "
        width="100px"
        height="100px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-2 font-medium font-kaushan">
        <span className="text-purple-500">Misa </span>
        Mohammadi
      </h3>
      <p className="px-2 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Front-End Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/images/Masoomeh's Resume"
        download="Masoomeh's Resume"
      >
        {" "}
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-3 text-purple-500 md:w-full">
        <a href="https://github.com/mm0hammadi" target="_blank">
          <AiFillGithub className="w-6 h-6 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/masoomeh-mohammadi/"
          target="_blank"
        >
          {" "}
          <AiFillLinkedin className="w-6 h-6 cursor-pointer" />
        </a>
        <a href="" target="_blank">
          {" "}
          <AiFillYoutube className="w-6 h-6 cursor-pointer" />
        </a>
      </div>

      {/* addres */}
      <div
        className="max-w-xl py-4 my-2 bg-gray-200 dark:bg-black-500 dark:bg-dark-200 "
        style={{ marginRight: "-1rem", marginLeft: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="text-purple-500" />
          <span>Tehran,Iran</span>
        </div>
        <p className="my-2">mhmohamadi21@gmail.com</p>
        {/* <p className="my-2">091049733321</p> */}
      </div>
      {/* email button */}
      <button
        className="w-8/12 py-1 my-1 text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-400 focus:outline-none "
        // onClick={() => window.open("mailto:mhmohamadi21@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 py-1 my-1 text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-400 focus:outline-none"
      >
        Dark Theme
      </button>
    </>
  );
}
