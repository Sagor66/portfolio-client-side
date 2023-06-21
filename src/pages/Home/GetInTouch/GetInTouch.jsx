import { ValidationError, useForm } from "@formspree/react";

const GetInTouch = () => {
  const [state, handleSubmit] = useForm("mzbqnljl");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="mx-auto pt-32 bg-gradient-to-b from-blue-400 to-sky-400 min-h-screen">
      <div className="max-w-xl mx-auto rounded-xl bg-white pt-10">
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
              type="text"
              placeholder="Email"
              className="input border-sky-500"
            />
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sky-500 font-bold text-xl">
                  Message
                </span>
              </label>
              <textarea
                className="textarea textarea-info border-sky-500"
                placeholder="Write here"
              ></textarea>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="bg-sky-500 text-xl text-white font-extrabold px-3 py-2 rounded-ss-3xl rounded-se-lg rounded-ee-3xl rounded-es-lg border-4 border-white hover:bg-transparent hover:text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
