const TimerDisplay = ({ value, type, isDanger }) => {
  const danger = {
    color: "red"
  }

  const standard = {
    color: "black"
  }

  return (
    <div>
      <p style={isDanger ? danger : standard}>{value}</p>
      <span>{type}</span>
    </div>
  )
}

export default TimerDisplay;
