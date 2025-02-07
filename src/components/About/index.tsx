import { CONTACT, USER_INFORMATION } from "../../constant/common";
import { LuDot } from "react-icons/lu";

const About = () => {
  return (
    <div className="pt-4" id="about">
      <h1 className=" text-6xl font-semibold">
        <span className=" text-highlight">Vinh</span> Tran Huu
      </h1>
      <h2 className="flex items-center gap-0.5">
        {USER_INFORMATION.birthday} <LuDot fontSize={30} /> {USER_INFORMATION.address} <LuDot fontSize={30} />
        {USER_INFORMATION.phone} <LuDot fontSize={30} />
        <a href={`mailto:${USER_INFORMATION.email}`} className="text-highlight font-semibold">
          {USER_INFORMATION.email}
        </a>
      </h2>
      <ul className="mt-4 flex gap-4">
        {CONTACT.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index}>
              <a
                className="hover:text-highlight flex items-center"
                href={item.value}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon fontSize={32} />
              </a>
            </li>
          );
        })}
      </ul>
      <h5 className="mt-4">
        I’m a frontend developer with over one year of experience in JavaScript technologies. I usually use TypeScript
        to develop applications.
      </h5>
      <h5>
        I have researched several AI models (such as YOLO, EasyOCR, and OpenAI) and applied them in my personal
        projects. I have also guided some students in developing products that are useful to society
      </h5>
    </div>
  );
};

export default About;
