
import './App.css';
import GithubUserList from './components/GithubUserList';
import { GithubUserListProvider } from "./components/UserListContext";

function App() {
  return (
    <div className="App">
      <GithubUserListProvider>
        <GithubUserList />
      </GithubUserListProvider>
    </div>
  );
}

export default App;
