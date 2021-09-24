import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);

    setPeople(newPeople);
  };

  return (
    <section>
      <h3>prop drilling</h3>
      <List removePerson={removePerson} people={people}></List>
    </section>
  );
};

export default PropDrilling;
