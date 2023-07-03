import { SiGithub, SiGmail, SiLinkedin, SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <div className="mb-10">
      <div className="flex gap-5 justify-center items-center text-2xl text-blue-500">
        <a href="https://github.com/Sagor66" target="_blank" rel="noopener noreferrer"><SiGithub></SiGithub></a>
        <a href="https://www.linkedin.com/in/shazzadul-haque-73571a222/" target="_blank" rel="noopener noreferrer"><SiLinkedin></SiLinkedin></a>
        <a href=""><SiTwitter></SiTwitter></a>
        <a href="mailto:sazzadulhaquesagor@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail></SiGmail></a>
      </div>
      <p className="font-nunito w-fit mx-auto mt-4">COPYRIGHT&copy;2023 <span className="text-blue-700 font-bold">SHAZZAD</span> ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
