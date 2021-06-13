import React, { Component } from "react";
import Heading from "../Reuseable/Heading";
import Img from "gatsby-image";

const getCaty = items => {
  let holdItems = items.map(items => {
    return items.node.category;
  });
  // loops through all the courses that we have, and holds them
  let holdCategories = new Set(holdItems);
  // The Set object lets you store unique values of any type
  let categories = Array.from(holdCategories);
  // The Array.from() static method creates a new, shallow-copied Array instance from
  // an array-like or iterable object.
  categories = [...categories, "all"];
  // appends the all value to the array
  return categories;
};

export default class Coursecart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
      mycategories: getCaty(props.courses.edges),
    };
  }

  catyClicked = category => {
    let keepItSafe = [...this.state.courses];
    // loads all the values, holds them

    if (category === "all") {
      this.setState(() => {
        return { mycourses: keepItSafe };
      });
      // this block, holds all the categories, when all is selected
    } else {
      let holdme = keepItSafe.filter(({ node }) => node.category === category);
      //filter() Returns the elements of an array that meet the condition specified in a callback function
      this.setState(() => {
        return { mycourses: holdme };
      });
    }
  };

  render() {
    // console.log(this.state.courses);
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {this.state.mycategories.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-outline-warning m-3 px-3 text-capitalize"
                    key={index}
                    onClick={() => this.catyClicked(category)}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="row">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div key={node.id} className="col col-md-6 d-flex mx-auto my-3">
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-1">
                    <div className="d-flex">
                      <h6 className="mb-0"> {node.title} </h6>
                      <h6 className="mb-0 text-success ml-3">
                        {" "}
                        $ {node.price}{" "}
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small> {node.description.description} </small>
                    </p>
                    <button
                      className="btb btn-warning snipcart-add-item"
                      data-item-id={node.id}
                      data-item-name={node.title}
                      data-item-price={node.price}
                      data-item-url="..."
                      data-item-image={node.image.fixed.src}
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
