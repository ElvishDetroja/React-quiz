import { useEffect } from "react";

//
//
//

const ExamTimer = ({ timeLeft, setTimeLeft }) => {
  //
  useEffect(() => {
    //
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      {timeLeft > 0 ? (
        <p>Time left: {formatTime(timeLeft)}</p>
      ) : (
        <p>Time's up! Submit your exam.</p>
      )}
    </div>
  );
};

export default ExamTimer;
