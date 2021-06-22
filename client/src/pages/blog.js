import { useState, useEffect} from "react";
import {useLocation} from 'react-router';

import Header from "../components/BlogFolder/BlogPage/Header";
import Posts from "../components/BlogFolder/BlogPage/Posts";
import { BlogContainer } from "../components/BlogFolder/BlogPage/BlogElements";
import SideBar from "../components/BlogFolder/BlogPage/Sidebar";

import axios from "axios";

const Blog = () => {

  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async()=> {
      const res = await axios.get("/posts"+search)
      setPosts(res.data)
    }
    fetchPosts();
  }, [search])
    return (
        <>
          <Header />
          <BlogContainer>
              <Posts posts = {posts}/>
              <SideBar>SideBar</SideBar>
          </BlogContainer>
        </>
    );
};

export default Blog;
