import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const NavBar = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const navOptions = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link>Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <button className="border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white ml-16">
          <a href="https://drive.google.com/uc?export=download&id=1GVOtIWTY0VzMLTwUVkUm5i4H_yAvtu-6">
            Resume
          </a>
        </button>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 px-10 py-4">
        <div className="navbar-start">
          <Link className="text-3xl font-bold text-slate-600">
            <span className="text-blue-500 font-black">Shazzad</span>.dev
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-bold text-blue-500">
            {navOptions}
          </ul>
        </div>
        {isDesktop || (
          <div className="navbar-end">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base font-bold text-blue-500"
              >
                {navOptions}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
