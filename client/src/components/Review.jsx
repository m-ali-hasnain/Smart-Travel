/* eslint-disable react/prop-types */
import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const products = [
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 2",
    desc: "Another thing",
    price: "$3.45",
  },
  {
    name: "Product 3",
    desc: "Something else",
    price: "$6.51",
  },
  {
    name: "Product 4",
    desc: "Best thing of all",
    price: "$14.11",
  },
  { name: "Shipping", desc: "", price: "Free" },
];

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function Review({
  title,
  zip,
  country,
  desc,
  address,
  state,
  city,
  videoFileUrl,
  imageFileName,
  imageFileUrl,
  videoFileName,
  price,
  totalCount,
}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Package Summary
      </Typography>
      <List disablePadding>
        <ListItem key={title} xs={12} sm={6} sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Title" />
          <Typography variant="body2">{title}</Typography>
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem key={title} xs={12} sm={6} sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Description" />
          <Typography style={{ width: "50%", overflow: "auto" }} variant="body2">{desc}</Typography>
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem key={title} xs={12} sm={6} sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Address" />
          <Typography variant="body2">{address}</Typography>
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem key={title} xs={12} sm={6} sx={{ py: 1, px: 0 }}>
          <ListItemText primary="City" />
          <Typography variant="body2">{city}</Typography>
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem key={title} xs={12} sm={6} sx={{ py: 1, px: 0 }}>
          <ListItemText primary="State" />
          <Typography variant="body2">{state}</Typography>
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem key={title} xs={12} sm={6} sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Zip" />
          <Typography variant="body2">{zip}</Typography>
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem key={title} xs={12} sm={6} sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Country" />
          <Typography variant="body2">{country}</Typography>
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem key={title} xs={12} sm={6} sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Price" />
          <Typography variant="body2">{price}</Typography>
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem key={title} xs={12} sm={6} sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total Tickets" />
          <Typography variant="body2">{totalCount}</Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Uploaded Images
          </Typography>
          {imageFileName.map((item, index) => {
            return imageFileName ? (
              <Typography gutterBottom>
                {" "}
                <a
                  className="text-black"
                  target="_blank"
                  href={imageFileUrl[index]}
                  rel="noreferrer"
                >
                  <p>Uploaded Images: {item}</p>
                </a>
              </Typography>
            ) : (
              <></>
            );
          })}
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Uploaded Videos
          </Typography>
          {videoFileName.map((item, index) => {
            return imageFileName ? (
              <Typography xs={12} sm={6} gutterBottom>
                {" "}
                <a
                  className="text-black"
                  target="_blank"
                  href={videoFileUrl[index]}
                  rel="noreferrer"
                >
                  <p>Uploaded Images: {item}</p>
                </a>
              </Typography>
            ) : (
              <></>
            );
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
