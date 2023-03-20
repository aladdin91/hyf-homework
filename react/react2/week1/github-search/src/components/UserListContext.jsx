import { createContext, useState, useEffect } from "react";

const GithubUserListContext = createContext();

function GithubUserListProvider({ children }) {
  const [userList, setUserList] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(query);
    setQuery(value);
    if (value === "") {
      setUserList([]);
    }
  };

  useEffect(() => {
    async function handleSubmit() {
      if (query !== "") {
        setLoading(true);
        try {
          const response = await fetch(
            `https://api.github.com/search/users?q=${query}`
          );
          const data = await response.json();
          setUserList(data.items);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(`Error fetching data: ${error.message}`);
          console.log(error);
        }
      }
    }

    handleSubmit();
  }, [query]);

  return (
    <GithubUserListContext.Provider
      value={{ query, userList, loading, error, handleChange }}
    >
      {children}
    </GithubUserListContext.Provider>
  );
}

export { GithubUserListContext, GithubUserListProvider };
