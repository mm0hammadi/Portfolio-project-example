import { FunctionComponent } from "react";
import { Category } from "../type";

export const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavbarItems value="all" {...props} />
      <NavbarItems value="React" {...props} />
      <NavbarItems value="Redux" {...props} />
      <NavbarItems value="Nextjs" {...props} />
      <NavbarItems value="TypeScript" {...props} />
      <NavbarItems value="Javascript" {...props} />
    </div>
  );
};

export default ProjectsNavbar;

const NavbarItems: FunctionComponent<{
  value: Category | "all";
  active: string;
  handlerFilterCategory: Function;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-purple-500";
  if (active === value) className += " text-purple-500";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};
