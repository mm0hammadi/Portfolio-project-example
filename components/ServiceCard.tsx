import { FunctionComponent } from "react";
import { Iservice } from "../type";

const ServiceCard: FunctionComponent<{ service: Iservice }> = ({
  service: { Icon, about, title },
}) => {
  const createMarup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-purple-500" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
