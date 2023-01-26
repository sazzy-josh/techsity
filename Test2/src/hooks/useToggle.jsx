import {useCallback, useState} from "react";

const useToggle = (initialState = false) => {
  // Initialize the state
  const [toggle, setToggle] = useState(initialState);
  // Define and memorize toggler function in case we pass down the comopnent,

  // This function change the boolean value to it's opposite value
  const handleToggle = useCallback(() => {
    setToggle((v) => !v);
  }, []);

  return [toggle, handleToggle];
};

export default useToggle;
