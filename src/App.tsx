import React from "react";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails"
import "./css/app.css";


export default function App() {
    return (
     <div id="App">
        <Posts
            message={"Hello from"}/>
    </div>
    );
}
