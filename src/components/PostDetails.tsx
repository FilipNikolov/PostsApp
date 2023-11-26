import React from "react";
import { useState, useEffect } from "react";
import "../css/post.css";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function PostsDetails({}) {

    const [post, setPost] = useState<any>({});
    const [comments, setComments] = useState<any>([]);
    const [user, setUser] = useState<any>({});
    
    useEffect(() => {
        fetchData();
        console.log("Rachno Hello from post details")
    }, []);
    
    const params = useParams();

    const fetchData = async () =>{
        try{  
            const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
            setPost(postRes.data);
            
            const userRes= await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`)
            setUser(userRes.data);
            
            const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`); 
            setComments(commentsResponse.data);
        }   
        catch (error) {
            console.error('Error fetching data:', error);
          }
    };

    return (
       <div className="container col-md12">
          <a href="/posts" className="card-body">←</a>
            <div className="card mt-5 ">
                <div className="card-body post-card" >
                    <p><strong>Title: </strong>{post.title} {post.id}</p>
                    <p><strong>Username: </strong>{user.name} </p>
                    <p><strong>Body: </strong>{post.body}</p>
                
                <div className="comments">
                 <div>
                  {comments.map((cmd:any) => (
              
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
        </div >
    )
}
