import React, { useState, useEffect } from "react";
import "./PostDetails.modules.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../../config/index";
import { POSTS_ROUTE, USER_ROUTE, COMMENTS_ROUTE } from "../../constant";
import { Post, User, Comment } from "./types";

function PostsDetails() {
  const [post, setPost] = useState<Post>({
    id: 0,
    title: "",
    body: "",
  });
  const [comments, setComments] = useState<Comment[]>([]);
  const [user, setUser] = useState<User>({ name: "" });

  const params = useParams();

  const fetchData = async () => {
    try {
      const postRes = await axios.get(`${URL}/${POSTS_ROUTE}/${params.id}`);
      setPost(postRes.data);

      const userRes = await axios.get(`${URL}/${USER_ROUTE}/${postRes.data.userId}`);
      setUser(userRes.data);

      const commentsResponse = await axios.get(`${URL}/${POSTS_ROUTE}/${params.id}/${COMMENTS_ROUTE}`);
      setComments(commentsResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
    console.log("Rachno Hello from post details");
  }, []);

  return (
    <div className="container col-md12">
      <main className="card mt-5 ">
        <div className="card-body post-card">
          <h3>
            {post.title}

            {post.id}
          </h3>
          <hr />
          <span>
            <strong>User: </strong>
            {user.name}
          </span>
          <br />
          <span>
            <strong>Body: </strong>
            {post.body}
          </span>

          <div className="comments">
            <main>
              {comments.map((comment:any) => (

                <section className="container px-10">
                  <main className="card mt-2">
                    <div className="card-body">
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
  );
}
PostsDetails.displayName = "PostDetails";

export default React.memo(PostsDetails); // hoc
