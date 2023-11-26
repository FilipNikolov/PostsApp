import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/post.css";
import { Link } from "react-router-dom";

export default function Posts({message}:any)  {
  
  const [allPosts, setAllPosts] = useState([]);
  const [allUsers, setAllUsers] = useState([]); 
  const [allComments, setAllComments] = useState([]);
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    fetchData();
    console.log(`${message} Posts `);
  }, []);

  const fetchData = async () => {
    try {
      const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setAllPosts(postsResponse.data);

      const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
      setAllUsers(usersResponse.data);

      const commentsResponse = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setAllComments(commentsResponse.data);

      const mergedData = getMergedData(postsResponse.data, usersResponse.data, commentsResponse.data);
      setMergedData(mergedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function getMergedData(posts:any, users:any, comments:any) {                          
    return posts.map((post:any) => {
      const user = users.find((user:any) => user.id === post.userId);
      const postComments = comments.filter((comment:any) => post.id === comment.postId);
    
      return {
        post: post,
        user: user,
        comments: postComments
      }
    })
  };

  const handleChange = (e:any) => {
    const data = getMergedData(allPosts, allUsers, allComments)
    let filterData = data.filter((x:any) => x.user.name.toLowerCase().includes(e.target.value))
    setMergedData(filterData)
  };

 return (
    <div className="container"> 
      <div className="navbar mt-3 d-flex justify-content-center ">
        <input  className="input" type = "search" placeholder="Search People"  onChange = {handleChange}/>
      </div>
      <div>
      {mergedData.map((item:any) => (
        <div className="container col-md-12 ">
           <div className="card mt-5">
              <div className="card-body post-card ">
                <Link to={`/post/${item.post.id}`} target='_blank'>
                  <div key={item.post.id}>
                    <p><strong>Title: </strong>{item.post.title} {item.post.id}</p>
                    <p><strong>Username: </strong>{item.user.name} </p>
                    <p><strong>Body: </strong>{item.post.body}</p>
                  </div>
                  </Link>  
                  <div id="comments">
                    <div>
                      {item.comments.map((cmd:any) => (
                        <div className="container px-10">
                          <div className="card mt-2">
                            <div className="card-body">
                              <p><strong>Email: </strong>{cmd.email}</p>
                              <p><strong>Comment: </strong>{cmd.body}</p>
                            </div>
                          </div>
                        </div>
                        ))  
                        }
                    </div>
                  </div>
                </div>
              </div>  
          </div>
        ))}
      </div>
    </div>
 );
};

