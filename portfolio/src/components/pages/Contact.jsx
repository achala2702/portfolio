import React from 'react'
import ContactForm from '../ContactForm'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col text-purple-300 items-center p-4 bg-[radial-gradient(circle,_#48329C,_#1C1A1A)]">
      <ContactForm />
      <div className="grid grid-cols-3 max-[767px]:grid-cols-1 gap-4 my-4 max-[767px]:py-2">
        <section

          className="flex flex-col items-center rounded-lg justify-center bg-black px-12 py-8"
        >
          <LocationOnIcon
            sx={{ fontSize: { xs: "6rem", md: "4rem", xl: "10rem" }, color: "#623288" }}
          />
          <p className="flex flex-col items-center">
            Thalangama North,<span>Malabe</span>
          </p>
        </section>
        <section

          className="flex flex-col items-center rounded-lg justify-center bg-black p-8"
        >
          <MailIcon
            sx={{ fontSize: { xs: "6rem", md: "4rem", xl: "10rem" }, color: "#623288" }}
          />
          <p className="mt-4 flex flex-wrap">achala2702@<span>gmail.com</span></p>
        </section>
        <section

          className="flex flex-col items-center rounded-lg justify-center bg-black p-8"
        >
          <PhoneIcon
            sx={{ fontSize: { xs: "6rem", md: "4rem", xl: "10rem" }, color: "#623288" }}
          />
          <p>071 794 8358</p>
        </section>
      </div>
    </div>
  )
}

export default Contact