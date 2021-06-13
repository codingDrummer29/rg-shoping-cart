import React from "react";
import Heading from "../Reuseable/Heading";

export default function Contact() {
  return (
    <section className="py-3">
      <Heading title="Contact Us" />
      <div className="col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/f/anubhab@example.com" method="post">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Enter your mobile number"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <textarea
              type="text"
              name="descriptioin"
              id="descriptioin"
              placeholder="Enter your issue here"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-outline-warning btn-block">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
