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

  const [cardSet, setCardSet] = useState([])
  const [selectedSet, setSelectedSet] = useState()

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((r) => r.json())
      .then((cards) => setCardSet(cards));
  }, []);

  // sinatra? http://localhost:9292/

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
      element: <CreateSet setSelectedSet={setSelectedSet} setCardSet={setCardSet} cardSet={cardSet}/>
    },
    {
      path: "/",
      element: <Home setSelectedSet={setSelectedSet} cardSet={cardSet}/>
    },
    {
      path: "/addcards",
      element: <AddCards selectedSet={selectedSet} />
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