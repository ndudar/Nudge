import { useEffect, useState } from 'react';

const useTimer = ({targetTimeMins}) => {
  const targetTimeMS = targetTimeMins * 60 * 1000

  const [timer, setTimer] = useState(targetTimeMS)

  useEffect(() => {
    let timeRemaining = targetTimeMS
    const interval = setInterval(() => {
      setTimer(timeRemaining)
      timeRemaining -= 1000
    }, 1000)

    return () => clearInterval(interval)
  }, [targetTimeMS])

  return getReturnedValues(timer)
}

const getReturnedValues = (timer) => {
  const minutes = Math.floor(timer / (1000 * 60))
  const seconds = Math.floor((timer % (1000 * 60)) / 1000)

  return [minutes, seconds]
}

export { useTimer }
