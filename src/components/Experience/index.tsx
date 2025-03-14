import { LuDot } from "react-icons/lu";
import { EXPERIENCE } from "../../constant/common";

const Experience = () => {
  return (
    <div id="experience">
      <div className="flex flex-col gap-8">
        {EXPERIENCE.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold uppercase">{item.company}</h1>
                <h2 className="font-semibold text-highlight">{item.time}</h2>
              </div>
              <div className="mt-2">
                <h2 className="flex items-center gap-2">
                  <LuDot fontSize={30} />
                  Position:
                  <span className="font-semibold">{item.position}</span>
                </h2>
                {item.projects.length > 0 && (
                  <div>
                    <h2 className="flex items-center gap-2">
                      <LuDot fontSize={30} />
                      Project description:
                    </h2>
                    {item.projects.map((project, projectIndex) => {
                      return (
                        <ul key={projectIndex} className="flex flex-col gap-2 pl-10 font-semibold">
                          {project.descriptions.map((description, descriptionIndex) => {
                            return <li key={descriptionIndex}>- {description}</li>;
                          })}
                        </ul>
                      );
                    })}
                  </div>
                )}
                <div>
                  <h2 className="flex items-center gap-2">
                    <LuDot fontSize={30} />
                    Responsibilities:
                  </h2>
                  <ul className="flex flex-col gap-2 pl-10 font-semibold">
                    {item.responsibilities.map((responsibility, responsibilityIndex) => {
                      return <li key={responsibilityIndex}>- {responsibility}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  <h2 className="flex items-center gap-2">
                    <LuDot fontSize={30} />
                    Programming languages:
                  </h2>
                  <ul className="mt-2 grid grid-cols-2 gap-6 pl-10 md:flex">
                    {item.programmingLanguages.map((programmingLanguageItem) => {
                      const Icon = programmingLanguageItem.icon;
                      return (
                        <li
                          key={programmingLanguageItem.label}
                          className="flex flex-col items-center rounded-lg px-5 py-2 "
                        >
                          <Icon width={28} height={28} />
                          <span className="text-sm font-semibold">{programmingLanguageItem.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
