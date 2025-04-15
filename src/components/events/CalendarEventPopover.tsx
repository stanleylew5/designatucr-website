import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CalendarEventPopoverProps {
  startDate: {
    dateTime?: string;
    date?: string;
  };
  title: string;
  date: Date;
  location: string;
}

const CalendarEventPopover = ({
  startDate,
  title,
  date,
  location,
}: CalendarEventPopoverProps) => {
  let eventStartDate = new Date();
  let hasStartTime = false;

  if (startDate.dateTime) {
    eventStartDate = new Date(startDate.dateTime);
    hasStartTime = true;
  } else if (startDate.date) {
    eventStartDate = new Date(startDate.date);
  }

  const startHour = eventStartDate.getHours();
  const startMinutes = eventStartDate.getMinutes();
  const formattedStartHour = startHour % 12 || 12;
  const formattedStartMinutes =
    startMinutes < 10 ? `0${startMinutes}` : startMinutes;
  const startHourSuffix = startHour < 12 ? "AM" : "PM";

  return (
    <Popover>
      <PopoverTrigger className="bg-dau-secondary-200 flex w-full cursor-pointer justify-between text-left hover:opacity-75">
        <span className="md:text-md overflow-hidden px-1 py-0 text-xs text-ellipsis whitespace-nowrap md:py-2">
          {title}
        </span>
        <span className="text-right text-[0.8vw]">
          {formattedStartHour}:{formattedStartMinutes}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-[70vw] overflow-hidden rounded-xl p-0 shadow-md md:w-[30vw] 2xl:w-[25vw]">
        <div className="bg-dau-secondary-warm-100 grid grid-cols-5 border-b-2 px-4 py-2 text-[2.5vw] font-semibold">
          <p className="col-span-3">{title}</p>
          <p className="col-span-2 flex justify-end">
            {date.toLocaleString("default", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="bg-white px-4 py-3 text-[2.5vw]">
          <p>{location}</p>
          {hasStartTime && (
            <p className="mt-1">
              {formattedStartHour}:{formattedStartMinutes} {startHourSuffix}
            </p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CalendarEventPopover;
