import { useCallback, useState } from "react";
import { PROJECTS } from "../../constant/common";
import ProjectItem from "../ProjectItem";
import TitleSession from "../TitleSession";
import { ProjectItemType } from "../../type/common";
import ModalReadMoreProject from "../ModalReadMoreProject";

const Projects = () => {
  const [projectSelected, setProjectSelected] = useState<ProjectItemType>();
  const handleClickReadMoreProject = useCallback((item: ProjectItemType) => {
    setProjectSelected(item);
  }, []);

  const hanldeCloseModal = useCallback(() => {
    setProjectSelected(undefined);
  }, []);

  return (
    <>
      <section id="projects">
        <TitleSession title="Projects" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {PROJECTS.map((item, index) => {
            return (
              <ProjectItem key={index} projectData={item} onClickReadMore={() => handleClickReadMoreProject(item)} />
            );
          })}
        </div>
      </section>
      {projectSelected && (
        <ModalReadMoreProject
          projectData={projectSelected}
          title={projectSelected.name}
          open={!!projectSelected}
          onCancel={hanldeCloseModal}
        />
      )}
    </>
  );
};
export default Projects;
