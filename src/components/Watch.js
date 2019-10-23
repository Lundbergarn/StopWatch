import React, { useState, useEffect } from 'react'
import Button from './Button';

const Clock = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState('0.00');   // millisecounds
  const [splitValues, setSplitValues] = useState([]);
  const [secounds, setSecounds] = useState('0.00');
  const [minutes, setMinutes] = useState(0);
  const [laps, setLaps] = useState([]);
  const [lap, setLap] = useState(0);


  function toggleTimer() {
    setIsActive(!isActive);
  }

  function resetTimer() {
    setTime('0.00');
    setSecounds('0.00')
    setMinutes(0);
    setLap(0);
    setLaps([]);
    setIsActive(false);
    setSplitValues([]);
  }

  function splitTimer() {
    let lapTime = formatTime((time - lap));
    let lapTimes = [...laps];
    lapTimes.unshift(lapTime)

    setLaps(lapTimes)
    setLap(time);

    let splitTime = formatTime(time);
    let splitVal = [...splitValues];
    splitVal.unshift(splitTime);
    setSplitValues(splitVal);

  }

  function formatTime(ms) {
    let min = Math.floor((ms / (1000 * 60)) % 60);
    let sec = ((ms % 60000) / 1000).toFixed(2);
    setMinutes(min);
    setSecounds(sec);

    return `${min < 10 ? '0' + min : min}.${sec < 10 ? '0' + sec : sec}`;
  }

  function formatLapTime(ms) {
    let min = Math.floor((ms / (1000 * 60)) % 60);
    let sec = ((ms % 60000) / 1000).toFixed(2);
    return `${min < 10 ? '0' + min : min}.${sec < 10 ? '0' + sec : sec}`;
  }

  let interval = null;
  useEffect(() => {

    if (isActive) {
      const startTime = Date.now() - time;

      interval = setInterval(() => {
        let currentTime = Date.now() - startTime;
        setTime(currentTime);
        formatTime(currentTime);
      });

    } else if (!isActive) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="clock">
      <div className="time">
        <p className="time__total">
          {minutes < 10 ? "0" + minutes + '.' : minutes}
          {secounds < 10 ? '0' + secounds : secounds}
        </p>

        <p className="time__lap">
          {formatLapTime(time - lap)}
        </p>
      </div>

      <div className="row">
        <Button
          title={isActive ? 'Pause' : 'Start'}
          click={toggleTimer}
        ></Button>

        <Button
          title="Reset"
          click={resetTimer}
        ></Button>

        <Button
          title="Split"
          click={splitTimer}
        ></Button>
      </div>

      <section>
        <div className="card">
          <div className="card__content">
            {splitValues.map((value, index) => {
              return (
                <article className="card__text" key={value}>

                  <p>
                    Lap:
                    <span> {splitValues.length - index < 10 ? "0" + (splitValues.length - index) : splitValues.length - index} </span>
                  </p>

                  <p>
                    Time:
                    <span> {laps[index]} </span>
                  </p>

                  <p>
                    Total:
                    <span> {value} </span>
                  </p>

                </article>
              )
            })
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clock;