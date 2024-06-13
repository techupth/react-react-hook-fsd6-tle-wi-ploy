import { useNavigate } from "react-router-dom";
import useBlogPosts from "../components/UseBlogPost";
import useBlogPostIds from "../components/๊ีuseBlogPostId";

function ViewPostPage() {
  const navigate = useNavigate();
  const { blogPosts, isLoading, isError } = useBlogPosts();
  const { blogPostIds } = useBlogPostIds();
  
  
  return (
    <div>
      <h1>View Post Page</h1>
      <div className="view-post-container">
      
            <h2>{blogPostIds.title}</h2>
            <p>{blogPostIds.content}</p>
       
      </div>

      <hr />
      <div className="show-all-posts-container">
        <h2>All Posts</h2>
        {blogPosts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <div className="post-actions">
                <button
                  className="view-button"
                  onClick={() => navigate(`/post/view/${post.id}`)}
                >
                  View post
                </button>
              </div>
            </div>
          );
        })}
        {isError ? <h1>Request failed</h1> : null}
        {isLoading ? <h1>Loading ....</h1> : null}
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewPostPage;
