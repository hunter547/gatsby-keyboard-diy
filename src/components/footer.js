  
import React from "react";
import "../styling/footer.scss";

const Footer = () => {
  return(
    <section id="footer">
      <div className="footer">
        <div className="footer__content">
          <p>{new Date().getFullYear()} &copy; | Created by <a href="https://evanoff.dev" target="_blank">Hunter Evanoff</a></p>
        </div>
      </div>
    </section>
  )
}

export default Footer