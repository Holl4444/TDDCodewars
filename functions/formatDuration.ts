    interface TimeObj {
        timeVal: number
        timeString: string
        remainder: number
    }

export default function formatDuration(secs: number) {
    if (secs === 0) { return `now`; }
    
    if (!secs || !Number.isSafeInteger(secs) || secs % 1 !== 0 || secs < 0) {
        throw new Error(`Invalid input`);
    }

    const { timeVal: years, timeString: yString, remainder: remDays}: TimeObj = getYears(secs);
    const { timeVal: days, timeString: dString, remainder: remHours}: TimeObj = getDays(remDays);
    const { timeVal: hours, timeString: hString, remainder: remMins }: TimeObj = getHours(remHours);
    const { timeVal: minutes, timeString: mString, remainder: seconds }: TimeObj = getMinutes(remMins);

    const formatSeconds = seconds > 0 ? seconds > 1 ? `${seconds} seconds` : `${seconds} second` : '';
    let formattedTime = ``;
    const punctuation = ['', ' and ', ', ', ', ', ', '];
    let count = -1;

    if (years) { count++ };
    if (days) { count++ }
    if (hours) { count++ };
    if (minutes) { count++ };
    if (seconds) { count++ };

    if (years) {
        formattedTime += yString + punctuation[count];
        count--;
    }

    if (days) {
        formattedTime += dString + punctuation[count];
        count--;
    }

    if (hours) {
        formattedTime += hString + punctuation[count];
        count--;
    }

    if (minutes) {
        formattedTime += mString + punctuation[count];
        count--;
    }

    if (seconds) {
        formattedTime +=  formatSeconds + punctuation[count];
    }
    console.log(formattedTime);
    return formattedTime;
}

function getYears(secs: number): TimeObj {
  const days = Math.floor(secs / 31536000);
  const remainder = secs - days * 31536000;
  return {
    timeVal: days,
    timeString:
      days > 0
        ? days > 1
          ? `${days} years`
          : `${days} year`
        : '',
    remainder: remainder,
  };
}

function getDays(secs: number): TimeObj {
  const days = Math.floor(secs / 86400);
  const remainder = secs - days * 86400;
  return {
    timeVal: days,
    timeString:
      days > 0
        ? days > 1
          ? `${days} days`
          : `${days} day`
        : '',
    remainder: remainder,
  };
}


function getHours(secs: number): TimeObj {
    const hours = Math.floor(secs / 3600);
    const remainder = secs - hours * 3600;
    return { timeVal: hours, timeString: hours > 0 ? hours > 1 ? `${hours} hours`: `${hours} hour` : '', remainder: remainder };
}


function getMinutes(secs: number): TimeObj {
    const minutes = Math.floor(secs / 60);
    const remainder = secs - minutes * 60;
    return { timeVal: minutes ,timeString: minutes > 0 ? minutes > 1 ? `${minutes} minutes` : `${minutes} minute` : '', remainder: remainder };
}
