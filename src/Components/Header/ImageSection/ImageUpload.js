import React, { useState, useCallback } from "react";

import Cropper from "react-easy-crop";
import { getCroppedImg } from "./canvasUtils";
import { styles } from "./styles";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(styles);

const readFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
};

const UploadImage = ({ setImage, onClose }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      const blobBin = atob(croppedImage.split(",")[1]);
      const array = [];
      for (let i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
      }
      const file = new Blob([new Uint8Array(array)], { type: "image/jpeg" });
      const fileImage = URL.createObjectURL(file);
      setImage(fileImage);
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 5000000) {
        return console.log("error");
      }
      let imageDataUrl = await readFile(file);

      setImageSrc(imageDataUrl);
    }
  };

  return (
    <div className={classes.root}>
      <React.Fragment>
        <div className={classes.cropContainer}>
          <Cropper
            image={imageSrc}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            onCropChange={setCrop}
            onRotationChange={setRotation}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <div className={classes.controls}>
          <div className={classes.sliderContainer}>
            <Typography
              variant="overline"
              classes={{ root: classes.sliderLabel }}
            >
              Zoom
            </Typography>
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              classes={{ root: classes.slider }}
              onChange={(e, zoom) => setZoom(zoom)}
            />
          </div>
        </div>
        <div className={classes.buttonMainContainer}>
          <label htmlFor="file-upload" className={classes.uploadButton}>
            <Typography className={classes.buttonText}>Select Image</Typography>
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={onFileChange}
            accept="image/*"
            className={classes.input}
          />
          <Button
            onClick={showCroppedImage}
            className={classes.btn}
            data-content="Delete"
            disableRipple
          >
            <Typography className={classes.buttonText}>Save</Typography>
          </Button>
        </div>
      </React.Fragment>
    </div>
  );
};

export default UploadImage;
