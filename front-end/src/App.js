import Form from "./components/Form";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Form />
        <PostList />
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default App;
