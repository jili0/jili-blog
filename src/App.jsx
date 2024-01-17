import "./stylesheets/app.css";
import {useState, useEffect} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Post from "./components/Post";
import About from "./components/About";


const App = () => {
  const [postTitle, setPostTitle] = useState("")
  const [postBody, setPostBody] = useState("")
  const [posts, setPosts] = useState([{postTitle: "defaultTitel1", postBody: "defaultBody1"},{postTitle: "defaultTitel2", postBody: "defaultBody2"},{postTitle: "defaultTitel3", postBody: "defaultBody3"}])
  const [search, setSearch] = useState("")

  const handleSubmit = () => {
    setPosts(prev => [...prev, {postTitle: postTitle, postBody: postBody}])
    console.log(posts)
  }

  return (
    <BrowserRouter>
      <Header />
      <Nav search={search} setSearch={setSearch}/>
      <main>
        <Routes>
          <Route path="/" element={<Home posts={posts}/>} />
          <Route path="/post" element={<Post postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} handleSubmit={handleSubmit}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
