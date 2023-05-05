import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/App.css';

export function Category(props) {
  const cardStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minWidth: "260px",
    minHeight: "300px",
    maxWidth: "300px",
    maxHeight: "340px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginRight: "2em"
  };

  const titleStyle = {
    marginLeft: "30px",
    marginBottom: "40px",
    maxWidth: "100px",
    wordWrap: "break-word",
    color: "#F2F7F5"
  }

  return (
    <Link className="link-underline link-underline-opacity-0" to={{ pathname: props.goTo, state: { title: props.title }}}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>{props.title}</h2>
      </div>
    </Link>
  )
}
