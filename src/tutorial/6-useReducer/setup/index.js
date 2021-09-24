import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [name, setName] = useState("");

  const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
      const newPerson = [...state.people, action.payload];
      return {
        ...state,
        people: newPerson,
        isModalOpen: true,
        modalContent: "item added",
      };
    }

    if ((action.type = "NO_VALUE")) {
      return {
        ...state,
        showModal: true,
        modalContent: "Please enter a value",
      };
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    people: [],
    isModalOpen: false,
    modalContent: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
