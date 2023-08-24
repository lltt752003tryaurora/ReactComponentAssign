import React, { Component } from "react";

export default class Body extends Component {
  render() {
    return (
      <div id="bodyCompo">
        <div className="container py-5">
          <div className="p-4 content bg-light rounded-3 text-left">
            <div className="m-4 m-lg-5"></div>
            <h1 className="fw-bold">A warm welcome!</h1>
            <p className="fs-4">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <a className="btn btn-primary btn-lg" href="#thinh">
              Call to action
            </a>
          </div>
          <div className="row py-5">
            <div className="col-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src="./logo192.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#thinh" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src="./logo192.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#thinh" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src="./logo192.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#thinh" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src="./logo192.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#thinh" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
