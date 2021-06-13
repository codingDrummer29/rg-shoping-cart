import React from "react";
import {
  FaChalkboardTeacher,
  FaUserCheck,
  FaConciergeBell,
} from "react-icons/fa";

export default function IconCards() {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card bg-theme">
              <FaChalkboardTeacher className="card-icons ml-5 text-white text-center" />
              <div className="card-body">
                <h5 className="card-title text-warning text-center">
                  Experienced Teacher
                </h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card bg-theme">
              <FaUserCheck className="card-icons ml-5 text-white text-center" />
              <div className="card-body">
                <h5 className="card-title text-warning text-center">
                  Acknowledged Certificates
                </h5>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card bg-theme">
              <FaConciergeBell className="card-icons ml-5 text-white text-center" />
              <div className="card-body">
                <h5 className="card-title text-warning text-center">
                  Always There
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
