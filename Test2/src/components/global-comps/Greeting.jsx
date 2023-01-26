import React from "react";
import {useDate} from "../../hooks";

const Greeting = ({text_size, display}) => {
  const day = useDate();
  return (
    <h5
      className={`text-${text_size} text-gray-600 font-bold ${
        display ? "hidden lg:block" : "block lg:hidden"
      }`}
    >
      Hey, 👋🏼 It's {day}
    </h5>
  );
};

export default Greeting;
