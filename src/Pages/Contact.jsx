import React from "react";

const Contact = () => {
  return (
    <section className="h-screen w-full bg-gray-900 text-white py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8 text-gray-400">You can reach me through these platforms:</p>
        <div className="flex justify-center items-center gap-10">
          <a
            href="https://www.upwork.com/freelancers/~01831309a81654b979"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-400 text-4xl transition transform hover:scale-110 duration-300"
          >
            <i className="fab fa-upwork"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
