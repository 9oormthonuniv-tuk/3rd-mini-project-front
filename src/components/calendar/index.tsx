import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale/ko";
import ArrowLeft from "@assets/icons/arrow-left.svg";
import ArrowRight from "@assets/icons/arrow-right.svg";
import "./style.css";

interface CalendarProps {
  date: Date[];
  onChange: (date: Date[] | null) => void;
}

const Calendar = ({ date, onChange }: CalendarProps) => {
  return (
    <DatePicker
      dateFormatCalendar="yyyy년 MM월"
      selectedDates={date}
      onChange={onChange}
      startDate={new Date()}
      locale={ko}
      inline
      selectsMultiple
      minDate={new Date()}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="header">
          <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            <ArrowLeft />
          </button>
          <span>
            {date.getFullYear()}년 {date.getMonth() + 1}월
          </span>
          <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            <ArrowRight />
          </button>
        </div>
      )}
    />
  );
};

export default Calendar;
