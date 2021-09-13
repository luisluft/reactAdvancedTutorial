import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarsons";

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        console.log("response :", response);

        if (response.status >= 200 && response.status <= 299) {
          var user = await response.json();
          const { login } = user;
          setUser(login);
          setLoading(false);
        } else {
          setLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  if (isError)
    return (
      <div>
        <h1>Error!</h1>
      </div>
    );

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
