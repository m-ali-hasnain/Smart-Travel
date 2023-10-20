import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import emailjs from '@emailjs/browser';
import "../styles/contact.css";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (document.getElementById('user_name').value == '' || document.getElementById('user_email').value == '' || document.getElementById('user_phone').value == '' || document.getElementById('message').value == '') { toast("Invalid Input"); }
    else {
      emailjs.sendForm('smart_travel_AQ_service', 'template_20bqta2', form.current, 'jS8uEaWSumnC5iAJR')
        .then((result) => {
          console.log(result.text);
          document.getElementById('user_name').value = '';
          document.getElementById('user_email').value = '';
          document.getElementById('user_phone').value = '';
          document.getElementById('message').value = '';
          toast("Message Sent");
        }, (error) => {
          console.log(error.text);
          toast("Message Not Sent");
        });
    }
  };
  return (
    <div>
      {/* <CommonSection title="Contact" /> */}
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4 text-orange-300">Get In Touch</h6>
              <div>
                <ToastContainer />
              </div>
              <StyledContactForm>
                <form ref={form} onSubmit={sendEmail}>
                  <FormGroup className="contact__form">
                    <label>Name</label>
                    <input type="text" name="user_name" id='user_name' />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <label>Email</label>
                    <input type="email" name="user_email" id='user_email' />
                  </FormGroup>
                  <FormGroup className="contact__form">
                    <label>Phone</label>
                    <input type="number" name="user_phone" id='user_phone' />
                  </FormGroup>
                  <label>Message</label>
                  <textarea name="message" rows="5"
                    id='message'
                    placeholder="Message"
                    className="textarea" />
                  <input className=" contact__btn" type="submit" value="Send" />
                </form>
              </StyledContactForm>
              {/* <Form ref={form} onSubmit={sendEmail}>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form> */}
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <h6 className="fs-6 mb-0">Location:</h6>
                <p className="section__description mb-0">
                Nene Park Diamond Way Station Road, Naya Pakistan
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0"><a className="section__description mb-0" href="tel:090078601"> 090078601</a></p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0"><a className="section__description mb-0" href="mailto: smarttravel@gmail.com">smarttravel@gmail.com</a></p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  
    </div>
  );
};

export default Contact;

const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;