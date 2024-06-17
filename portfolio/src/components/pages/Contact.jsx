import React from "react";
import ContactForm from "../ContactForm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col text-purple-300 items-center p-4 bg-[radial-gradient(circle,_#48329C,_#1C1A1A)]">
      <ContactForm />
      <div className="grid grid-cols-3 max-[767px]:grid-cols-1 gap-4 my-4 max-[767px]:py-2">
        <section className="flex flex-col items-center rounded-lg justify-center bg-black px-12 py-8">
          <LocationOnIcon
            sx={{
              fontSize: { xs: "6rem", md: "4rem", xl: "10rem" },
              color: "#623288",
            }}
          />
          <p className="flex flex-col items-center">
            Thalangama North,<span>Malabe</span>
          </p>
        </section>
        <a href="mailto:achala2702@gmail.com" className="flex flex-col items-center rounded-lg justify-center bg-black p-8">
          <MailIcon
            sx={{
              fontSize: { xs: "6rem", md: "4rem", xl: "10rem" },
              color: "#623288",
            }}
          />
          <p className="mt-4 flex flex-wrap">
            achala2702@<span>gmail.com</span>
          </p>
        </a>
        <section className="flex flex-col items-center rounded-lg justify-center bg-black p-8">
          <PhoneIcon
            sx={{
              fontSize: { xs: "6rem", md: "4rem", xl: "10rem" },
              color: "#623288",
            }}
          />
          <p>071 794 8358</p>
        </section>
      </div>
      <div className="w-full h-80">
        <iframe
        className="w-full h-full rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.3107357904566!2d79.95570863116355!3d6.906809993142428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2572ee457d0d7%3A0x6681f5b32466c96b!2sRanaviru%20Mawatha%2C%20Malabe!5e0!3m2!1sen!2slk!4v1717659561333!5m2!1sen!2slk"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
