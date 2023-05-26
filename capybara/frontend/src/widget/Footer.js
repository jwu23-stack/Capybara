import React from 'react';

export function Footer() {
  return (
    <footer className="text-center">
      <img src={require("../img/navbar-white.png")} alt="hobbio white" className="footer-logo-img"></img>
      <p className="footer"><a href="https://docs.google.com/presentation/d/1eCBYhJ_FyBuoyKWcGdu5uZaa4Lfh7GJRH47PkSHcDAQ/edit?usp=sharing">Final Presentation</a> · <a href="https://miro.com/app/board/uXjVMEz2DeA=/?share_link_id=734591418960" target='_blank' rel="noreferrer"> Miro Board</a> · <a href="https://github.com/jwu23-stack/Capstone-23/tree/main" target="_blank" rel="noreferrer">Hand-off Documents</a></p>
      <p>&copy; Hobbio 2023 University Of Washington</p>
    </footer>
  )
}