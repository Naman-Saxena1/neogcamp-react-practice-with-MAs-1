import { useEffect, useState } from "react";

function Form({ formIndex, allInfoList, setAllInfoList }) {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setAllInfoList((prevInfoList) => {
      return [
        ...prevInfoList.slice(0, formIndex),
        { ...prevInfoList[formIndex], name: userName, email: userEmail },
        ...prevInfoList.slice(formIndex + 1, prevInfoList.length)
      ];
    });
  }, [userName, userEmail, formIndex, setAllInfoList]);

  return (
    <form>
      <label htmlFor="user-name">Name</label>
      <input
        id="user-name"
        type="text"
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      ></input>

      <label htmlFor="user-email">Email</label>
      <input
        id="user-email"
        type="email"
        value={userEmail}
        onChange={(event) => {
          setUserEmail(event.target.value);
        }}
      ></input>
    </form>
  );
}

export { Form };
