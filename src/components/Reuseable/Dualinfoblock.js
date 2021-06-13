import React from "react";
import Heading from "./Heading";
import { Link } from "gatsby";

export default function Dualinfoblock({ heading, imageSrc }) {
  return (
    <section className="my-4 p-4 bg-theme">
      <div className="container">
        <Heading title={heading} />

        <div className="row">
          <div className="col-8 mx-auto">
            <p id="big-text" className="lead text-white mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
              doloremque libero omnis, vero, ipsam sed qui aut animi voluptate
              perspiciatis obcaecati dolor veniam. Mollitia doloremque porro
              saepe quasi voluptatum obcaecati dolorem error! Deserunt labore ea
              error dolores consectetur doloremque? Aspernatur, voluptatem
              voluptate. Nihil asperiores voluptates odio necessitatibus
              deserunt id et. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Pariatur incidunt error harum molestiae soluta,
              voluptatibus, dicta provident accusamus adipisci odit fugiat
              distinctio explicabo voluptatum recusandae ut iusto neque,
              nesciunt corporis quidem consequatur rem? Explicabo, pariatur
              cupiditate officiis amet nemo quisquam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tempore fugiat adipisci animi dicta
              ad, labore nulla delectus eligendi laborum aperiam.
            </p>
          </div>

          <div className="col-4">
            <div className="card bg-dark">
              <img
                src={imageSrc}
                className="card-img-top"
                alt="img-goes here"
              />
              <div className="card-body">
                <h5 className="card-title text-white"> Just Click Photos</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
                  consequuntur.
                </p>
                <button className="btn btn-danger btn-block">
                  <Link to="/" className="text text-center text-white">
                    Go Some Where
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
