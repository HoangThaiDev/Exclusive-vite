// Import Modules
import { useCountdown } from "../../custom-hook/useCountdown";

// Import File CSS
import classes from "./css/countDownTimer.module.css";

export default function CountDownTimer({ targetDate }) {
  // Create + use Hooks
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div className={classes["header-datetime-sale"]}>
      <div className={classes["header-datetime-sale-days"]}>
        <span className={classes["header-datetime-sale-days-title"]}>Days</span>
        <p className={classes["header-datetime-sale-days-number"]}>{days}</p>
      </div>
      <div className={classes["header-datetime-sale-hours"]}>
        <span className={classes["header-datetime-sale-hours-title"]}>
          Hours
        </span>
        <p className={classes["header-datetime-sale-hours-number"]}>{hours}</p>
      </div>
      <div className={classes["header-datetime-sale-minutes"]}>
        <span className={classes["header-datetime-sale-minutes-title"]}>
          Minutes
        </span>
        <p className={classes["header-datetime-sale-minutes-number"]}>
          {minutes}
        </p>
      </div>
      <div className={classes["header-datetime-sale-seconds"]}>
        <span className={classes["header-datetime-sale-seconds-title"]}>
          Seconds
        </span>
        <p className={classes["header-datetime-sale-seconds-number"]}>
          {seconds}
        </p>
      </div>
    </div>
  );
}
