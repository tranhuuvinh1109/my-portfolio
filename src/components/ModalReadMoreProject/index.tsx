import { Modal } from "antd";
import { ProjectItemType } from "../../type/common";
import { LuDot } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import useWindowWidth from "../../hook/useWindowWidth";

type ModalReadMoreProjectProps = {
  open: boolean;
  onCancel: () => void;
  title: string;
  projectData: ProjectItemType;
};

const ModalReadMoreProject = ({ open, onCancel, title, projectData }: ModalReadMoreProjectProps) => {
  const width = useWindowWidth();
  return (
    <Modal title={title} open={open} footer={null} onCancel={onCancel} width={"auto"} className="max-w-[1200px]">
      <div className="flex max-h-[600px]  flex-col gap-4 overflow-y-auto rounded-lg p-5 md:max-h-[500px]">
        <div>
          <h1 className="text-center text-2xl font-semibold text-black">{projectData.name}</h1>
          <img src={projectData.logo} alt="Logo" className="mx-auto max-h-10" />
        </div>
        {projectData.github && (
          <div className="mb-4 mt-10 flex items-center gap-2  ">
            <h4 className="text-xl font-semibold">Repository:</h4>
            <a
              className="flex items-center hover:text-highlight"
              href={projectData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub fontSize={28} />
            </a>
          </div>
        )}
        <div>
          <h4 className="mb-4 mt-10 text-xl font-semibold">Descriptions:</h4>
          <p>{projectData.description}</p>
        </div>
        <div>
          <h4 className="mb-4 mt-10 text-xl font-semibold">Technologies:</h4>
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
        <div>
          <h4 className="mb-4 mt-10 text-xl font-semibold">Role:</h4>
          <div>
            {projectData.position.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-4">
                  <LuDot fontSize={32} />
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        {projectData.videoUrl && (
          <div className="h-[315px]">
            <h4 className="mb-4 mt-10 text-xl font-semibold">Video Demo:</h4>
            <iframe
              width={width > 560 ? "560" : "300"}
              height="315"
              src={projectData.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {projectData.imageUrl && (
          <div>
            <h4 className="mb-4 mt-10 text-xl font-semibold">Preview:</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
              {projectData.imageUrl.map((item, index) => {
                return (
                  <div className="rounded-md border p-2">
                    <img src={item.link} alt={`${projectData.name}-${index}`} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
export default ModalReadMoreProject;
