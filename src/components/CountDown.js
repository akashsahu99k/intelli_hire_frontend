import React, { useState, useEffect } from 'react';

function Countdown({ startTime }) {
  const [timeLeft, setTimeLeft] = useState(startTime);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop the countdown when it reaches zero

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1); // Decrement time by 1 second
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='font-bold px-2 py-1 bg-slate-200 rounded-md'>
      <h1>{formatTime()}</h1>
    </div>
  );
}

export default Countdown;
