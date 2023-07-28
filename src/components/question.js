import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Radio from "./radio";
import { questions } from "./data";
import ExamTimer from "./timer";

//
//
//

function Question() {
  //
  const { id } = useParams();
  let question = questions[Number(id) - 1];
  //
  const navigate = useNavigate();

  const [answer, setAnswer] = useState([]);

  console.log(answer);

  const examDuration = 600;
  const [timeLeft, setTimeLeft] = useState(examDuration);

  function prevBtn() {
    navigate(`/question/${question.questionNumber - 1}`);
  }

  function netBtn() {
    if (question.questionNumber === questions.length || timeLeft <= 0) {
      navigate(`/result`, { state: { answer : answer, time: examDuration - timeLeft } });
    } else {
      navigate(`/question/${question.questionNumber + 1}`);
    }
  }

  //
  //
  //

  return (
    <>
      <div className="questionbox-container">
        <div className="timer-container">
          <ExamTimer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
        </div>

        <div className="question-container">
          <div className="question-number">{question.questionNumber}.</div>
          {question.question}
        </div>

        <div className="options-container">
          <Radio
            name={question.questionNumber}
            items={question.options}
            itemSelected={answer}
            setItemSelected={setAnswer}
          />
        </div>

        <div className="options-button">
          <div
            className={`btn ${question.questionNumber == 1 && "hide"}`}
            onClick={prevBtn}
          >
            Previous
          </div>

          <div className="btn" onClick={netBtn}>
            {question.questionNumber === questions.length ? "Submit" : "Next"}
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;
