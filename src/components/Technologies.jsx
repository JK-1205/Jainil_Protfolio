import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Icon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border-2 border-neutral-800 p-4 min-w-[90px] flex justify-center items-center mx-4 hover:scale-105 transition-transform duration-300"
  >
    {children}
  </a>
);

const Technologies = () => {
  return (
    <div className=" border-neutral-800 px-6 py-28 overflow-hidden">
      <h1 className="mb-16 text-center text-5xl font-extrabold tracking-wide text-white relative">
        <span className="inline-block relative after:absolute after:left-1/2 after:bottom-[-10px] after:h-[4px] after:w-12 after:-translate-x-1/2 after:rounded-full after:bg-cyan-400 after:content-['']">
          <span className="text-white">My </span>
          <span className="text-neutral-400">Technologies</span>
        </span>
      </h1>

      <div className="relative w-full overflow-hidden">
        <div className="animate-scroll flex w-max">
          {[...Array(2)].map((_, index) => (
            <div className="flex" key={index}>
              <Icon href="https://reactjs.org">
                <RiReactjsLine className="text-6xl text-cyan-400" />
              </Icon>
              <Icon href="https://nextjs.org">
                <TbBrandNextjs className="text-6xl text-white" />
              </Icon>
              <Icon href="https://www.mongodb.com">
                <SiMongodb className="text-6xl text-green-500" />
              </Icon>
              <Icon href="https://redis.io">
                <DiRedis className="text-6xl text-red-700" />
              </Icon>
              <Icon href="https://nodejs.org">
                <FaNodeJs className="text-6xl text-green-500" />
              </Icon>
              <Icon href="https://www.postgresql.org">
                <BiLogoPostgresql className="text-6xl text-sky-700" />
              </Icon>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
