/*import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
//import Article from "../Article/Article";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  //const [posts, setPosts] = useState([]);
  //const [currentId, setCurrentId] = useState(null)
  //const [postId, setPostId] = useState('')

  /////// Load and get articles on first rendering /////
  useEffect(() => {
    axios.get("http://localhost:5000").then((response) => {
      console.log(response);
      {
        props.setPosts(response.data);
      }
    });
  }, [1]);

  /// GET ALL ARTICLES gets called from create
  const getArticles = () => {
    //e.preventDefault();
    axios.get("http://localhost:5000").then((response) => {
      //console.log(response);
      {
        props.setPosts(response.data);
      }
      //console.log(response.data);
    });
  };

  ///////CREATE article//////////
  const postArticle = (e) => {
    e.preventDefault();
    console.log(title, description, body, author);
    axios
      .post("http://localhost:5000/", {
        title: title,
        description: description,
        body: body,
        author: author,
      })
      .then((response) => {
        console.log(response.data);
        setTitle("");
        setDescription("");
        setBody("");
        setAuthor("");
        getArticles();
      });
  };


  return (
    <>
      <form>
        <div className="form-group ">
          <h1 className="text-center">Create a new article</h1>
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            type="title"
            className="form-control"
            id="title"
          />
          <label htmlFor="comment">Description</label>
          <input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="form-control"
            id="description"
            rows="3"
          ></input>
          <label htmlFor="name">Body</label>
          <input
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            className="form-control"
            id="body"
            rows="3"
          ></input>
          <label htmlFor="author">Author</label>
          <input
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            className="form-control"
            id="author"
            rows="3"
          ></input>
          <button
            onClick={postArticle}
            type="submit"
            value="submit"
            className="btn btn-success"
          >
            {" "}
            Create a new article
          </button>
        </div>
      </form>
    </>
  );
};

export default Form; */
