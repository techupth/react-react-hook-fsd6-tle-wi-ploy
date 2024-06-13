import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useBlogPostIds = () => {
    const [blogPostIds, setBlogPostIds] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      const getBlogPostIds = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/posts/${id}`);
          setBlogPostIds(response.data.data);
        } catch (error) {
          console.error("Error fetching blog post IDs:", error);
        }
      };
  
      getBlogPostIds();
    }, [id]); // เวลาเปลี่ยนid
  
    return { blogPostIds };
  };
  
  export default useBlogPostIds;