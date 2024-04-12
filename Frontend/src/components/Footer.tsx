import { useState } from "react";
import validator from "validator";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  function handleClick() {
    if (validator.isEmail(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  }

  return (
    <div className="bg-[#00224f] py-10">
      <div className="container mx-auto text-white flex flex-col gap-3">
        <h3 className="text-3xl font-medium">Stay in the know</h3>
        <p className="text-gray-400 max-w-3xl">
          Sign up to get marketing emails from Booking.com, including
          promotions, rewards, travel experiences, and information about
          Booking.com and Booking.com Transport Limited’s products and services.
        </p>
        <div className="flex gap-4 relative">
          <input
            type="email"
            placeholder="Your email address"
            className={`px-3 py-3 rounded-md text-xl ${
              isValidEmail ? "text-blue-950" : "text-red-500"
            }`}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {!isValidEmail && (
            <p className="text-red-800 text-md font-semibold bg-slate-400 absolute bottom-[-26px]">
              Please enter a valid email address.
            </p>
          )}

          <button
            className="bg-blue-700 px-8 py-3 rounded-md hover:bg-blue-600"
            onClick={handleClick}
          >
            Subscribe
          </button>
        </div>
        <p className="text-gray-400 ">
          You can opt out anytime. See our{" "}
          <a
            target="_blank"
            className="text-blue-500 underline"
            href="https://www.booking.com/content/privacy.html?label=gen173nr-1FCAEoggI46AdIM1gEaPQBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKnzfWvBsACAdICJGZkZjIxNzgwLTUxNjEtNGZlNy05ZTg3LTFiN2VjNmJiMWI1ZtgCBeACAQ&sid=8d83f449f9ad7f0b64cde734a241bcdc"
          >
            privacy statement.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
