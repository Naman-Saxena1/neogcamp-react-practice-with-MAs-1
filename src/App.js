import "./styles.css";
import { Form } from "./Form";
import { Result } from "./Result";
import { useState } from "react";

export default function App() {
  const [newFormList, setNewFormList] = useState([]);
  const [allInfoList, setAllInfoList] = useState([]);
  const [updatedResultList, setUpdatedResultList] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const addNewForm = () => {
    setNewFormList((prevList) => [...prevList, "<Form/>"]);
  };

  const submitDetails = () => {
    setShowResult(true);
    setUpdatedResultList(allInfoList);
  };

  return (
    <div className="App">
      <Form
        formIndex={0}
        allInfoList={allInfoList}
        setAllInfoList={setAllInfoList}
      />
      {newFormList.map((FormComp, index) => (
        <Form
          key={index}
          formIndex={index + 1}
          allInfoList={allInfoList}
          setAllInfoList={setAllInfoList}
        />
      ))}
      <button onClick={addNewForm}>+</button>
      <button onClick={submitDetails}>Submit</button>
      {showResult &&
        updatedResultList.map((form, index) => {
          return <Result key={index} name={form.name} email={form.email} />;
        })}
    </div>
  );
}
