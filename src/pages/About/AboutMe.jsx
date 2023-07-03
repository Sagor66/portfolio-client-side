import proPic from "../../assets/banner/IMG_0647_flipped.jpg";

const AboutMe = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="flex items-center justify-between">
        <img
          className="w-[450px] h-[450px] rounded-full object-cover shadow-2xl shadow-blue-300"
          src={proPic}
          alt=""
        />
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold tracking-wider text-blue-500 px-4 py-2 pt-32 mb-16">
            Ab
            <span className="border-blue-500 border-b-4 rounded pb-2">
              out{" "}
            </span>
            Me
          </h2>
          <p className="mb-5 text-lg text-gray-600">
            Hi! Thank you for taking the time to look around.
          </p>
          <p className="mb-5 text-lg text-gray-600">
            I'm Shazzad, an aspiring web/software developer with a passion for
            product building and a programming enthusiast. After my graduation
            from Leading University with Bachelor's in Computer Science &
            Engineering, now I am working with cutting-edge front-end
            technologies like the MERN stack.
          </p>
          <div className=" flex flex-col gap-3">
            <div className="flex gap-4">
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                JavaScript
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                React.js
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                React Router
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                MongoDB
              </p>
            </div>
            <div className="flex gap-4">
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                Express.js
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                Stripe
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                Axios
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                Tenstack Query
              </p>
            </div>
            <div className="flex gap-4">
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                Tailwind
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                Daisy UI
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                Bootstrap
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                React-Bootstrap
              </p>
            </div>
            <div className="flex gap-4">
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                JWT
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                Git
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                GitHub
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                REST API
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                Firebase
              </p>
            </div>
            <div className="flex gap-4">
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                Netlify
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                Vercel
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
              HTML/CSS
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                Python
              </p>
              <p className="w-fit text-lg font-bold text-gray-600 bg-blue-100 px-4 py-1 rounded-lg">
                AI/ML/DL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
