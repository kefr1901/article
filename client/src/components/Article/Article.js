import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const Article = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [posts, setPosts] = useState([]);
  
  
    /////// Load and get articles on first rendering /////
    useEffect(() => {
      axios.get("http://localhost:5000").then((response) => {
        console.log(response);
        {
          setPosts(response.data);
        }
      });
    }, [1]);
  
    /// GET ALL ARTICLES gets called from create
    const getArticles = () => {
      //e.preventDefault();
      axios.get("http://localhost:5000").then((response) => {
        //console.log(response);
        {
          setPosts(response.data);
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
  
    /////UPDATE article/////
    const updateArticle = (id) => {
      axios.patch(
        `http://localhost:5000/${id}`,
        {
          title: title,
          description: description,
          body: body,
          author: author,
        }.then((response) => {
          console.log(response.data);
          getArticles();
        })
      );
    };
  
    ///////DELETE article/////////
    const deleteArticle = (id) => {
      console.log(id);
      axios.delete(`http://localhost:5000/${id}`).then((response) => {
        console.log(response.data);
        getArticles();
      });
    };
  
    return (
      <>
        <form className="">
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
              className="btn btn-success mt-2"
            >
              {" "}
              Create a new article
            </button>
          </div>
        </form>

        <br></br>
        <h3 className="d-flex display-center"> List of Articles</h3>
        <div className="d-flex flex-column-reverse">
          {posts.map((post, i) => (
            <div key={post.title + i}>
              <div className="card mt-3">
                <div className="card-header">{post.title}</div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>{post.description}</p>
                    <footer className="blockquote-footer">
                      By the famous author{" "}
                      <cite title="Source Title">{post.author}</cite>
                    </footer>
                  </blockquote>
                  <button 
                    className="btn btn-warning m-2"
                    onClick={(e) => updateArticle(post._id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => deleteArticle(post._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  

export default Article; 