import { ValidationError, useForm } from "@formspree/react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  const [state, handleSubmit] = useForm("mzbqnljl");
  if (state.succeeded) {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="w-fit mx-auto mt-40 text-blue-500 text-5xl font-extrabold">
          Submitted Successfully!
        </h1>
        <Link to="/">
          <button className="bg-blue-500 text-white text-xl font-bold px-6 py-3 rounded-lg mt-8 hover:text-blue-500 hover:bg-white border-2 border-blue-500">
            Go Back To Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto pt-32 bg-gradient-to-b from-blue-400 to-sky-400 min-h-screen">
      <Helmet>
        <title>Shazzad | Contact</title>
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto rounded-xl bg-white pt-10"
      >
        <h2 className="text-4xl font-extrabold text-sky-500 text-center mb-10">
          Ge<span className="border-b-4 border-b-sky-400 rounded">t In T</span>
          ouch
        </h2>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sky-500 font-bold text-xl">
                Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input border-sky-500"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sky-500 font-bold text-xl">
                Email
              </span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="input border-sky-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sky-500 font-bold text-xl">
                  Message
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                className="textarea textarea-info border-sky-500"
                placeholder="Write here"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-sky-500 text-xl text-white font-extrabold px-3 py-2 rounded-ss-3xl rounded-se-lg rounded-ee-3xl rounded-es-lg border-4 border-white hover:bg-transparent hover:text-sky-500 hover:border-sky-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
