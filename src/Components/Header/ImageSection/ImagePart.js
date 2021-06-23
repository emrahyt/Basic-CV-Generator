import React, { useState, Suspense, lazy } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Circle } from "@react-pdf/renderer";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 200,
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 150,
    height: 150,
  },
  img: {
    borderRadius: "50%", 
    border: "1px solid lightgrey"
  }
}));

const ImageUploadDialog = lazy(() => import("./ImageUploadDialog"));

const ImagePart = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer} onClick={onOpen}>
        <img
          src={croppedImage}
          width="150px"
          height="150px"
          className={classes.img}
        />
      </div>
      <Suspense fallback={<div></div>}>
        <ImageUploadDialog
          open={open}
          onClose={onClose}
          setCroppedImage={setCroppedImage}
        />
      </Suspense>
    </div>
  );
};

export default ImagePart;
