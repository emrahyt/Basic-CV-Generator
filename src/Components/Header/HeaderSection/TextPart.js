import React from "react";
import CustomTF from "../../../Common/CustomTF";

import { makeStyles } from "@material-ui/core/styles";

const content = ["Name", "Title", "Description"];

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxHeight: "200px",
    paddingTop: 15,
  },
}));

const TextPart = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {content.map((item) => (
        <CustomTF role={item} />
      ))}
    </div>
  );
};

export default TextPart;
