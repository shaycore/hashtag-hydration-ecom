import axios from "axios";
import React from "react";
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  const token = localStorage.getItem("token");
  const stripeSession = async () => {
    const { data: url } = await axios.post("/api/stripe", {
      headers: {
        authorization: token,
      },
    });
    window.location.href = url;
  };

  return (
    <>
      <button onClick={() => { stripeSession() }}>
        Submit
      </button>
    </>
  );
};

export default connect((state) => state)(Cart);