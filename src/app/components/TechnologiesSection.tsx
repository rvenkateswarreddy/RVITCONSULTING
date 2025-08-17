"use client";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, SiTailwindcss,
  SiGraphql, SiDocker, SiKubernetes, SiGooglecloud, SiFirebase, SiRedux,
  SiMongodb, SiPostgresql, SiMysql, SiJenkins, SiGit, SiGithub, SiGitlab,
  SiBitbucket, SiSass, SiHtml5, SiCss3, SiFigma, SiVercel, SiNetlify,
  SiPython, SiAngular, SiVuedotjs, SiFlutter, SiSwift, SiPhp,
} from "react-icons/si";
import {
  FaAws, FaJava, FaLinux, FaWindows, FaApple, FaNodeJs, FaRust, 
  FaSlack, FaTrello, FaJira, FaSalesforce, FaWordpress,
} from "react-icons/fa";
import { DiRedis, DiDjango, DiRuby } from "react-icons/di";
import { GrCloudlinux } from "react-icons/gr";

// List of technologies
const technologies = [
  { name: "React", icon: <SiReact className="text-[#61dafb]" size={30} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" size={30} /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" size={30} /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" size={30} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#215732]" size={30} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06b6d4]" size={30} /> },
  { name: "GraphQL", icon: <SiGraphql className="text-[#e535ab]" size={30} /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ed]" size={30} /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-[#326ce5]" size={30} /> },
  { name: "AWS", icon: <FaAws className="text-[#ff9900]" size={30} /> },
  { name: "Google Cloud", icon: <SiGooglecloud className="text-[#4285F4]" size={30} /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" size={30} /> },
  { name: "Redux", icon: <SiRedux className="text-[#764abc]" size={30} /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={30} /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" size={30} /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" size={30} /> },
  { name: "Jenkins", icon: <SiJenkins className="text-[#D24939]" size={30} /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" size={30} /> },
  { name: "GitHub", icon: <SiGithub className="text-black" size={30} /> },
  { name: "GitLab", icon: <SiGitlab className="text-[#FC6D26]" size={30} /> },
  { name: "Bitbucket", icon: <SiBitbucket className="text-[#2684FF]" size={30} /> },
  { name: "Sass", icon: <SiSass className="text-[#CC6699]" size={30} /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" size={30} /> },
  { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" size={30} /> },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" size={30} /> },
  { name: "Vercel", icon: <SiVercel className="text-black" size={30} /> },
  { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" size={30} /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" size={30} /> },
  { name: "Java", icon: <FaJava className="text-[#007396]" size={30} /> },
  { name: "Angular", icon: <SiAngular className="text-[#DD0031]" size={30} /> },
  { name: "Vue.js", icon: <SiVuedotjs className="text-[#4FC08D]" size={30} /> },
  { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" size={30} /> },
  { name: "Swift", icon: <SiSwift className="text-[#FA7343]" size={30} /> },
  { name: "PHP", icon: <SiPhp className="text-[#777BB4]" size={30} /> },
  { name: "Linux", icon: <FaLinux className="text-[#333333]" size={30} /> },
  { name: "Windows", icon: <FaWindows className="text-[#00adef]" size={30} /> },
  { name: "Apple", icon: <FaApple className="text-[#a2aaad]" size={30} /> },
  { name: "Rust", icon: <FaRust className="text-[#dea584]" size={30} /> },
  { name: "Redis", icon: <DiRedis className="text-[#d82c20]" size={30} /> },
  { name: "Django", icon: <DiDjango className="text-[#092e20]" size={30} /> },
  { name: "Ruby", icon: <DiRuby className="text-[#cc342d]" size={30} /> },
  { name: "CloudLinux", icon: <GrCloudlinux className="text-[#00aff0]" size={30} /> },
  { name: "Slack", icon: <FaSlack className="text-[#4A154B]" size={30} /> },
  { name: "Trello", icon: <FaTrello className="text-[#0079BF]" size={30} /> },
  { name: "Jira", icon: <FaJira className="text-[#0052CC]" size={30} /> },
  { name: "Salesforce", icon: <FaSalesforce className="text-[#00A1E0]" size={30} /> },
  { name: "WordPress", icon: <FaWordpress className="text-[#21759b]" size={30} /> },
];

// Duplicate for seamless marquee
const techsRow = [...technologies, ...technologies];

export default function TechnologiesMarqueeSection() {
  return (
    <>
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          animation: marqueeLeft 40s linear infinite;
        }
        .marquee-right {
          animation: marqueeRight 42s linear infinite;
        }
      `}</style>

      <section className="relative py-20 px-6 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-blue-600">Technologies</span>{" "}
            <span className="text-gray-900">We Cover</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            From modern frameworks to robust cloud platforms and CI/CD tools, our stack covers everything your enterprise needs.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="flex flex-col gap-10 max-w-full">
          {/* Top row */}
          <div className="w-full overflow-hidden relative">
            <div className="marquee-left flex gap-8 w-[4000px]">
              {techsRow.map((tech, idx) => (
                <div
                  key={`top-${tech.name}-${idx}`}
                  className="flex flex-col items-center justify-center w-[90px] h-[90px] bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
                  style={{ flex: "0 0 90px" }}
                >
                  <div className="mb-2">{tech.icon}</div>
                  <span className="text-xs font-medium text-gray-700 text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="w-full overflow-hidden relative">
            <div className="marquee-right flex gap-8 w-[4000px]">
              {techsRow.map((tech, idx) => (
                <div
                  key={`bottom-${tech.name}-${idx}`}
                  className="flex flex-col items-center justify-center w-[90px] h-[90px] bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
                  style={{ flex: "0 0 90px" }}
                >
                  <div className="mb-2">{tech.icon}</div>
                  <span className="text-xs font-medium text-gray-700 text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
