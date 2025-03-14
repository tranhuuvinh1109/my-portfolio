import { CONTACT, USER_INFORMATION } from "../../constant/common";
import { LuDot } from "react-icons/lu";
import { PiReadCvLogoBold } from "react-icons/pi";

type AboutProps = {
  onClickBtnMyCV: () => void;
};
const About = ({ onClickBtnMyCV }: AboutProps) => {
  return (
    <div className="pt-4" id="about">
      <h1 className="text-5xl font-semibold md:text-[80px]">
        <span className=" text-highlight">Vinh</span> Tran Huu
      </h1>
      <h2 className="hidden items-center gap-0.5 md:flex">
        {USER_INFORMATION.birthday} <LuDot fontSize={30} /> {USER_INFORMATION.address} <LuDot fontSize={30} />
        {USER_INFORMATION.phone} <LuDot fontSize={30} />
        <a href={`mailto:${USER_INFORMATION.email}`} className="font-semibold text-highlight">
          {USER_INFORMATION.email}
        </a>
      </h2>
      <div>
        <div className="flex items-center">
          <LuDot fontSize={30} />
          <h2 className="flex gap-2">
            <span>Birthday: </span>
            <span className="font-semibold">{USER_INFORMATION.birthday}</span>
          </h2>
        </div>
        <div className="flex items-center">
          <LuDot fontSize={30} />
          <h2 className="flex gap-2">
            <span>Address: </span>
            <span className="font-semibold">{USER_INFORMATION.address}</span>
          </h2>
        </div>
        <div className="flex items-center">
          <LuDot fontSize={30} />
          <h2 className="flex gap-2">
            <span>Phone Number: </span>
            <span className="font-semibold">{USER_INFORMATION.phone}</span>
          </h2>
        </div>
        <div className="flex items-center">
          <LuDot fontSize={30} />
          <h2 className="flex gap-2">
            <span>Email: </span>
            <a href={`mailto:${USER_INFORMATION.email}`} className="font-semibold text-highlight">
              {USER_INFORMATION.email}
            </a>
          </h2>
        </div>
      </div>
      <ul className="mt-4 flex justify-center gap-4 md:justify-start">
        {CONTACT.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index}>
              <a
                className="flex items-center hover:text-highlight"
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
      <div className="my-8">
        <button
          className="flex items-center gap-4 rounded-xl  border px-8 py-2 text-xl hover:border-highlight hover:text-highlight"
          title="View My CV"
          onClick={onClickBtnMyCV}
        >
          <PiReadCvLogoBold fontSize={40} /> My CV
        </button>
      </div>
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
