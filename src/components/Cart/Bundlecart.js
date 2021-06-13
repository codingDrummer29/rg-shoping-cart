import React, { Component } from "react";
import Heading from "../Reuseable/Heading";
import Img from "gatsby-image";

export default class Bundlecart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bundles: this.props.bundles.edges,
      mybundles: this.props.bundles.edges,
    };
  }
  render() {
    // console.log(this.state.bundles);
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Bundles" />
          <div className="row">
            {this.state.mybundles.map(({ node }) => {
              return (
                <div key={node.id} className="col col-md-6 d-flex mx-auto my-3">
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-1">
                    <div className="d-flex">
                      <h6 className="mb-0"> {node.title} </h6>
                    </div>
                    <div className="d-flex py-2">
                      <h6 className="mb-0 text-success ml-3">$ {node.price}</h6>
                    </div>

                    <button
                      className="btb btn-warning snipcart-add-item mt-3"
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
