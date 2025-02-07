import { Modal } from "antd";
import { ProjectItemType } from "../../type/common";
import { LuDot } from "react-icons/lu";

type ModalReadMoreProjectProps = {
  open: boolean;
  onCancel: () => void;
  title: string;
  projectData: ProjectItemType;
};

const ModalReadMoreProject = ({ open, onCancel, title, projectData }: ModalReadMoreProjectProps) => {
  return (
    <Modal title={title} open={open} footer={null} onCancel={onCancel} width={"auto"} className="max-w-[1200px]">
      <div className="flex max-h-[500px] flex-col gap-4 overflow-y-auto rounded-lg p-5">
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
        <div className="h-[315px]">
          <h4 className="font-semibold">Video Demo:</h4>
          {projectData.videoUrl && (
            <iframe
              width="560"
              height="315"
              src={projectData.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </Modal>
  );
};
export default ModalReadMoreProject;
