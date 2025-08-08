"use client";

import * as React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { GoogleEventProps } from "@/components/events/calendarcall";
import CalendarDay from "@/components/events/CalendarDay";
import CalendarTop from "@/components/events/CalendarTop";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: GoogleEventProps[];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  events,
  ...props
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() === newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="flex justify-center py-[5vh] md:py-[10vh]">
      <DayPicker
        showOutsideDays={showOutsideDays}
        formatters={{
          formatWeekdayName: (date) => {
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            return days[date.getDay()];
          },
          formatCaption: () => "",
        }}
        className={className}
        classNames={{
          months: "",
          month: "",
          caption: "flex justify-center",
          caption_label: "",
          nav: "",
          nav_button: cn(""),
          nav_button_previous: "",
          nav_button_next: "",
          table: "",
          head_row:
            "flex bg-calendar mt-[2vw] text-center items-center justify-center w-[80vw]",
          head_cell:
            "flex justify-evenly w-full font-light text-black !font-bold",
          row: "grid grid-cols-7",
          cell: "border border-gray-200",
          day: "",
          day_range_end: "",
          day_selected: "",
          day_outside: "",
          day_disabled: "",
          day_range_middle: "",
          day_hidden: "",
          ...classNames,
        }}
        components={{
          IconLeft: () => (
            <div className="flex items-center">
              <div onClick={prevMonth}>
                <FaChevronLeft className="text-lg" />
              </div>
              <CalendarTop currentDate={currentDate} />
            </div>
          ),
          IconRight: () => (
            <div onClick={nextMonth}>
              <FaChevronRight className="text-lg" />
            </div>
          ),
          Day: ({ displayMonth, date }) => (
            <CalendarDay
              date={date}
              displayMonth={displayMonth}
              events={events}
            />
          ),
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
