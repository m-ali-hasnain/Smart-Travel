/* eslint-disable react/jsx-key */
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/packages-details.css";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import CheckoutForm from "./strip/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ReactWhatsapp } from "react-whatsapp";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import PayButton from "./strip/PayButton";
import { Carousel } from "react-carousel-minimal";
import axios from "axios";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Carousel1 } from 'react-responsive-carousel';
import Button from "@mui/material/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import "../styles/contact.css";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "../styles/blog-details.css";
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
const PackageDetails = () => {
  const form = useRef();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [packagesData, setPackagesData] = useState([]);
  const [packageObject, setPackageObject] = useState();
  const [reload, setReload] = useState(false);
  var imagelist = []
  useEffect(() => {
    const URL = "http://localhost:8080/api/packages/get";
    axios
      .get(URL)
      .then((response) => {
        console.log("Response is ", response.data);
        const filtered = response.data.filter(
          (packages) => packages.active === true,
        );
        console.log("responsooo", filtered);
        setPackagesData(filtered);
        setPackageObject(filtered.find((packages) => packages.title === slug));
        (filtered.find((packages) => packages.title === slug)).images.map((items) => {
          console.log("hiii", item)
        })
        // window.location.reload()
      })
      .catch((error) => {
        // event.preventDefault();
      });
  }, []);

  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
    },
  ];

  console.log("packagess", packageObject);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [clientSecret, setClientSecret] = useState("");

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

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
  const handleCheckout = (e) => {
    e.preventDefault();
    if (document.getElementById('user_name').value == '' || document.getElementById('user_email').value == '' || document.getElementById('user_phone').value == '' || document.getElementById('message').value == '') { toast("Invalid Input"); }
    else {
      console.log("check")
      axios
        .post(`/payments/intent`, {
          packageCharges: 100
        },
          // {authorization:}
        )
        .then((response) => {
          console.log("check", response.data)
          if (response.data) {
            console.log(response.data)
            window.location.href = response.data;
          }
        })
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <section>
      <Container>
        <Row>
          {packageObject && (

            <Col lg="7" md="7">
              <div className="blog__details">
                <Carousel
                  data={packageObject.images}
                  time={4000}
                  width="850px"
                  height="500px"
                  captionStyle={captionStyle}
                  radius="10px"
                  slideNumber={true}
                  slideNumberStyle={slideNumberStyle}
                  captionPosition="bottom"
                  automatic={true}
                  dots={true}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  thumbnails={true}
                  thumbnailWidth="100px"
                  style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "40px auto",
                  }}
                />
                <div style={{ paddingTop: "100px" }}>
                  <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                  >
                    {packageObject.videos.map((item) => {
                      return (

                        <SwiperSlide >

                          <video src={item.video} width="200" height="200" controls >

                          </video>

                        </SwiperSlide>

                      )
                    })

                    }

                  </Swiper>
                </div>

                {/* <Carousel1>
                  {packageObject.videos.map((item) => {
                    return (

                      <div >

                        <video src={item.image} width="200" height="200" controls >

                        </video>

                      </div>

                    )
                  })

                  }

                </Carousel1> */}
                <h2 className="section__title mt-4 pt-12">
                  {packageObject.title}
                </h2>

                <div
                  style={{ width: "600px" }}
                  className="blog__publisher align-items-center gap-4 mb-4"
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <PaidOutlinedIcon style={{ color: "	orange" }} /> Price {packageObject.price}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <DiscountOutlinedIcon style={{ color: "	orange" }} /> Available Tickets {packageObject.totalCount}
                  </span>

                  <Container>
                    <h6 className="ps-10 fw-normal text-blue-900 font-semibold">
                      <blockquote className="fs-4">Description</blockquote>
                    </h6>
                    <p className="text-black-50 text-xs">
                      {packageObject.description}
                    </p>
                  </Container>
                </div>
              </div>
            </Col>
          )}
          <Col lg="5" md="5">
            <div className="recent__post mb-4">
              <h5 className=" fw-bold">Recent Packages</h5>
            </div>
            {packagesData.map((item, index) => (
              <div className="recent__blog-post mb-4" key={item.id}>
                <Button style={{ color: "black" }} onClick={() => {
                  navigate(`/packages/${packagesData[index].title}`)
                  window.location.reload()
                }} sx={{ mt: 3, ml: 1 }}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.images[0].image} alt="" className="w-25 rounded-2" />
                    <h6>
                      {/* <Button style={{color:"black"}} onClick={() => {navigate(`/packages/${packagesData[index].title}`)
                    window.location.reload()
                    }} sx={{ mt: 3, ml: 1 }}> */}
                      <p>{packagesData[index].title}</p>
                      {/* </Button> */}
                      {/* <Link to={`/packages/${packagesData[index].title}`}>
                      {packagesData[index].title}
                    </Link> */}
                    </h6>
                  </div>
                </Button>
              </div>
            ))}
          </Col>
          <Col style={{marginBottom:"100px"}} lg="5" md="5">
            <div>
              <ToastContainer />
            </div>
            <StyledContactForm>
              <form ref={form} onSubmit={handleCheckout}>
                <FormGroup className="contact__form">
                  <label >Name</label>
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
                {/* <PayButton /> */}
                <input className=" contact__btn" type="submit" value="Checkout" />
              </form>
            </StyledContactForm>
          </Col>
          {/* <PayButton /> */}
          {/* <ReactWhatsapp  /> */}
          <FloatingWhatsApp
            phoneNumber="+923335568883"
            chatMessage="Hello World!!!"
            messageDelay="2"
            accountName="AQ INNOVATIONS"
          />
        </Row>
      </Container>
    </section>
  );
};

export default PackageDetails;

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