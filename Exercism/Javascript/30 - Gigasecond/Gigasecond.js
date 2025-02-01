export const gigasecond = (date) => {
    const gigaSecond = 1e12
    let newDate = new Date(date.getTime() + gigaSecond);
    return(newDate);
  };