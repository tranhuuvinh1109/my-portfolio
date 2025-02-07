import { EDUCATION } from "../../constant/common";
import TitleSession from "../TitleSession";
import { LuDot } from "react-icons/lu";

const Education = () => {
  return (
    <div>
      <TitleSession title="Education" />
      <div>
        {EDUCATION.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold uppercase">{item.school}</h1>
                <h2 className="text-highlight font-semibold">{item.time}</h2>
              </div>
              <div className="mt-2">
                <h2 className="flex items-center gap-2">
                  <LuDot fontSize={30} />
                  Major:
                  <span className="font-semibold">{item.major}</span>
                </h2>
                <h2 className="flex items-center gap-2">
                  <LuDot fontSize={30} />
                  GPA:
                  <span className="font-semibold">{item.gpa}</span>
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Education;
