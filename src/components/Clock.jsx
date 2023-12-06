import { useEffect, useState } from "react";

export function Clock({onDeleted, clockData}) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [currentDate, setTime] = useState(new Date())

  const dateUpdate = () => {
    setInterval(() => {
      const currentTime = Date.now();
      setTime(new Date(currentTime-clockData.tzms))
    }, 1000)
  }

  useEffect(dateUpdate, [])
  useEffect(() => {
    setHours(currentDate.getUTCHours());
    setMinutes(currentDate.getUTCMinutes());
    setSeconds(currentDate.getUTCSeconds());
    return clearInterval()
  }, [currentDate])

  console.log(seconds);
  const minuteStyle = {
    rotate: `${minutes*6}deg`
  };
  const hoursStyle = {
    rotate: `${hours*6}deg`
  };
  const secondStyle = {
    transformOrigin: 'center',
    rotate: `${seconds*6}deg`
  };
  return (
    <div className="show-clock">
      <div className="header-clock">
        <span className="title-clock">{clockData.city}</span>
        <span className="cross" onClick={() => onDeleted(clockData.id)}>&times;</span>
      </div>
      <div className="clock">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className="clock-circle" cx="100" cy="100" r="99.5" stroke="black"/>
        <path style={minuteStyle} className="clock-arrow-minute" d="M100.707 10.2929C100.317 9.90237 99.6834 9.90237 99.2929 10.2929L92.9289 16.6569C92.5384 17.0474 92.5384 17.6805 92.9289 18.0711C93.3195 18.4616 93.9526 18.4616 94.3431 18.0711L100 12.4142L105.657 18.0711C106.047 18.4616 106.681 18.4616 107.071 18.0711C107.462 17.6805 107.462 17.0474 107.071 16.6569L100.707 10.2929ZM101 100V11H99V100H101Z" fill="black"/>
        <path style={secondStyle} d="M100.354 10.6464C100.158 10.4512 99.8417 10.4512 99.6464 10.6464L96.4645 13.8284C96.2692 14.0237 96.2692 14.3403 96.4645 14.5355C96.6597 14.7308 96.9763 14.7308 97.1716 14.5355L100 11.7071L102.828 14.5355C103.024 14.7308 103.34 14.7308 103.536 14.5355C103.731 14.3403 103.731 14.0237 103.536 13.8284L100.354 10.6464ZM100.5 100V97.5278H99.5V100H100.5ZM100.5 92.5833V87.6389H99.5V92.5833H100.5ZM100.5 82.6944V77.75H99.5V82.6944H100.5ZM100.5 72.8056V67.8611H99.5V72.8056H100.5ZM100.5 62.9167V57.9722H99.5V62.9167H100.5ZM100.5 53.0278V48.0833H99.5V53.0278H100.5ZM100.5 43.1389V38.1945H99.5V43.1389H100.5ZM100.5 33.25V28.3056H99.5V33.25H100.5ZM100.5 23.3611V18.4167H99.5V23.3611H100.5ZM100.5 13.4722V11H99.5V13.4722H100.5ZM100.707 10.2929C100.317 9.90237 99.6834 9.90237 99.2929 10.2929L92.9289 16.6569C92.5384 17.0474 92.5384 17.6805 92.9289 18.0711C93.3195 18.4616 93.9526 18.4616 94.3431 18.0711L100 12.4142L105.657 18.0711C106.047 18.4616 106.681 18.4616 107.071 18.0711C107.462 17.6805 107.462 17.0474 107.071 16.6569L100.707 10.2929ZM101 100V97.5278H99V100H101ZM101 92.5833V87.6389H99V92.5833H101ZM101 82.6944V77.75H99V82.6944H101ZM101 72.8056V67.8611H99V72.8056H101ZM101 62.9167V57.9722H99V62.9167H101ZM101 53.0278V48.0833H99V53.0278H101ZM101 43.1389V38.1945H99V43.1389H101ZM101 33.25V28.3056H99V33.25H101ZM101 23.3611V18.4167H99V23.3611H101ZM101 13.4722V11H99V13.4722H101Z" fill="black"/>
        <path style={hoursStyle} className="clock-arrow-hours" d="M100.707 55.2929C100.317 54.9024 99.6834 54.9024 99.2929 55.2929L92.9289 61.6569C92.5384 62.0474 92.5384 62.6805 92.9289 63.0711C93.3195 63.4616 93.9526 63.4616 94.3431 63.0711L100 57.4142L105.657 63.0711C106.047 63.4616 106.681 63.4616 107.071 63.0711C107.462 62.6805 107.462 62.0474 107.071 61.6569L100.707 55.2929ZM101 100V56H99V100H101Z" fill="black"/>
        </svg>
      </div>

    </div>
  )
}
