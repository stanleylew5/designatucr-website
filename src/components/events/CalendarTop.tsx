interface CalendarTopProps {
  currentDate: Date;
}

const CalendarTop = ({ currentDate }: CalendarTopProps) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="px-2 text-3xl leading-none font-semibold">
      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
    </div>
  );
};

export default CalendarTop;
