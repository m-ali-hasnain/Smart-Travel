import React, { useState, useEffect } from "react";
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
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

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
  return (
    <section>
      <Container>
        <Row>
          <Col lg="7" md="7">
            <div className="blog__details">
              {/* <img src={blog.image} alt="" className="w-90" /> */}
              <Carousel
                data={data}
                time={2000}
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
              <h2 className="section__title mt-4 pt-12">{blog.title}</h2>

              <div
                style={{ width: "600px" }}
                className="blog__publisher align-items-center gap-4 mb-4"
              >
                <span className="blog__author">
                  <i className="ri-user-line"></i> {blog.subTitle}
                </span>

                <span className=" d-flex align-items-center gap-1 section__description">
                  <i className="ri-calendar-line"></i> {blog.cost}
                </span>

                <span className=" d-flex align-items-center gap-1 section__description">
                  <i className="ri-time-line"></i> {blog.duration}
                </span>
                {blog.description.map((item, index) => (
                  <Container key={index}>
                    <h6 className="ps-10 fw-normal text-blue-900 font-semibold">
                      <blockquote className="fs-4">
                        {blog.quote[index]}
                      </blockquote>
                    </h6>
                    <p className="text-black-50 text-xs">{item}</p>
                  </Container>
                ))}
              </div>
            </div>
          </Col>

          <Col lg="5" md="5">
            <div className="recent__post mb-4">
              <h5 className=" fw-bold">Recent Posts</h5>
            </div>
            {blogData.map((item, index) => (
              <div className="recent__blog-post mb-4" key={item.id}>
                <div className="recent__blog-item d-flex gap-3">
                  <img src={item.image} alt="" className="w-25 rounded-2" />
                  <h6>
                    <Link to={`/packages/${blogData[index].title}`}>
                      {blogData[index].title}
                    </Link>
                  </h6>
                </div>
              </div>
            ))}
          </Col>
          <PayButton />
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
