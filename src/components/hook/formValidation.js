import { useState } from "react";

const useFormValidation = () => {
  const [data, setData] = useState(10);

  return { data };
};

export default useFormValidation;
