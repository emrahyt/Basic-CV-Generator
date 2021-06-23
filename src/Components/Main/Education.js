import React from "react";

import CustomTF from "../../Common/CustomTF";

const Education = () => {
  return (
    <>
      <CustomTF role="Department" />
      <CustomTF role="University" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CustomTF role="Date" />
        <CustomTF role="Status" />
      </div>
    </>
  );
};

export default Education;
