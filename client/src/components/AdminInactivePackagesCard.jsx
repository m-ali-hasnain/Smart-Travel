/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import IconButton from "@material-ui/core/IconButton";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import { Link } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CardActions from "@material-ui/core/CardActions";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AdminPackagesCard() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const URL = "http://localhost:8080/api/packages/get";
    axios
      .get(URL)
      .then((response) => {
        console.log("Response is ", response.data);
        const filtered = response.data.filter(
          (packages) => packages.active === false,
        );
        setData(filtered);
        // window.location.reload()
      })
      .catch((error) => {
        // event.preventDefault();
      });
  }, [reload]);
  const updateVisibility = async (id) => {
    const URL = `http://localhost:8080/api/packages/update/${id}`;
    await axios
      .post(URL, {
        active: true,
      })
      .then((response) => {
        console.log("Response is ", response.data);
        setReload(!reload)
      })
      .catch((error) => {
        // event.preventDefault();
      });
  };
  const removePackage = async (id) => {
    const URL = `http://localhost:8080/api/packages/delete/${id}`;
    await axios
      .delete(URL)
      .then((response) => {
        console.log("Response is ", response.data);
        setReload(!reload)
      })
      .catch((error) => {
        // event.preventDefault();
      });
  };
  // const data = [
  //     {
  //         image: Destination1,
  //         title: "Singapore",
  //         subTitle: "Singapore, officialy thr Republic of Singapore, is a",
  //         cost: "38,800",
  //         duration: 6,
  //     },
  //     {
  //         image: Destination2,
  //         title: "Thailand",
  //         subTitle: "Thailand is a Southeast Asia country. It's known for",
  //         cost: "54,200",
  //         duration: 10,
  //     },
  //     {
  //         image: Destination3,
  //         title: "Paris",
  //         subTitle: "Paris, France's capital, is a major European city and a",
  //         cost: "45,500",
  //         duration: 156,
  //     },
  //     {
  //         image: Destination4,
  //         title: "New Zealand",
  //         subTitle: "New Zealand is an island country in the",
  //         cost: "24,100",
  //         duration: 178,
  //     },
  //     {
  //         image: Destination5,
  //         title: "Bora Bora",
  //         subTitle: "Bora Bora is a small South Pacific island northwest of",
  //         cost: "95,400",
  //         duration: 5,
  //     },
  //     {
  //         image: Destination6,
  //         title: "London",
  //         subTitle: "London, the capital of England and the United",
  //         cost: "38,800",
  //         duration: 550,
  //     },
  // ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="AdminPackagesCard">
      <div className="title">
        <h2>Packages</h2>
      </div>
      {/* <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="destinations">
        {data.map((destination) => {
          return (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              // to={`/packages/${destination.title}`}
              className="blog__title"
            >
              <div className="destination">
              <img src={destination.images[0].image} alt="" />
                <h3>{destination.title}</h3>
                <p style={{width:"300px", height:"100px", overflow: "hidden"}} className="section__description mt-3">
                  {destination.description.length > 150
                    ? destination.description.substr(0, 150)
                    : destination.description}
                </p>
                <div className="info">
                  <div className="services">Price</div>
                  <h4>{destination.cost}</h4>
                </div>
                <div className="distance">
                  <span>Available Ticket</span>
                  <span>{destination.totalCount}</span>
                </div>

                <CardActions style={{ justifyContent: "space-around" }}>
                  <Tooltip title="Edit">
                  <IconButton onClick={()=>navigate("/admin/editPackageDetails", {
                        state: destination,
                      })} aria-label="Edit">
                      <Link to={{ pathname: "/admin/editPackageDetails", state: "destination" }} style={{ textDecoration: 'none', color: "grey" }}>
                        <ModeEditIcon />
                      </Link>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Unhide">
                    <IconButton onClick={()=>{
                      updateVisibility(destination._id)
                    }} aria-label="Unhide">
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                  <IconButton onClick={()=>{
                      removePackage(destination._id)
                    }} aria-label="Delete">
                      <DeleteForeverIcon style={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
