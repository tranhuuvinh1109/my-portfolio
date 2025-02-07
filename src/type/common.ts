import { SVGProps } from "react";
import { Position, ProjectType } from "../enum/common";

export type ProjectItemType = {
  name: string;
  description: string;
  time: string;
  numberOfMembers: number;
  position: Position[];
  logo?: string;
  videoUrl?: string;
  imageUrl?: {
    link: string;
    description?: string;
  }[];
  technologies: {
    backend?: TechUsingItem[];
    frontend?: TechUsingItem[];
  };
  linkToProject?: string;
  github?: string;
  type: ProjectType;
};

type TechUsingItem = {
  name: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};
