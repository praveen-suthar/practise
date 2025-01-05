import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/apiSlice";

const SignIn = () => {
  const [input, setInput] = React.useState("");

  const [saveData, setSaveData] = useState([])

  const dispatch = useDispatch();

  // const data = useSelector((state) => state.api.datas);
  // const data = useSelector((state)=> state.apiReducer.datas)

  const data = useSelector((state) => state.api.datas);
  console.log('YYY', typeof data)

  console.log("D--11", data);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);


  const onSubmit = () =>{
    setSaveData([...saveData ,input])
    setInput("")
  }

  console.log("saveData", saveData);

  return (
    <>
      <input type="text"
       value={input}
       onKeyDown={(event)=>{
        if(event.key === "Enter"){
          onSubmit()
        }
       }}
       onChange={(e)=> setInput(e.target.value)}
      />

      <button disabled={!input} onClick={onSubmit}>Submit</button>

      {/* {isLoading == true ? <p>Loading...</p> : ""} */}
    </>
  );
};  

export default SignIn;
