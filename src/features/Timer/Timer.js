import { useTimer } from "./useTimer";
import TimerDisplay from "./TimerDisplay";
import Button from "react-bootstrap/Button";

//take in props for average and different paths
const ExpiredNotice = () => {
  const blockStyle = {
    textAlign: "center",
    padding: "2rem",
    border: "1px solid #ebebeb",
    borderRadius: "0.25rem",
    margin: "0.5rem",
    fontSize: "1rem",
    color: "red"
  };
//based on average, path is associated to the next button

const nav = "/independent-practice"

  return (
    <div style={blockStyle}>
      <span>Time's Up!!!</span>
      <p style={ {color: "black"} }>Move on to the <Button variant="success" href={nav}>next</Button> lesson component.</p>
    </div>
  );
};

const ShowTimer = ({ minutes, seconds }) => {
  const timerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    lineHeight: "1.75rem",
    padding: "1.4rem 1rem .5rem 1rem",
    border: "1px solid #ebebeb",
    borderRadius: "0.5rem",
    textDecoration: "none",
    fontSize: '3rem'
  }

  return (
    <div style={timerStyle}>
      <TimerDisplay value={minutes} isDanger={minutes < 2} />
      <p>&nbsp;:&nbsp;</p>
      <TimerDisplay value={seconds} isDanger={false} />
    </div>
  );
};

//pass in average prop into the expired notice

const Timer = (targetTimeMins) => {
  const [minutes, seconds] = useTimer(targetTimeMins);

  if (minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return <ShowTimer minutes={minutes} seconds={seconds} />;
  }
};

export default Timer;
