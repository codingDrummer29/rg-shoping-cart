import React from "react";

export default function DualInfoLeft({ imgSrc }) {
  return (
    <section className="bg-warning">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={imgSrc} alt="img-goes here" className="img-thumbnail" />
          </div>

          <div className="col-6 mx-auto">
            <h2 className="text-info">Info Title</h2>
            <p id="big-text" className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              ad, eius ex a et architecto! Ullam quisquam id cum error est dolor
              eius numquam tenetur sapiente, maxime ipsa aliquam quibusdam?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
