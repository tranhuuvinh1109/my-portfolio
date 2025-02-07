import { ProjectItemType } from "../../type/common";
import { LuDot } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectItemProps = {
  projectData: ProjectItemType;
  onClickReadMore: () => void;
};
const ProjectItem = ({ projectData, onClickReadMore }: ProjectItemProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border p-5">
      <div>
        <h1 className="text-center text-2xl font-semibold text-black">{projectData.name}</h1>
        <img src={projectData.logo} alt="Logo" className="mx-auto" />
      </div>
      <div>
        <h4 className="font-semibold">Descriptions:</h4>
        <p>{projectData.description}</p>
      </div>
      <div>
        <h4 className="font-semibold">Technologies:</h4>
        <div className="flex flex-col gap-2">
          {projectData.technologies.frontend && (
            <div className="flex items-center gap-4">
              <LuDot fontSize={32} />
              <h4>Frontend:</h4>
              <div className="flex items-center gap-1">
                {projectData.technologies.frontend?.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div key={index}>
                      <Icon />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {projectData.technologies.backend && (
            <div className="flex items-center gap-4">
              <LuDot fontSize={32} />
              <h4>Backend:</h4>
              <div className="flex items-center gap-1">
                {projectData.technologies.backend?.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div key={index}>
                      <Icon />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end gap-4">
        {projectData.linkToProject && (
          <a
            className="flex items-center gap-1 rounded-md bg-highlight px-5 py-2 text-white hover:bg-red-300"
            target="_blank"
            rel="noopener noreferrer"
            href={projectData.linkToProject}
          >
            Open Project
            <FaExternalLinkAlt />
          </a>
        )}
        <button
          onClick={onClickReadMore}
          className="flex items-center gap-1 rounded-md bg-highlight px-5 py-2 text-white hover:bg-red-300"
        >
          Read more <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
