import { GoogleEventProps } from "@/components/events/calendarcall";
import { useState, useEffect } from "react";
import CalendarEventPopover from "./CalendarEventPopover";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DayProps {
  date: Date;
  displayMonth: Date;
  events: GoogleEventProps[];
}

const CalendarDay = ({ date, events }: DayProps) => {
  const today = new Date();
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  const filteredEvents = events.filter((event) => {
    let eventStartDate: Date | null = null;
    let eventEndDate: Date | null = null;

    if (event.start?.dateTime) {
      eventStartDate = new Date(event.start.dateTime);
    } else if (event.start?.date) {
      eventStartDate = new Date(event.start.date);
    }

    if (event.end?.dateTime) {
      eventEndDate = new Date(event.end.dateTime);
    } else if (event.end?.date) {
      eventEndDate = new Date(event.end.date);
    }

    eventStartDate?.setHours(0, 0, 0, 0);
    eventEndDate?.setHours(23, 59, 59, 999);

    return (
      eventStartDate &&
      eventEndDate &&
      date >= eventStartDate &&
      date <= eventEndDate
    );
  });

  const [visibleEventCount, setVisibleEventCount] = useState(2);
  const displayEventCount =
    filteredEvents.length > visibleEventCount
      ? visibleEventCount - 1
      : visibleEventCount;

  useEffect(() => {
    const updateVisibleEventCount = () => {
      if (window.innerHeight > 1440) {
        setVisibleEventCount(4);
      } else if (window.innerHeight > 1080) {
        setVisibleEventCount(3);
      } else {
        setVisibleEventCount(2);
      }
    };

    updateVisibleEventCount();
    window.addEventListener("resize", updateVisibleEventCount);
    return () => window.removeEventListener("resize", updateVisibleEventCount);
  }, []);

  return (
    <div
      className={`flex aspect-[5/6] flex-col gap-y-[0.5vw] md:aspect-[6/5] ${isToday ? "bg-dau-secondary-warm-100" : ""} `}
    >
      <p className="mt-[0.5px] mr-1 flex justify-end text-xs md:text-lg">
        {date.getDate()}
      </p>

      {filteredEvents
        .slice(0, displayEventCount)
        .map(({ summary, start, location }, index) => (
          <CalendarEventPopover
            key={index}
            startDate={start}
            title={summary}
            date={date}
            location={location || "Location TBD"}
          />
        ))}

      {filteredEvents.length > visibleEventCount && (
        <Popover>
          <PopoverTrigger className="w-full cursor-pointer hover:opacity-75">
            <p className="text-[0.8vw] font-semibold">
              {filteredEvents.length - displayEventCount} Other Events
            </p>
          </PopoverTrigger>
          <PopoverContent>
            {filteredEvents
              .slice(displayEventCount)
              .map(({ summary, start, location }, idx) => (
                <div className="px-[10%] pt-[1vh]" key={idx}>
                  <CalendarEventPopover
                    startDate={start}
                    title={summary}
                    date={date}
                    location={location || "Location TBD"}
                  />
                </div>
              ))}
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

export default CalendarDay;
