import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"

const HomeCards = () => (
  
  <section className="o-grid2 o-grid2--panels">
  
  <div className="o-tile">
    <Link to="/services" >
      <div className="c-card shadow">
        <figure className="c-card__img"></figure>
        <h3 className="c-card__header">Design</h3>
        <div className="c-card__content">werwer</div>
      </div>
    </Link>
  </div>

  <div className="o-tile">
    <Link to="/services" >
      <div className="c-card shadow">
        <figure className="c-card__img"></figure>
        <h3 className="c-card__header">Development</h3>
        <div className="c-card__content">werwer</div>
      </div>
    </Link>
  </div>

  <div className="o-tile">
    <Link to="/services" >
      <div className="c-card shadow">
        <figure className="c-card__img"></figure>
        <h3 className="c-card__header">Social</h3>
        <div className="c-card__content">werwer</div>
      </div>
    </Link>
  </div>

  <div className="o-tile">
    <Link to="/services" >
      <div className="c-card shadow">
        <figure className="c-card__img"></figure>
        <h3 className="c-card__header">Support</h3>
        <div className="c-card__content">werwer</div>
      </div>
    </Link>
  </div>

</section>

  
)

export default HomeCards
