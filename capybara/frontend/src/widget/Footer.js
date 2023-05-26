import React from 'react';

export function Footer() {
  return (
    <footer className="text-center">
      <img src={require("../img/navbar-white.png")} alt="hobbio white" className="footer-logo-img"></img>
      <p className="footer"><a href="https://www.youtube.com/watch?v=OG_e8ve0l_w">Final Presentation</a> · <a href="https://miro.com/app/board/uXjVP1qePr4=/" target='_blank' rel="noreferrer"> Miro Board</a> · <a href="https://github.com/jwu23-stack/Capstone-23/tree/main" target="_blank" rel="noreferrer">Hand-off Documents</a></p>
      <p>&copy; Hobbio 2023 University Of Washington</p>
    </footer>
  )
}