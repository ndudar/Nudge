import { useTimer } from "./useTimer";
import TimerDisplay from "./TimerDisplay";

const ExpiredNotice = () => {
  return (
    <div>
      <span>Expired!!!</span>
      <p>Move on to next lesson component.</p>
    </div>
  )
}

const ShowTimer = ({ minutes, seconds }) => {
  return (
    <div>
      <TimerDisplay value={minutes} type={'Mins'} isDanger={minutes <= 1} />
      <p>:</p>
      <TimerDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  )
}

const Timer = (targetTimeMins) => {
  const [minutes, seconds] = useTimer(targetTimeMins)

  if (minutes + seconds <= 0) {
    return <ExpiredNotice />
  } else {
    return (
      <ShowTimer
      minutes={minutes}
      seconds={seconds}
      />
    )
  }
}

export default Timer;
