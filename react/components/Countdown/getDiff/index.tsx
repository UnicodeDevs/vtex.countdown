import moment from "moment";

const getDiff = (initialDateBF: string) => {
  const dateNow = moment(new Date()).format("DD/MM/YYYY HH:mm:ss");
  const dateFinal = moment(initialDateBF).format("DD/MM/YYYY HH:mm:ss");
  const diffDate = moment(dateFinal, 'DD/MM/YYYY HH:mm:ss').diff(moment(dateNow, 'DD/MM/YYYY HH:mm:ss'));
  const countdown = moment.duration(diffDate);

  const months = countdown.months();
  const countdownNumber = countdown.days() < 0 ? 0 : countdown.days();
  const days = String(months >= 1 ? countdownNumber + 31 : countdownNumber).padStart(2, '0');

  const [hours, minutes] = [
    String(countdown.hours() >= 0 ? countdown.hours() : '00').padStart(2, '0'),
    String(countdown.minutes() >= 0 ? countdown.minutes() : '00').padStart(2, '0'),
  ];

  // Aqui garantimos que os segundos não sejam negativos
  const seconds = String(countdown.seconds() >= 0 ? countdown.seconds() : 0).padStart(2, '0');

  return [days, hours, minutes, seconds];
};

export default getDiff;
