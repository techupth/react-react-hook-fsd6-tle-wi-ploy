import axios from "axios";
import { useState, useEffect } from "react";

const useBlogPosts = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    
    
    useEffect(() => {
        const getBlogPosts = async () => {
            try {
                setIsLoading(true);
                setIsError(false);
                const response = await axios.get("http://localhost:4000/posts");
                setBlogPosts(response.data.data);
                //console.log(response.data.data)
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getBlogPosts();
    }, []);

        return { blogPosts, isLoading, isError };
    };

    export default useBlogPosts;
