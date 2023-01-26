import {useState} from "react";
import {Weekdays} from "../database/index.";

const useDate = () => {
  const [date] = useState(Weekdays);

  const d = new Date();
  let day = date[d.getDay()];

  return day;
};

export default useDate;
