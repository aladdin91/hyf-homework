import { useContext } from "react";
import { GithubUserListContext } from "./UserListContext";

function GithubUserList() {
  const { query, userList, loading, error, handleChange } = useContext(
    GithubUserListContext
  );

  return (
    <div>
      <h1>Github users search</h1>
      <input onChange={handleChange} />
      {loading ? <p>Loading...</p> : null}

      {userList.length > 0 ? (
        <ul>
          {userList.map((user) => (
            <li key={user.id}>
              <p>{user.login}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results...</p>
      )}
    </div>
  );
}

export default GithubUserList;
