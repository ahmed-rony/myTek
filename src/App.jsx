import { Routes, Route } from "react-router-dom"
import Root from "./containers/root/root.jsx"
import Signin from "./containers/auth/signin.jsx"
import Board1 from "./containers/dashboard/board1.jsx"
import Board2 from "./containers/dashboard/board2.jsx"
import Board3 from "./containers/dashboard/board3.jsx"

function App() {

  return (
    <>
      <Routes>
       <Route exact path="/" element={<Root />} />
       <Route exact path="/signin" element={<Signin />} />

       <Route exact path="/dashboard/1" element={<Board1 />} />
       <Route exact path="/dashboard/2" element={<Board2 />} />
       <Route exact path="/dashboard/3" element={<Board3 />} />
      </Routes>
    </>
  )
}

export default App
