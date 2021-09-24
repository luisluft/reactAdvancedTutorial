export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPerson = [...state.people, action.payload];
    return {
      ...state,
      people: newPerson,
      isModalOpen: true,
      modalContent: "item added",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );

    return { ...state, people: newPeople };
  }

  if ((action.type = "NO_VALUE")) {
    return {
      ...state,
      showModal: true,
      modalContent: "Please enter a value",
    };
  }
};
