import React from 'react';
import Styled from "styled-components";
import backIcBlack from '../../assets/backIcBlack.svg';
import backIcGray from '../../assets/backIcGray.svg';
import nextIcBlack from '../../assets/nextIcBlack.svg';
import nextIcGray from '../../assets/nextIcGray.svg';

const CalendarWrap = Styled.div`
  .calendar {
    width: 1200px;
    height: 118px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &__year {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      height: 61px;

      &--left:hover, &--right:hover {
        cursor: pointer;
      }

      &--title {
        font-size: 36px;
        font-weight: bold;
        margin: 0 25px;
        line-height: 1;
      }
    }

    &__month {
      height: 57px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 1025px;

      &--button {
        font-size: 18px;
        width: 52px;
        &:hover {
          font-size: 22px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
`;

const Calendar = ({ currYear, setCurrYear, currMonth, setCurrMonth }) => {
  const monthList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const leftButton = React.useRef();
  const rightButton = React.useRef();

  return (
    <CalendarWrap>
      <div className="calendar">
        <div className="calendar__year">
          <img
            className="calendar__year--left"
            src={backIcGray}
            alt=""
            onClick={() => setCurrYear(currYear - 1)}
            onMouseEnter={() => leftButton.current.src = backIcBlack}
            onMouseLeave={() => leftButton.current.src = backIcGray}
            ref={leftButton}
          />
          <div className="calendar__year--title">{currYear}년</div>
          <img
            className="calendar__year--right"
            src={nextIcGray}
            alt=""
            onClick={() => setCurrYear(currYear + 1)}
            onMouseEnter={() => rightButton.current.src = nextIcBlack}
            onMouseLeave={() => rightButton.current.src = nextIcGray}
            ref={rightButton}
          />
        </div>
        <div className="calendar__month">
          {monthList.map((month) => {
            return (
              <div
                key={month}
                className="calendar__month--button"
                onClick={() => setCurrMonth(month)}
                style={
                  month === currMonth
                    ? { fontSize: "22px", fontWeight: "bold" }
                    : {}
                }
              >
                {month + 1}월
              </div>
            );
          })}
        </div>
      </div>
    </CalendarWrap>
  );
};


export default Calendar;