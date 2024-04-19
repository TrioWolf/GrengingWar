import React from 'react';

// const [seconds, setSeconds] = useState(0);
// const [atk, setatk] = useState(false);


  // function toggle() {
  //   setatk(!atk);
  //   // setSeconds(3);
  // }

  // function reset() {
  //   setatk(false);
  // }

  // useEffect(() => {
  //   let interval = null;
  //   if (atk) {
  //     interval = setInterval(() => {
  //       setSeconds(seconds => seconds - 1);
  //     }, 1000);
  //   } else if (!atk && seconds !== 0  ) {
  //     clearInterval(interval);
  //   } if ( atk && seconds === 0) {
  //     setSeconds(3)
  //     // clearInterval(interval)
  //   }
  //   if (!atk) {
  //     interval = setInterval(() => {
  //       setSeconds(seconds => seconds - 1);
  //     }, 1000);
  //     if (!atk && seconds === 0 ) {
  //       setSeconds(0)
  //       clearInterval(interval)
  //     }
  //   }
  //   return () => clearInterval(interval);
  // }, [atk, seconds]);

  const Timer = (props) => {
  return (
    <div className="app">
      <div className="time" style={styles.text} >
        {props.atktext  ? 'attacking in' : 'ready to attack'} {props.seconds}s
      </div>
      <div className="row">
        <button atk={props.atk ? 'active' : 'inactive'} onClick={props.onClick}>
          {props.atk ? 'STOP ATTACK' : 'ATTACK'}
        </button>
      </div>
    </div>
  );
  };


export default Timer;

const styles = {
  text: {
    color: "aqua",
    marginTop: "10px"
  }
}
