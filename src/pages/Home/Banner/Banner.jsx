import "./banner.css";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-10 items-center justify-around mt-32 mb-48">
      {/* Banner Text */}
      <div className="max-w-2xl">
        <h1 className="text-6xl font-extrabold mb-2 tracking-wide">
          Shazzadul Haque
        </h1>
        <h4 className="text-4xl font-extrabold text-blue-500 mb-4 tracking-wide">
          Front-End Web Developer
        </h4>
        <p className="text-lg tracking-wide text-slate-500">
          Hi, I am a front-end developer who love to create visually appealing
          and interactive website or web applications, based in Bangladesh
          &#x1F4CD;
        </p>
      </div>
      {/* Banner image */}
      <div className="blob"></div>
    </div>
  );
};

export default Banner;
