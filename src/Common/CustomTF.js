import React from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  textfield: {
    width: "100%",
    "&[data-content='Name'] .MuiInputBase-input": {
      padding: "0px 20px 0px 0px",
      fontSize: 30,
      fontWeight: 500,
    },
    "&[data-content='Title'] .MuiInputBase-input": {
      padding: "0px 20px 0px 0px",
      fontSize: 22,
    },
    "&[data-content='Description'] .MuiInputBase-input": {
      padding: "0px 50px 0px 0px",
      fontSize: 16,
      height: 110,
      textAlign: "justify",
    },
    "&[data-content='Contact'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 16,
      minWidth: 200
    },
    "&[data-content='Language'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 16,
    },
    "&[data-content='Experience Details'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 16,
    },
    "&[data-content='Proficiency'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 14,
      fontStyle: 'italic',
      color: "#0077b6",
      marginBottom: 10
    },
    "&[data-content='Experience Header'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 20,
      fontWeight: "bold",
    },
    "&[data-content='Project'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 17,
    },
    "&[data-content='Department'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 20,
      fontWeight: "bold",
    },
    "&[data-content='Project Desc'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 15,
    },
    "&[data-content='Project Link'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 15,
      marginBottom: 15
    },
    "&[data-content='Company'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 22,
    },
    "&[data-content='University'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 22,
    },
    "&[data-content='Experience Role'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 22,
    },
    "&[data-content='Date'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 14,
      fontStyle: "italic",
      fontWeight: 100,
    },
    "&[data-content='City/State'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 14,
      fontStyle: "italic",
      fontWeight: 100,
      textAlign: 'right'
    },
    "&[data-content='Status'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 14,
      fontStyle: "italic",
      fontWeight: 100,
      textAlign: 'right',
      minWidth: 300,
      marginTop: -6
    },
    "&[data-content='Company Description'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 14,
      fontStyle: "italic",
      fontWeight: 100,
    },
    "&[data-content='Details'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 16,
      textAlign: "left",
      lineHeight: 1,
      minHeight: 160
    },
    "&[data-content='Skill Header'] .MuiInputBase-input": {
      padding: "0px 2px 0px 0px",
      fontSize: 18,
      fontWeight: 'bold'
    },
    "&[data-content='Skills'] .MuiInputBase-input": {
      fontSize: 16,
      textAlign: "justify",
    },    
    "& .MuiInputBase-input": {
      border: "1px solid transparent",
      "&:not(:focus)": {
        cursor: "pointer",
      },
      "&:hover, &:focus, &:active": {
        backgroundColor: "#fff",
        border: "1px solid black",
      },
    },
  },
}));

const CustomTF = ({ role }) => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        placeholder={role}
        className={classes.textfield}
        InputProps={{ disableUnderline: true }}
        data-content={role}
        multiline={
          role === "Description" ||
          role === "Details" ||
          role === "Status" ||
          role === 'Skills' ||
          role === 'Project Desc' ||
          role === 'Experience Details' ||
          (role === "Company Description" && true)
        }
        rows={
          role === "Description"
            ? 5
            : role === "Details"
            ? 8
            : role === "Company Description"
            ? 2
            : role === "Status"
            ? 2
            : role === 'Skills'
            ? 3
            : role === 'Project Desc'
            ? 4
            : role === 'Experience Details'
            ? 4
            : 1
        }
      />
    </div>
  );
};

export default CustomTF;
