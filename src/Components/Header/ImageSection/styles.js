export const styles = (theme) => ({
  root: {
    width: "100%",
    userSelect: "none",
  },
  cropContainer: {
    position: "relative",
    width: "100%",
    height: 200,
    backgroundColor: "lightgrey",
    [theme.breakpoints.up("sm")]: {
      height: 400,
    },
  },  
  controls: {
    padding: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  sliderContainer: {
    display: "flex",
    flex: "1",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 10,
  },
  sliderLabel: {
    fontSize: 16,
    fontWeight: 500,
    textTransform: "capitalize",
    [theme.breakpoints.down("xs")]: {
      minWidth: 65,
    },
  },
  slider: {
    padding: "22px 0px",
    marginLeft: 16,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      alignItems: "center",
      margin: "0 16px",
    },
  },
  input: {
    "&[type='file']": {
      display: "none",
    },
    "&[type='submit']": {
      display: "none",
    },
  },
  buttonMainContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },  
  uploadButton: {
    width: 150,
    height: 30,
    border: "1px solid #69e781",
    backgroundColor: "#69e781",
    borderRadius: 4,
    display: "flex",
    padding: " 6px 12px",
    cursor: "pointer",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "0 3px 3px 0 rgba(0,0,0,0.2)",
    transition: " 0.3s",    
    "&:hover": {
      boxShadow: "0 5px 5px 0 rgba(0,0,0,0.2)",
      "& $buttonText": {
        color: "white",
      },
      "& $cloudUploadIcon": {
        color: "white",
      },
    },
  },
  btn: {
    width: 179,
    height: 44,
    backgroundColor: "red",
    textTransform: "capitalize",
    backgroundColor: "#69e781 !important",
    border: "1px solid #69e781",
    boxShadow: "0 3px 3px 0 rgba(0,0,0,0.2)",
    "&:hover": {
      boxShadow: "0 5px 5px 0 rgba(0,0,0,0.2)",      
      color: "white",
    },
  },
  
  buttonText: {
    transition: "0.2s",
    fontSize: 18,
    fontWeight: 500,
    "&[data-content='menu-upload']": {
      fontSize: 16,
      fontWeight: 500,
    },
  }, 
});
