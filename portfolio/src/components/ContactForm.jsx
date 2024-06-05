import { useState } from "react";

const ContactForm = () => {
  const [errorMsg, setError] = useState(false);
  const [succes, setSucces] = useState(false);
  return (
    <div className="flex flex-col bg-black text-purple-300 items-center mx-2 justify-center lg:w-11/12 py-4 pb-12 rounded-lg lg:px-20 px-10">
      <h1 className="xl:text-4xl text-customCol_3 lg:text-3xl font-semibold xl:mt-8 xl:mb-8 max-[767px]:text-xl max-[767px]:mt-4 max-[767px]:mb-2 md:text-2xl lg:mb-4 ">
        Let's Chat
      </h1>
      <p className=" flex max-[767px]:flex-col xl:text-2xl lg:text-xl max-[767px]:text-sm max-[767px]:px-4 md:text-sm gap-2">
        <a>Email: achala2702@gmail.com</a>
        <span className="max-[767px]:hidden">/</span>
        <span>Tel: 071 794 8358</span>
      </p>
      <form
        autoComplete="off"
        className="grid w-full md:grid-cols-2 gap-6 xl:text-2xl lg:text-xl max-[767px]:text-sm max-[767px]:px-4 md:text-sm max-[767px]:mt-8 lg:mt-10"
      >
        <section className="flex gap-3 max-[767px]:col-span-2 flex-col md:mr-8">
          <label htmlFor="fName">First Name:</label>
          <input
            className="focus:outline-none border-b-2 bg-black border-purple-400"
            type="text"
            id="fName"
            name="fname"
            required
          />
        </section>
        <section className="flex gap-3 max-[767px]:col-span-2 flex-col md:ml-8">
          <label htmlFor="lName">Last Name:</label>
          <input
            className="focus:outline-none border-b-2 bg-black border-purple-400"
            type="text"
            id="lName"
            name="lname"
            required
          />
        </section>
        <section className="col-span-2 gap-3 flex flex-col">
          <label htmlFor="eMail">Email:</label>
          <input
            className="focus:outline-none border-b-2 bg-black border-purple-400"
            type="email"
            id="eMail"
            name="email"
            required
          />
        </section>
        <section className="col-span-2 gap-3 flex flex-col">
          <label htmlFor="message">Message:</label>
          <textarea
            className="focus:outline-none border-b-2 bg-black border-purple-400"
            rows={4}
            name="message"
            id="message"
            required
          />
        </section>
        <section className="flex items-center justify-center col-span-2">
          <button
            type="submit"
            className="border-2 border-black p-4 max-[767px]:mt-4 bg-gradient-to-b text-black rounded-lg from-customBlue to-customPurple hover:bg-black hover:text-white max-[767px]:p-2 max-[767px]:text-sm md:py-2 lg:py-4 w-40 px-auto md:mt-4 col-span-2 lg:text-lg"
          >
            Send
          </button>
        </section>

        {errorMsg && "Error"}
        {succes && "Success"}
      </form>
    </div>
  );
};

export default ContactForm;
