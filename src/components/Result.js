import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { questions } from "./data";

//
//
//

function Result() {
  //
  //
  //
  const navigate = useNavigate();
  const { state } = useLocation();
  const { answer: answerByUSer, time } = state;

  const [details, setDetails] = useState([]);

  useEffect(() => {
    //
    let final = [];
    //
    Object.keys(answerByUSer).length > 0 &&
      questions.forEach((question) => {
        let obj = {
          number: question.questionNumber,
          question: question.question,
          answer: question.answer,
          userSelectedAnswer: answerByUSer[question.questionNumber],
          right:
            answerByUSer[question.questionNumber] == question.answer
              ? true
              : false,
        };
        //
        final.push(obj);
      });

    setDetails(final);
  }, []);

  //
  //
  //

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      {details.length > 0 && (
        <div>
          {details.length > 0 &&
            details.map((singleAns) => {
              return (
                <div className="result-wrapper" key={singleAns.number}>
                  <p className="number">{singleAns.number}.</p>
                  <div>
                    <p>{singleAns.question}</p>
                    <p>Your Answer : {singleAns.userSelectedAnswer}</p>
                    <p>{!singleAns.right && `Answer : ${singleAns.answer}`} </p>
                    <p>{singleAns.right ? "✅︎" : "𐄂"}</p>
                  </div>
                </div>
              );
            })}

          <div>
            <div className="marks-container">
              <p>
                your percentage :{" "}
                {(details.filter((singleAns) => singleAns.right == true)
                  .length /
                  details.length) *
                  100}
                %
              </p>
              <p>{`your taken time is ${formatTime(time)}`}</p>
            </div>
          </div>
        </div>
      )}
      <button
        className="btn"
        onClick={() => {
          navigate("/");
        }}
      >
        go to home
      </button>
    </>
  );
}

export default Result;
