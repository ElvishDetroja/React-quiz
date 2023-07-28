import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  //
  const navigate = useNavigate();
  //
  function start() {
    navigate("/question/1");
  }

  //
  //
  //

  return (
    <>
      <button onClick={start} className="btn">
        Start Exam
      </button>
    </>
  );
}

export default Home;
