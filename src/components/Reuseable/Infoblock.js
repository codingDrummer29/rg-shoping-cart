import React from "react";
import Heading from "./Heading";

import { Link } from "gatsby";

export default function infoblock({ heading, pageSrc }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              a maiores blanditiis quam voluptate ipsum placeat adipisci quidem!
              Eligendi qui et deleniti hic cupiditate! Id aperiam nulla quae
              incidunt aliquam, doloremque iusto accusantium ipsa, optio
              perspiciatis officia laborum neque! Rerum a porro expedita aliquid
              neque alias hic, temporibus eveniet earum corrupti nam explicabo
              magnam deserunt perferendis nisi officiis enim architecto?
            </p>
            <Link to={pageSrc}>
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
