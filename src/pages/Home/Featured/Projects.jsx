import { SiGithub, SiMongodb, SiReact, SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const Projects = ({ project }) => {
  const {
    githubClientLink,
    githubServerLink,
    keyFeatures,
    liveLink,
    projectName,
    technologiesUsed,
    videoLink,
  } = project;

  console.log(project.projectName)

  return (
    <div className="flex items-center gap-10 mb-10 bg-gradient-to-l from-blue-700 via-blue-500 to-white justify-between rounded-xl ">
      <div className="ml-3 z-20 top-1/3 border-2 border-white rounded-xl">
        <iframe
          width="700"
          height="393.75"
          src={videoLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="rounded-xl hover:scale-125 ease-in duration-300"
        ></iframe>
      </div>
      <div>
        <div className="w-[600px] bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 rounded-xl border-4 border-blue-100 px-5 py-8">
          <h4 className="text-center text-4xl text-white font-black mb-4">
            {projectName}
          </h4>
          <div className="text-white space-y-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold">Key Features</p>
                <ul className="ml-4 text-sm">
                  {keyFeatures.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 text-4xl mr-10 text-blue-500 bg-white px-4 py-2 rounded">
                <SiReact style={{ color: "#3b82f6" }}></SiReact>
                <SiTailwindcss style={{ color: "#0ea5e9" }}></SiTailwindcss>
                <SiExpress style={{ color: "#71717a" }}></SiExpress>
                <SiMongodb style={{ color: "#10b981" }}></SiMongodb>
              </div>
            </div>
            <div>
              <p className="font-bold">Technologies Used</p>
              <ul className="grid grid-cols-3 gap-x-2 text-xs ml-4">
                {technologiesUsed.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex items-center gap-10">
              <span className="text-4xl">
                <SiGithub></SiGithub>
              </span>
              <a
                href={githubClientLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-blue-500 font-extrabold px-3 py-2 rounded-ss-xl rounded-se-md rounded-ee-xl rounded-es-md border-2 border-white hover:bg-transparent hover:text-white">
                  Client Side
                </button>
              </a>
              <a
                href={githubServerLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-blue-500 font-extrabold px-3 py-2 rounded-ss-xl rounded-se-md rounded-ee-xl rounded-es-md border-2 border-white hover:bg-transparent hover:text-white">
                  Server Side
                </button>
              </a>
            </div>
              <button className="bg-transparent text-xl text-white font-extrabold px-3 py-3 rounded-full border-4 border-white hover:bg-white hover:text-blue-500 w-full">
                <a href={liveLink}
                target="_blank"
                rel="noopener noreferrer">Live Website</a>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// <div className="card card-side bg-white shadow-xl h-[300px] flex items-center">
//       <div className="ml-3">
//         <iframe
//           width="500"
//           height="281.25"
//           src={videoLink}
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowfullscreen
//           className="rounded-xl"
//         ></iframe>
//       </div>
//       <div className="card-body grid grid-cols-8 items-start">
//         <h2 className="card-title text-4xl font-extrabold text-blue-500 col-span-2">
//           {projectName}
//         </h2>
//         <div className="col-span-2">
//           <p>Key Features</p>
//           <ul className="ml text-sm">
//             {keyFeatures.map((f, i) => (
//               <li key={i}>{f}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="col-span-3">
//           <p>Technologies Used</p>
//           <ul className="grid grid-cols-3 gap-x-2 text-xs">
//             {technologiesUsed.map((t, i) => (
//               <li key={i}>{t}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="card-actions justify-end"></div>
//       </div>
//     </div>
