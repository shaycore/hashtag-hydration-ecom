import React from "react";
import { connect } from "react-redux";

export const About = (props) => {

  return (
    <div>
        <h4>Contact For Any Queries</h4>
        <p>
          The only thing we love more than spending
          time in natural places is helping share that
          experience with others. That is our purpose
          and our heartbeat. Whatever you need to help
          you be outside living your best life, we're in.
        </p>
        <img src="https://www.hydroflask.com/media/wysiwyg/hf-2-our-story-dog-above-lake-d.jpg"></img>
    </div>
  );
};



export default connect()(About);