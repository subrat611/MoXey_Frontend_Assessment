import { useState } from "react";
import DatePicker from "react-datepicker";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="input-group d-flex align-items-center" id="date-picker">
      <span className="px-1" id="basic-addon1">
        <i className="bi bi-calendar4"></i>
      </span>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="dd/MM/yyyy"
        className="form-control"
      />
      <i className="bi bi-dash"></i>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="dd/MM/yyyy"
        className="form-control"
      />
    </div>
  );
};

export default DateRangePicker;
