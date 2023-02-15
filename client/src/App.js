import './App.css';
import Login from './Components/Login';
// import CreateSet from './Components/CreateSet';
// import Game from './Components/Game';
// import Home from './Components/Home';
// import AddCards from './Components/AddCards';
// import Score from './Components/Score';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {useState, useEffect} from 'react';

function App() {

  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   fetch("http://localhost:9292/")
  //     .then((r) => r.json())
  //     .then((cards) => setCardSet(cards));
  // }, []);

  useEffect(() => {
    fetch("/profile")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        setUser(null)
      }
    });
  },[]);

  //Routes (Home page, 404 page, login, createsets/cards)
  // const router = createBrowserRouter([
  //   {
  //     path: "/game/:id",
  //     element: <Game/>,
  //   },
  //   {
  //     path:"/*",
  //     element: <h1>404 not found</h1>
  //   },
  //   {
  //     path:"/login",
  //     element: <Login />
  //   },
  //   {
  //     path: "/createset",
  //     element: <CreateSet user={user}/>
  //   },
  //   {
  //     path: "/",
  //     // element: <Home user={user}/>
  //     element: <h1>loggedIn</h1>
  //   },
  //   {
  //     path: "/addcards/:id",
  //     element: <AddCards />
  //   },
  //   {
  //     path: "/score/:score",
  //     element: <Score />
  //   }
  // ]);

  //return whatever the route is on
  return (
    <div className="App">
      {user ? (
        <h1>Logged In</h1>
        // <RouterProvider router={router} />
      ):(
        <Login />
      )}
    </div>
  );
}

export default App;