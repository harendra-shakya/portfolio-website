import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-2 text-gray-700">Get in touch</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            harendrashakya125@gmail.com
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/harendra-shakya/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/harendra-shakya"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://twitter.com/harendrashakya_"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
