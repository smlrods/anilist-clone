function getKeyByValue(object: {[key: string]: string | number}, value: string | number): any{
  return Object.keys(object).find(key => object[key] === value);
}

function toHoursAndMinutes(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours} ${hours === 1 ? 'hour': 'hours'}, ${minutes > 0 ? ` ${minutes} mins` : ''}`;
}

function emojiColor(percentage: number): string {
  if (percentage >= 75) {
    return '#7bd555';
  } else if (percentage < 75 && percentage > 60) {
    return '#f79a63';
  } else if (percentage < 50) {
    return '#e85d75';
  } else {
    return '#000000';
  }
}

export { getKeyByValue, toHoursAndMinutes, emojiColor }
