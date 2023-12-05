import React, { useEffect, useState } from "react";
import axios from "axios";
import "./posts.modules.scss";
import { Link } from "react-router-dom";
import { URL } from "../../config/index";
import { POSTS_ROUTE, USER_ROUTE, COMMENTS_ROUTE } from "../../constant";
import {
  Post, User, SingleComment, FullPost,
} from "./types";

function Posts() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [allComments, setAllComments] = useState<SingleComment[]>([]);
  const [mergedData, setMergedData] = useState<FullPost[]>([]);

  const fetchData = async () => {
    try {
      const postsResponse = await axios.get(`${URL}/${POSTS_ROUTE}`);
      setAllPosts(postsResponse.data);

      const usersResponse = await axios.get(`${URL}/${USER_ROUTE}`);
      setAllUsers(usersResponse.data);

      const commentsResponse = await axios.get(`${URL}/${COMMENTS_ROUTE}`);
      setAllComments(commentsResponse.data);

      const mergedData = getMergedData(postsResponse.data, usersResponse.data, commentsResponse.data);
      setMergedData(mergedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // console.log(`${message} Posts `);
  }, []);

  function getMergedData(posts:Post[], users:User[], comments:SingleComment[]):FullPost[] {
    const all:FullPost[] = posts.map((post) => {
      const postUser = users.find((user) => user.id === post.userId);
      const postComments = comments.filter((comment) => post.id === comment.postId);
      const fullPost: FullPost = {
        post,
        user: postUser,
        comments: postComments,
      };
      return fullPost;
    });
    return all;
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const data = getMergedData(allPosts, allUsers, allComments);
    const filterData = data.filter((item) => item.user?.name.toLowerCase().includes(e.currentTarget.value));
    setMergedData(filterData);
  };

  return (
    <div className="container">
      <div className="navbar mt-3 d-flex justify-content-center">
        <input className="input" type="search" placeholder="Search People" onChange={handleChange} />
      </div>
      <object>
        {mergedData.map((item) => (
          <div className="container col-md-12">
            <main className="card mt-5">
              <div className="card-body post-card ">
                <Link to={`/post/${item.post.id}`}>
                  <section key={item.post.id}>
                    <h3>
                      {item.post.title}
                      {" "}
                      {item.post.id}
                    </h3>
                    <hr />
                    <span>
                      <strong>User: </strong>
                      {item.user?.name}
                    </span>
                    <br />
                    <span>
                      <strong>Body: </strong>
                      {item.post.body}
                    </span>
                  </section>
                </Link>
                <div id="comments">
                  <main>
                    {item.comments.map((comment:any) => (
                      <section className="container px-10">
                        <main className="card mt-2">
                          <div className="card-body px-2">
                            <span>
                              <strong>Email: </strong>
                              {comment.email}
                            </span>
                            <p>
                              <strong>Comment: </strong>
                              {comment.body}
                            </p>
                          </div>
                        </main>
                      </section>
                    ))}
                  </main>
                </div>
              </div>
            </main>
          </div>
        ))}
      </object>
    </div>
  );
}
Posts.displayName = "Post";
export default Posts;
