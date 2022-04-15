import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
  return activeItem !== name ? (
    <div className="flex space-x-3 text-red-400 font-lg">
      <Link href={route}>
        <a>
          <span
            onClick={() => setActiveItem(name)}
            className="hover:text-purple-500"
          >
            {name}
          </span>
        </a>
      </Link>
    </div>
  ) : null;
};

const Navbar: FunctionComponent = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "projects") setActiveItem("Projects");
    if (pathname === "resume") setActiveItem("Resume");
  }, []);
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-purple-500 border-b-4 border-purple-500 md:text-2xl ">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-xl ">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
