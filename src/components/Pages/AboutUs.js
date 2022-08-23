import React from "react";
import { connect } from "react-redux";

export const About = (props) => {

  return (
    <div className="container-fluid">
        <div className="container-fluid bg-secondary mb-5">

          <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}  >
              <h1 className="font-weight-semi-bold text-uppercase mb-3">
                  Our Story
              </h1>
          </div>
        </div>
        <div className="text-center mb-4 px-5">
          <h4>hy·drate: <i>verb</i></h4>
          <h6><i>To combine with the elements of water</i></h6>
          <small>
            The Coalescence of Man Made and Nature Sourced
          </small>
        </div>
        <div className="container-fluid pt-5">
          <div className="row px-xl-5 align-items-center">
            <div className="col-md-6 pb-4">
              <p>
                From our conception, our goal and aim has been 
                one thing - cultivate te spirit of water and 
                yield to the natural flow of life. Life is too 
                short to be spent pent up away from the gift 
                of life that Nature has given us.
              </p>
              <br />
              <p>
                The only thing we love more than spending
                time in natural places is helping share that
                experience with others. That is our purpose
                and our heartbeat. Whatever you need to help
                you be outside living your best life, <b>we're in</b>.
              </p>
            </div>
            <div className="col-md-6 pb-4">
              <img src="https://i.insider.com/5a6b42a6cf841057498b474c"  style={{maxWidth: '100%'}} />
            </div>
          </div>
        </div>
        <div className="container-fluid pt-5">
          <div className="row px-xl-5 align-items-center">
            <div className="col-md-6 pb-4">
              <img src="https://i.postimg.cc/xTP9L12c/pexels-pixabay-219972.jpg"  style={{maxWidth: '100%'}} />
            </div>
            <div className="col-md-6 pb-4">
              <p>
                To us here at H2, hydration is more than just a cup of water and a cup. 
                Hydration is history - the core necessity of life. Civilizations grew 
                on the offbanks of rivers; the core tenant of a habitable land has always 
                been - is there water?
              </p>
              <br />
              <p>
                So to you, dear adventurer - the sons of the mountains and the daughters 
                of the sea - go forth and venture. With us by your side, you'll never need 
                to ask that question again.
              </p>
            </div>
          </div>
        </div>
        <img src="https://www.hydroflask.com/media/wysiwyg/hf-2-our-story-dog-above-lake-d.jpg" style={{maxWidth: '100%'}}></img>

    </div>
  );
};



export default connect()(About);