import { useState, useEffect } from "react";

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  // Update Date time
  let updateSeconds = seconds < 10 ? "0" + seconds : seconds;
  let updateMinutes = minutes < 10 ? "0" + minutes : minutes;
  let updateHour = hours < 10 ? "0" + hours : hours;
  let updateDays = days < 10 ? "0" + days : days;

  return [updateDays, updateHour, updateMinutes, updateSeconds];
};

export default function useCountdown(targetDate) {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(countDownDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    // Clean up function
    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
}

export { useCountdown };
