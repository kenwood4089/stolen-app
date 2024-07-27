import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import About from "./components/About"
import Home from "./components/Home"
import NavigationBar from "./components/NavigationBar"
import Contacts from "./components/Contacts"
import PostList from "./components/PostList"
import Posts from "./components/Posts"

function App() {
  return (
    <div className="App">
      Nanakaw Ba App
      <Router>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="posts" element={<Posts />} />
          <Route path="postlist" element={<PostList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
