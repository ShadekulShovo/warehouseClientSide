import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="container-fluid">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Difference between javascript and nodejs
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>Node JS:</strong>
                <p>
                  NodeJS is an open-source Javascript runtime environment that
                  enables server-side execution of Javascript. It runs on all
                  major platforms. Outside the browser, Nodejs enables
                  Javascript code to execute There are many modules available
                  for Nodejs, although it's mostly used for web development
                  purposes.
                </p>
                <strong>JavaScript:</strong>
                <p>
                  Javascript is a scripting language that was developed by Sun
                  Microsystems. JS is the most often used abbreviation. It is
                  possible to think about Javascript as an improved version of
                  the ECMA scripting language. Javascript is a high-level
                  programming language that makes use of the notion of Oops,
                  although it is built on prototype inheritance rather of the
                  concept of object-oriented programming.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                When should you use nodejs and when should you use mongodb?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Node.js is a JavaScript runtime built on Chrome’s V8
                  JavaScript engine. Node.js uses an event-driven, non-blocking
                  I/O model that makes it lightweight and efficient, perfect for
                  data intensive real-time applications that run across
                  distributed devices.{" "}
                </p>{" "}
                <p>
                  MongoDB is a cross-platform document database designed to
                  provide high performance, high availability, and ease of
                  development and maintenance.
                </p>
                <p>
                  {" "}
                  Which should you use? This depends on the project requirements
                  and what you want to achieve with the project.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What is the purpose of jwt and how does it work?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>
                  JSON Web Token (JWT) is a token that is used to identify the
                  user. It contains information such as user ID, role, and
                  expiration date. JWT can be used as a single sign-on
                  mechanism.
                </strong>{" "}
                <p>
                  The issuer of the token creates it by signing it with their
                  secret key and it is then sent to the recipient. The recipient
                  validates the signature and checks whether the issuer of this
                  token has permission to do this operation or not. If all
                  checks are successful, then they get access to protected
                  resources.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Differences between sql and nosql databases.
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>SQL</strong>
                <p>
                  SQL databases are primarily called RDBMS or Relational
                  Databases
                </p>
                <p>
                  Traditional RDBMS uses SQL syntax and queries to analyze and
                  get the data for further insights. They are used for OLAP
                  systems.
                </p>
                <p>Full Form Structured query language (SQL)</p>
                <p>These databases are best suited for complex queries</p>
                <p>
                  RDBMS database is the right option for solving ACID problems.
                </p>
                <p>It should be used when data validity is super important</p>
                <strong>NoSQL</strong>
                <p>
                  NoSQL databases are primarily called as Non-relational or
                  distributed database
                </p>
                <p>
                  NoSQL database system consists of various kind of database
                  technologies. These databases were developed in response to
                  the demands presented for the development of the modern
                  application.{" "}
                </p>
                <p>No declarative query language</p>
                <p>These databases are not so good for complex queries</p>
                <p>
                  NoSQL is a best used for solving data availability problems
                </p>
                <p>
                  Use when it’s more important to have fast data than correct
                  data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
