import { useState } from "react";

function NewsLetter() {
  const [email, setEmail] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();
    setEmail("");
  }
  return (
    <section className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe us & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simple dummy text of the printing and typography Industry
      </p>
      <form
        onSubmit={(event) => onSubmitHandler(event)}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button className="bg-black text-white px-10 py-5 text-xs">
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default NewsLetter;
