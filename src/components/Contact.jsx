import React, { useState } from "react";
import emailjs from "emailjs-com";
import LinkedInIcon from '../assets/socials/linkedin.png';
import GitHubIcon from '../assets/socials/github.png';
import EmailIcon from '../assets/socials/mail.png';
import './Contact.css'; // Import a CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Prepare the data for the email template
      const templateParams = {
        recipient_name: "Recipient's Name", // Replace with the recipient's name
        sender_name: formData.name,
        message: formData.message,
      };

      emailjs
      .send(
        'service_8ul64jx',
        'template_h1tsm8d',
        templateParams,
        'oCV1DTs290mVTlsVT'
      )
        .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        })
        .catch((error) => {
          console.log(error.text);
          alert("An error occurred while sending the message. Please try again later.");
        });

      // Clear the form
      setFormData({ name: "", email: "", message: "" });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
          <h1 className="text-primary font-semibold text-3xl mt-16">
            Connect with me:
          </h1>
          <p className="my-3 text-white md:w-3/4 leading-[2]">
            Satisfied with me? Please contact me
          </p>
          {/* social icons */}
          <div className="flex ">
            <a href="https://www.linkedin.com/in/yashaswini-l" target="_blank" rel="noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a className="ml-4" href="https://github.com/Yashaswinil63" target="_blank" rel="noreferrer">
              <img src={GitHubIcon} alt="GitHub" className="social-icon" />
            </a>
            <a className="ml-4" href="mailto:yashaswini.l632002@gmail.com">
              <img src={EmailIcon} alt="Email" className="social-icon" />
            </a>
          </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
          <p className="mt-16 text-white text-2xl mb-6">Contact me, let's make magic together</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name:"
              value={formData.name}
              onChange={handleInputChange}
              className={`bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded text-white ${formErrors.name && 'border-red-500'}`}
            />
            {formErrors.name && <p className="text-red-500 mt-1">{formErrors.name}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email:"
              value={formData.email}
              onChange={handleInputChange}
              className={`bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3 text-white ${formErrors.email && 'border-red-500'}`}
            />
            {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
            <textarea
              name="message"
              id="message"
              cols="54"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              className={`bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2 text-white ${formErrors.message && 'border-red-500'}`}
              placeholder="Message:"
            ></textarea>
            {formErrors.message && <p className="text-red-500 mt-1">{formErrors.message}</p>}
            <button
              type="submit"
              className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
