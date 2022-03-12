import React from "react";
import Navbar from "../../Navbar/Navbar";
function Profile() {
  return (
    <React.Fragment>
      <Navbar />
      <h1 className="text-center text-danger text capitalize my-5" >PROFILES</h1>
      <button
        style={{ top: 0, right: 0 }}
        type="button"
        class="btn btn-primary"
      >
        Get Started
      </button>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                alt="Card image cap"
                height="200px"
              />
              <div class="card-body" className="row-sm">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">
                  ABOUT
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                alt="Card image cap"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Hello</p>
                <a href="#" class="btn btn-primary">
                  ABOUT
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                alt="Card image cap"
                height="200px"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Hello</p>
                <a href="#" class="btn btn-primary">
                  ABOUT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Profile;
