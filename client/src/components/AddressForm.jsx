import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CollectionsIcon from "@mui/icons-material/Collections";
import Button from "@mui/material/Button";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import SendIcon from "@mui/icons-material/Send";
export default function AddressForm(
  title,
  setZip,
  zip,
  country,
  setCountry,
  desc,
  address,
  setState,
  setCity,
  state,
  city,
  setDesc,
  setTitle,
  setAddress,
  setVideoFileUrl,
  videoFileUrl,
  setImageFileName,
  imageFileName,
  setImageFileUrl,
  imageFileUrl,
  setVideoFileName,
  videoFileName,
) {
  const handleUploadImage = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "jscore",
        uploadPreset: "jbaarpy3",
      },
      (error, result) => {
        console.log("hellooo", result.info.original_filename);
        console.log("hellooo", result.info.url);
        if (!error && result && result.event === "success") {
          // var myuser = JSON.parse(localStorage.getItem('user'));
          // console.log(myuser.role);
          // // axios.post('/company/UploadPic', { user: myuser._id, pic: result.info.url })
          // window.location.reload();
          setImageFileName((imageFileName) => [
            ...imageFileName,
            result.info.original_filename,
          ]);
          setImageFileUrl((imageFileUrl) => [...imageFileUrl, result.info.url]);
        }
      },
    );
    widget.open();
    console.log("newww", imageFileName, imageFileUrl);
  };
  const handleUploadVideo = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "jscore",
        uploadPreset: "jbaarpy3",
      },
      (error, result) => {
        console.log("hellooo", result.info.original_filename);
        console.log("hellooo", result.info.url);
        if (!error && result && result.event === "success") {
          // var myuser = JSON.parse(localStorage.getItem('user'));
          // console.log(myuser.role);
          // // axios.post('/company/UploadPic', { user: myuser._id, pic: result.info.url })
          // window.location.reload();
          setVideoFileName((videoFileName) => [
            ...videoFileName,
            result.info.original_filename,
          ]);
          setVideoFileUrl((videoFileUrl) => [...videoFileUrl, result.info.url]);
        }
      },
    );
    widget.open();
    console.log("newww", videoFileName, videoFileUrl);
  };
  const handleRemoveItemImage = (name, url) => {
    setImageFileName(imageFileName.filter((item) => item !== name));
    setImageFileUrl(imageFileUrl.filter((item) => item !== url));
  };
  const handleRemoveItemVideo = (name, url) => {
    setVideoFileName(videoFileName.filter((item) => item !== name));
    setVideoFileUrl(videoFileUrl.filter((item) => item !== url));
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <>
          <Grid item xs={12} sm={12}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="icon-button-file">
                <IconButton
                  onClick={() => {
                    handleUploadImage();
                  }}
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Button
                    style={{ width: "500px" }}
                    variant="contained"
                    endIcon={<CollectionsIcon />}
                  >
                    Upload Images
                  </Button>
                </IconButton>
                {imageFileName.map((item, index) => {
                  console.log("yesss", item);
                  return imageFileName ? (
                    <div className="flex justify-between ">
                      <a className="text-black" href={imageFileUrl[index]}>
                        <p>Uploaded Images: {item}</p>
                      </a>
                      <div style={{ marginTop: "-8px" }}>
                        <IconButton
                          className="text-rose-600"
                          onClick={() => {
                            handleRemoveItemImage(item, imageFileUrl[index]);
                          }}
                        >
                          <DeleteForeverOutlinedIcon style={{ color: "red" }} />
                        </IconButton>
                      </div>
                    </div>
                  ) : null;
                })}
              </label>
            </Stack>
          </Grid>
        </>
        <>
          <Grid item xs={12} sm={12}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="icon-button-file">
                <IconButton
                  onClick={() => {
                    handleUploadVideo();
                  }}
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <Button
                    style={{ width: "500px" }}
                    variant="contained"
                    endIcon={<CollectionsIcon />}
                  >
                    Upload Videos
                  </Button>
                </IconButton>
                {videoFileName.map((item, index) => {
                  console.log("yesss", item);
                  return videoFileName ? (
                    <div className="flex justify-between ">
                      <a className="text-black" href={videoFileUrl[index]}>
                        <p>Uploaded Video: {item}</p>
                      </a>
                      <div style={{ marginTop: "-8px" }}>
                        <IconButton
                          className="text-rose-600"
                          onClick={() => {
                            handleRemoveItemVideo(item, videoFileUrl[index]);
                          }}
                        >
                          <DeleteForeverOutlinedIcon style={{ color: "red" }} />
                        </IconButton>
                      </div>
                    </div>
                  ) : null;
                })}
              </label>
            </Stack>
          </Grid>
        </>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            multiline
            id="title"
            name="title"
            label="Title"
            fullWidth
            autoComplete="title"
            variant="standard"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            multiline
            id="description"
            name="description"
            label="Description"
            fullWidth
            autoComplete="description"
            variant="standard"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            multiline
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            multiline
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            multiline
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            multiline
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            multiline
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
