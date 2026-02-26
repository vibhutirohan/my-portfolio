import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
      },
    });

    tl.fromTo(
      ".contact-title",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      ".contact-subtitle",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
      "-=0.4"
    );

    tl.fromTo(
      ".contact-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    );

    tl.fromTo(
      ".footer-section",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.2"
    );
  }, []);

  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Get In <span>Touch</span></h2>

      <p className="contact-subtitle">
        Prefer a quick, reliable way? Use my Google Form to reach me directly.
        I typically respond within <strong>24 – 48 hours.</strong>
      </p>

      {/* Google Form Large Card */}
      <div className="contact-card">
        <h3>Send a Message</h3>

        <a
          href={config.contact.googleForm}
          target="_blank"
          rel="noopener noreferrer"
          className="google-form-btn"
        >
          <div className="google-form-left">
            <MdArrowOutward size={22} />
            <span>Open Contact Form</span>
            <p>Opens in new tab</p>
          </div>
          <div className="google-form-arrow">
            →
          </div>
        </a>
      </div>

      {/* Footer Contact Info */}
      <div className="footer-section">
        <div className="footer-box">
          <h4>Email</h4>
          <p><a href={`mailto:${config.contact.email}`}>{config.contact.email}</a></p>

          <h4>Location</h4>
          <p>{config.social.location}</p>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382645.7594911762!2d-73.19793108603612!3d41.608381987588394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e65311f21151a5%3A0xe67397b91316b1dc!2sConnecticut%2C%20USA!5e0!3m2!1sen!2sin!4v1714454157582!5m2!1sen!2sin"
              width="100%"
              height="100"
              style={{ border: 0, borderRadius: "8px", marginTop: "10px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Connecticut Location Map"
            ></iframe>
          </div>
        </div>

        <div className="footer-box">
          <h4>Social</h4>
          <a href={config.contact.github}>Github ↗</a>
          <a href={config.contact.linkedin}>LinkedIn ↗</a>
          <a href={config.contact.twitter}>Twitter ↗</a>
          <a href={config.contact.instagram}>Instagram ↗</a>
        </div>

        <div className="footer-box">
          <p className="footer-copy">
            <MdCopyright /> {new Date().getFullYear()}
            <br />
            Designed & Built by <span>{config.developer.fullName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
