import { CHAP } from "../../constant/common";
import { FaRegHandPointRight } from "react-icons/fa";

const Sidebar = ({ active }: { active: string }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img
        className=" h-[128px] w-[128px] rounded-full"
        alt="avt"
        src="https://media.licdn.com/dms/image/v2/D5603AQEPjUlLhwMQMw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723362081635?e=1744243200&v=beta&t=VgkkHEiiR8UWQe_EkbCvpQfBZ7459vImCG9ysGNVjSY"
      />
      <div>
        <ul className="flex flex-col gap-4">
          {CHAP.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  document.getElementById(item.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`relative flex items-center gap-2 font-semibold uppercase text-white ${active === item.href ? " italic" : ""} hover:cursor-pointer`}
              >
                {active === item.href && (
                  <div className=" absolute left-[-20px]">
                    <FaRegHandPointRight fontSize={16} />
                  </div>
                )}
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
