import React from "react";
import Socials from "./Socials";
import ToTop from "./ToTop";
function Contact() {
  return (
    <div id="contact">
      <div class=" p-3 text-bg-dark text-lg-start section full-page">
        <div className="row g-1 row-cols-1 justify-content-center">
          <div className="feature col col-lg-6 mt-5 pt-lg-5">
            <form class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="firstName" class="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div class="col-sm-6">
                  <label for="lastName" class="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div class="col-12">
                  <label for="email" class="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div class="invalid-feedback">
                    Please provide valid e-mail adress.
                  </div>
                </div>
                <div class="col-12">
                  <label for="phone" class="form-label">
                    Phone number
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="email"
                    placeholder="+432 109 876 543"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
              </div>

              <hr class="my-2" />

              <button class="w-100 btn btn-primary btn-lg" type="submit">
                Send
              </button>
            </form>
          </div>
            <div className="feature col-12 p-lg-5">
              <h3>Contact:</h3>
              <h4>Tomáš Ondrišák</h4>
              <p>+421 950 273</p>
              <p>tomas.ondrisak@gmail.com</p>
          </div>
          <ToTop />
        </div>
      </div>
    </div>
  );
}

export default Contact;
