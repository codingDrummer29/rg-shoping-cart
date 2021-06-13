import React from "react";

export default function Teamphotosection() {
  return (
    <section>
      <div className="row">
        <div className="col-10 col-sm-10 mx-auto">
          <div className="card-group">
            <div className="card">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card-img-cap"
              />
              <div className="card-body">
                <h5 className="card-title">Papa Rico</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>

            <div className="card">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card-img-cap"
              />
              <div className="card-body">
                <h5 className="card-title">Stanly Loner</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>

            <div className="card">
              <img
                className="card-img-top"
                src="https://images.pexels.com/photos/4571943/pexels-photo-4571943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card-img-cap"
              />
              <div className="card-body">
                <h5 className="card-title">James White</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
