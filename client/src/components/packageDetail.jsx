import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useParams } from "react-router-dom";
// import blogData from "../assets/data/blogData.js";
// import Helmet from "../components/Helmet/Helmet";
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
import { ReactWhatsapp } from 'react-whatsapp';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import PayButton from "./strip/PayButton";
// import "../styles/blog-details.css";
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
const PackageDetails = () => {
  const { slug } = useParams();
  const blogData = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
      description: [
        "IMG World of Adventure is one of Dubai’s best theme parks, bringing Marvel and Cartoon Network characters to life with state-of-the-art rides. It is also the world’s biggest indoor theme park, so no matter what the weather, you can always visit IMG World of Adventure without worrying about the weather. IMG World Fast track tickets is an Additional ticket to skip the queue inside IMG World. With this ticket you can go without line in all rides and games in IMG World. Normal Ticket price is 345 and Fast track is 190 but in combo you will get both of them at 385 AED. IMG World of Adventure is one of Dubai’s best theme parks, bringing Marvel and Cartoon Network characters to life with state-of-the-art rides. It is also the world’s biggest indoor theme park, so no matter what the weather, you can always visit IMG World of Adventure without worrying about the weather.",
        "The ultra-modern, 12-screen multiplex is futuristic and cosmic in design with more than 5,000 meters of LED strip lighting in customized colors, making it an Instagrammable dream to eat and drink with your favorite Cartoon Network or MARVEL characters, or to share a meal with your family while watching dinosaurs in their natural habitat Explore the various shopping store inside the IMG World of adventure that reminds you of the fun you had. Meet and Greet zone to make friends with the full IMG Worlds of Adventure cast, including Spider-Man, Thor, and even the Powerpuff Girls.",
        "Children below the height of 1.05 meters can enter for FREE",
      ],
      quote: ["Description", "Highlights", "Inclusions"],
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
      description: [
        "IMG World of Adventure is one of Dubai’s best theme parks, bringing Marvel and Cartoon Network characters to life with state-of-the-art rides. It is also the world’s biggest indoor theme park, so no matter what the weather, you can always visit IMG World of Adventure without worrying about the weather. IMG World Fast track tickets is an Additional ticket to skip the queue inside IMG World. With this ticket you can go without line in all rides and games in IMG World. Normal Ticket price is 345 and Fast track is 190 but in combo you will get both of them at 385 AED. IMG World of Adventure is one of Dubai’s best theme parks, bringing Marvel and Cartoon Network characters to life with state-of-the-art rides. It is also the world’s biggest indoor theme park, so no matter what the weather, you can always visit IMG World of Adventure without worrying about the weather.",
        "The ultra-modern, 12-screen multiplex is futuristic and cosmic in design with more than 5,000 meters of LED strip lighting in customized colors, making it an Instagrammable dream to eat and drink with your favorite Cartoon Network or MARVEL characters, or to share a meal with your family while watching dinosaurs in their natural habitat Explore the various shopping store inside the IMG World of adventure that reminds you of the fun you had. Meet and Greet zone to make friends with the full IMG Worlds of Adventure cast, including Spider-Man, Thor, and even the Powerpuff Girls.",
        "Children below the height of 1.05 meters can enter for FREE",
      ],
      quote: ["Description", "Highlights", "Inclusions"],
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
      description: [
        "IMG World of Adventure is one of Dubai’s best theme parks, bringing Marvel and Cartoon Network characters to life with state-of-the-art rides. It is also the world’s biggest indoor theme park, so no matter what the weather, you can always visit IMG World of Adventure without worrying about the weather. IMG World Fast track tickets is an Additional ticket to skip the queue inside IMG World. With this ticket you can go without line in all rides and games in IMG World. Normal Ticket price is 345 and Fast track is 190 but in combo you will get both of them at 385 AED. IMG World of Adventure is one of Dubai’s best theme parks, bringing Marvel and Cartoon Network characters to life with state-of-the-art rides. It is also the world’s biggest indoor theme park, so no matter what the weather, you can always visit IMG World of Adventure without worrying about the weather.",
        "The ultra-modern, 12-screen multiplex is futuristic and cosmic in design with more than 5,000 meters of LED strip lighting in customized colors, making it an Instagrammable dream to eat and drink with your favorite Cartoon Network or MARVEL characters, or to share a meal with your family while watching dinosaurs in their natural habitat Explore the various shopping store inside the IMG World of adventure that reminds you of the fun you had. Meet and Greet zone to make friends with the full IMG Worlds of Adventure cast, including Spider-Man, Thor, and even the Powerpuff Girls.",
        "Children below the height of 1.05 meters can enter for FREE",
      ],
      quote: ["Description", "Highlights", "Inclusions"],
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
      description: [
        "IMG World of Adventure is one of Dubai’s best theme parks, bringing Marvel and Cartoon Network characters to life with state-of-the-art rides. It is also the world’s biggest indoor theme park, so no matter what the weather, you can always visit IMG World of Adventure without worrying about the weather. IMG World Fast track tickets is an Additional ticket to skip the queue inside IMG World. With this ticket you can go without line in all rides and games in IMG World. Normal Ticket price is 345 and Fast track is 190 but in combo you will get both of them at 385 AED. IMG World of Adventure is one of Dubai’s best theme parks, bringing Marvel and Cartoon Network characters to life with state-of-the-art rides. It is also the world’s biggest indoor theme park, so no matter what the weather, you can always visit IMG World of Adventure without worrying about the weather.",
        "The ultra-modern, 12-screen multiplex is futuristic and cosmic in design with more than 5,000 meters of LED strip lighting in customized colors, making it an Instagrammable dream to eat and drink with your favorite Cartoon Network or MARVEL characters, or to share a meal with your family while watching dinosaurs in their natural habitat Explore the various shopping store inside the IMG World of adventure that reminds you of the fun you had. Meet and Greet zone to make friends with the full IMG Worlds of Adventure cast, including Spider-Man, Thor, and even the Powerpuff Girls.",
        "Children below the height of 1.05 meters can enter for FREE",
      ],
      quote: ["Description", "Highlights", "Inclusions"],
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
      description: [
        "IMG World of Adventure is one of Dubai’s best theme parks, bringing Marvel and Cartoon Network characters to life with state-of-the-art rides. It is also the world’s biggest indoor theme park, so no matter what the weather, you can always visit IMG World of Adventure without worrying about the weather. IMG World Fast track tickets is an Additional ticket to skip the queue inside IMG World. With this ticket you can go without line in all rides and games in IMG World. Normal Ticket price is 345 and Fast track is 190 but in combo you will get both of them at 385 AED. IMG World of Adventure is one of Dubai’s best theme parks, bringing Marvel and Cartoon Network characters to life with state-of-the-art rides. It is also the world’s biggest indoor theme park, so no matter what the weather, you can always visit IMG World of Adventure without worrying about the weather.",
        "The ultra-modern, 12-screen multiplex is futuristic and cosmic in design with more than 5,000 meters of LED strip lighting in customized colors, making it an Instagrammable dream to eat and drink with your favorite Cartoon Network or MARVEL characters, or to share a meal with your family while watching dinosaurs in their natural habitat Explore the various shopping store inside the IMG World of adventure that reminds you of the fun you had. Meet and Greet zone to make friends with the full IMG Worlds of Adventure cast, including Spider-Man, Thor, and even the Powerpuff Girls.",
        "Children below the height of 1.05 meters can enter for FREE",
      ],
      quote: ["Description", "Highlights", "Inclusions"],
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
      description: [
        "IMG World of Adventure is one of Dubai’s best theme parks, bringing Marvel and Cartoon Network characters to life with state-of-the-art rides. It is also the world’s biggest indoor theme park, so no matter what the weather, you can always visit IMG World of Adventure without worrying about the weather. IMG World Fast track tickets is an Additional ticket to skip the queue inside IMG World. With this ticket you can go without line in all rides and games in IMG World. Normal Ticket price is 345 and Fast track is 190 but in combo you will get both of them at 385 AED. IMG World of Adventure is one of Dubai’s best theme parks, bringing Marvel and Cartoon Network characters to life with state-of-the-art rides. It is also the world’s biggest indoor theme park, so no matter what the weather, you can always visit IMG World of Adventure without worrying about the weather.",
        "The ultra-modern, 12-screen multiplex is futuristic and cosmic in design with more than 5,000 meters of LED strip lighting in customized colors, making it an Instagrammable dream to eat and drink with your favorite Cartoon Network or MARVEL characters, or to share a meal with your family while watching dinosaurs in their natural habitat Explore the various shopping store inside the IMG World of adventure that reminds you of the fun you had. Meet and Greet zone to make friends with the full IMG Worlds of Adventure cast, including Spider-Man, Thor, and even the Powerpuff Girls.",
        "Children below the height of 1.05 meters can enter for FREE",
      ],
      quote: ["Description", "Highlights", "Inclusions"],
    },
  ];
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    // <Helmet title={blog.title}>
    <section>
      <Container>
        <Row>
          <Col lg="7" md="7" >
            <div className="blog__details">
              <img src={blog.image} alt="" className="w-90" />
              <h2 className="section__title mt-4">{blog.title}</h2>

              <div
                style={{ width: "600px" }}
                className="blog__publisher align-items-center gap-4 mb-4"
              >
                <span className="blog__author">
                  <i class="ri-user-line"></i> {blog.subTitle}
                </span>

                <span className=" d-flex align-items-center gap-1 section__description">
                  <i class="ri-calendar-line"></i> {blog.cost}
                </span>

                <span className=" d-flex align-items-center gap-1 section__description">
                  <i class="ri-time-line"></i> {blog.duration}
                </span>
                {blog.description.map((item, index) => (
                  <Container>
                    <h6 className="ps-10 fw-normal text-blue-900 font-semibold">
                      <blockquote className="fs-4">
                        {blog.quote[index]}
                      </blockquote>
                    </h6>
                    <p className="text-black-50 text-xs">{item}</p>
                  </Container>
                ))}
              </div>

              {/* <p >{blog.description}</p> */}
            </div>

            {/* <div className="comment__list mt-5">
                <h4 className="mb-5">3 Comments</h4>

                <div className="single__comment d-flex gap-3">
                  <img src={commentImg} alt="" />
                  <div className="comment__content">
                    <h6 className=" fw-bold">David Visa</h6>
                    <p className="section__description mb-0">14 July, 2022</p>
                    <p className="section__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos nobis totam eius laborum molestias itaque minima
                      distinctio, quae velit tempore!
                    </p>

                    <span className="replay d-flex align-items-center gap-1">
                      <i class="ri-reply-line"></i> Replay
                    </span>
                  </div>
                </div>
               <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="section__description">
                    You must sign-in to make or comment a post
                  </p>

                  <Form>
                    <FormGroup className=" d-flex gap-3">
                      <Input type="text" placeholder="Full name" />
                      <Input type="email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comment..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>  */}
          </Col>

          <Col lg="5" md="5">
            {/* {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            )} */}
            <div className="recent__post mb-4">
              <h5 className=" fw-bold">Recent Posts</h5>
            </div>
            {blogData.map((item, index) => (
              <div className="recent__blog-post mb-4" key={item.id}>
                <div className="recent__blog-item d-flex gap-3">
                  <img src={item.image} alt="" className="w-25 rounded-2" />
                  <h6>
                    <Link to={`/packages/${blogData[index].title}`}>{blogData[index].title}</Link>
                  </h6>
                </div>
              </div>
            ))}
          </Col>
          <PayButton />
          {/* <ReactWhatsapp number="+923335568883" message="Hello World!!!" /> */}
          <FloatingWhatsApp phoneNumber="+923335568883" chatMessage="Hello World!!!" messageDelay='2' accountName='AQ INNOVATIONS' />
        </Row>
      </Container>
    </section>
    // </Helmet>
  );
};

export default PackageDetails;
