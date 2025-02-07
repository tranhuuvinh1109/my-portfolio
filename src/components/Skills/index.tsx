import { FRAMEWORKS, LANGUAGE_PROGRAMINGS } from "../../constant/common";
import TitleSession from "../TitleSession";

const Skills = () => {
  return (
    <div>
      <TitleSession title="Skills" />
      <div>
        <h1 className="text-xl font-semibold">Programming Languages</h1>
        <ul className="mt-2 flex gap-6">
          {LANGUAGE_PROGRAMINGS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <Icon width={52} height={52} />
              </li>
            );
          })}
        </ul>
        <h1 className="mt-10 text-xl font-semibold">Frameworks</h1>
        <ul className="mt-2 flex gap-6">
          {FRAMEWORKS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className="flex flex-col items-center rounded-lg px-5 py-2 hover:bg-red-200 hover:text-white"
              >
                <Icon width={52} height={52} />
                <span className="font-semibold">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Skills;
