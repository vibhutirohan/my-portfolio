import { MdCopyright } from "react-icons/md";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get('website');

    // Honeypot spam trap
    if (honeypot) {
      setIsSubmitting(false);
      setIsSubmitted(true);
      return;
    }

    try {
      // Live Web3Forms Submission
      const object = Object.fromEntries(formData);

      // We will require the user to provide a Web3Forms access key in the .env
      object.access_key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(object)
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError('Something went wrong submitting to Web3Forms. Check API Key.');
      }

    } catch {
      setError('Network communication failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Get In <span>Touch</span></h2>

      <p className="contact-subtitle">
        Interested in working together? Let's connect and discuss your project.
        I typically respond within <strong>24 – 48 hours.</strong>
      </p>

      {/* Integrated HTML Contact Form Card */}
      <div className="contact-card">
        <div className="contact-card-header">
          <h3>Send a Message</h3>
          <p className="contact-card-desc">Fill out the form below and I'll get back to you as soon as possible.</p>
        </div>

        {isSubmitted ? (
          <div className="contact-success-msg">
            <div className="success-icon-wrapper">
              <FiCheckCircle size={36} />
            </div>
            <h4>Message Sent!</h4>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="custom-contact-form">
            <div className="hidden-honeypot" style={{ display: "none" }}>
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project or opportunity..." rows={4} required />
            </div>

            {error && <p className="form-error-msg">{error}</p>}

            <button type="submit" className="custom-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>
                  <FiSend className="submit-btn-icon" /> Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Footer Contact Info */}
      <div className="footer-section">
        <div className="footer-box">
          <h4>Contact</h4>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <FiMail className="contact-info-icon" />
              <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
            </div>
            <div className="contact-info-item">
              <FiPhone className="contact-info-icon" />
              <a href="tel:+12035895885">+1(203) 589-5885</a>
            </div>
            <div className="contact-info-item">
              <FiMapPin className="contact-info-icon" />
              <span className="contact-info-text">{config.social.location}</span>
            </div>
          </div>
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
          <h4>Quick Links</h4>
          <a href="#work">Projects</a>
          <a href="#career">Experience</a>
          <a href="#education">Education</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="https://drive.google.com/file/d/1XFfBjfYy0aNwanxyH0IxgcnuvFWdhiUf/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

        <div className="footer-box">
          <p className="footer-copy">
            <MdCopyright /> {new Date().getFullYear()}
            <br />
            Designed & Built by <span>{config.developer.fullName}</span><br /> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
