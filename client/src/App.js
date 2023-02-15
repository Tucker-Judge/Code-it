import './App.css';
import Login from './Components/Login';
import CreateSet from './Components/CreateSet';
import Game from './Components/Game';
import Home from './Components/Home';
import AddCards from './Components/AddCards';
import Score from './Components/Score';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {useState, useEffect} from 'react'

function App() {
const [user, setUser] = useState(null)
  // const [cardSet, setCardSet] = useState([])
  // const [selectedSet, setSelectedSet] = useState()

  // useEffect(() => {
  //   fetch("http://localhost:9292/")
  //     .then((r) => r.json())
  //     .then((cards) => setCardSet(cards));
  // }, []);
  useEffect(() => {
    fetch("http://localhost:3000/sessions")
      .then((r) => r.json())
      .then((loggedIn) => setUser(loggedIn));
  }, []);

  //Routes (Home page, 404 page, login, createsets/cards)
  const router = createBrowserRouter([
    {
      path: "/game/:id",
      element: <Game/>,
    },
    {
      path:"/*",
      element: <h1>404 not found</h1>
    },
    {
      path:"/login",
      element: <Login />
    },
    {
      path: "/createset",
      element: <CreateSet user={user}/>
    },
    {
      path: "/",
      element: <Home setSelectedSet={setSelectedSet} cardSet={cardSet}/>
    },
    {
      path: "/addcards/:id",
      element: <AddCards />
    },
    {
      path: "/score/:score",
      element: <Score />
    }
  ]);

  //return whatever the route is on
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;