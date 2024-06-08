import moment from 'moment';

const formatDate = (date: string | Date) => {
  const now = moment();
  const inputDate = moment(date);

  if (now.isSame(inputDate, 'day')) {
    return `Сегодня в ${inputDate.format('HH:mm')}`;
  } else if (now.subtract(1, 'day').isSame(inputDate, 'day')) {
    return `Вчера в ${inputDate.format('HH:mm')}`;
  } else {
    return inputDate.format('DD.MM.YYYY в HH:mm');
  }
};

export default formatDate;
