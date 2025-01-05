import { useState } from "react";
import "./style/signUp.scss";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [saveData, setSaveData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const onChangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newError = validationForm(userInfo);
    setErrors(newError);

    if (Object.keys(newError).length === 0) {
      if (isEditing) {
        const updatedValue = saveData.map((item, index) => {
          return index === editingId ? userInfo : item;
        });
        setSaveData(updatedValue);
        setIsEditing(false);
        setEditingId(null);
      } else {
        setSaveData([...saveData, userInfo]);
      }
      setUserInfo({
        name: "",
        email: "",
        password: "",
      });
      console.log("Form submitted successfully!");
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const validationForm = (data) => {
    console.log("Indside--data", data);

    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    } else if (data.name.length < 4) {
      errors.name = "Username must be at least 4 characters long";
      console.log();
    }
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email.trim())) {
      newErrors.email = "Your given email is not valid";
    }
    if (!data.password.trim()) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 4) {
      newErrors.password = "Your password is very week";
    }
    console.log("newErrors<-----", newErrors)
    return newErrors;
  };

  const onDeleteHandler = (id) => {
    const filteredData = saveData.filter((_, index) => {
      return index !== id;
    });
    setSaveData(filteredData);
  };

  const onEditHandler = (index) => {
    const indexID = saveData[index];
    setUserInfo(indexID); // data fill in the input 
    setEditingId(index); //
    setIsEditing(true); // track the edit part
  };


  console.log("saveData", saveData); 

  return (
    <>
      <center>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            onChange={onChangeHandler}
            value={userInfo.name}
            name="name"
          />
          <br />
          {errors.name && (
            <span className="validation-error">{errors.name}</span>
          )}
          <br />
          <br />
          <input
            type="text"
            onChange={onChangeHandler}
            value={userInfo.email}
            name="email"
          />
          <br />
          {errors.email && (
            <span className="validation-error">{errors.email}</span>
          )}
          <br />
          <br />
          <input
            type="password"
            onChange={onChangeHandler}
            value={userInfo.password}
            name="password"
          />
          <br />
          {errors.password && (
            <span className="validation-error">{errors.password}</span>
          )}
          <br />
          <br />
          <button type="submit">{isEditing ? "Edit" : "Submit"}</button>
        </form>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        {
          
        }
        {saveData.length > 0 &&
          saveData.map((item, index) => {
            return (
              <table key={index}>
                <tbody>
                  <tr>
                    <>
                      <th>{item.name}</th>
                      <th>{item.email}</th>
                      <th>{item.password}</th>
                      <th>
                        <button onClick={() => onEditHandler(index)}>
                          Edit
                        </button>
                      </th>
                      <th>
                        <button onClick={() => onDeleteHandler(index)}>
                          Delete
                        </button>
                      </th>
                    </>
                  </tr>
                </tbody>
              </table>
            );
          })}

        {saveData.length === 0 ? <p>Data is not available </p> : ""}
      </center>
    </>
  );
};

export default SignUp;
