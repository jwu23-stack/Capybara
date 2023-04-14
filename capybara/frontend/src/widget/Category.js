import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/App.css';

export function Category(props) {
  const cardStyle = {
    backgroundImage: `url('https://capybara.s3.us-west-2.amazonaws.com/catalog/Sports.png')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minWidth: "280px",
    minHeight: "320px",
    maxWidth: "300px",
    maxHeight: "340px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  };

  const titleStyle ={
    marginLeft: "40px",
    marginBottom: "70px"
  }

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Sports</h2>
    </div>
  )

}
