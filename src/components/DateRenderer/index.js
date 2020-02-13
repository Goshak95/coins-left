import React from 'react'
import PropTypes from 'prop-types'

export const DateRenderer = ({ date, locale, children }) => {
  const weekdayNames = {
    'en-US': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  }

  const monthNames = {
    'en-US': [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    ru: [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ],
  }

  const d = {
    weekDay: weekdayNames[locale][date.getDay()],
    month: monthNames[locale][date.getMonth()],
    weekDayNum: date.getDay(),
    monthNum: date.getMonth(),
    year: date.getFullYear(),
    yearShort: date
      .getFullYear()
      .toString()
      .substr(2, 2),
    day: date.getDay().toString().length === 1 ? `0${date.getDay()}` : date.getDay(),
    dayShort: date.getDay(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    dateString: date.toLocaleDateString(locale),
    timeString: date.toLocaleTimeString(locale),
    dateTimeString: date.toLocaleString(locale),
  }

  return children(d)
}

DateRenderer.defaultProps = {
  locale: 'en-US',
  date: new Date(),
}

DateRenderer.propTypes = {
  locale: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  children: PropTypes.func.isRequired,
}
