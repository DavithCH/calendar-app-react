import "./Day.css";

const Day = ({ day, onClick }) => {
  const className = `day ${!day.isDayInMonth ? "padding" : ""} ${
    day.isToday ? "currentDay" : ""
  }`;

  return (
    <>
      <div className={className}>
        {day.value}
        {day.event && (
          <div className="event">
            {day.event.title} à {day.event.time}
          </div>
        )}
      </div>
    </>
  );
};

export default Day;
