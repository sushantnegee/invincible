import React, { useEffect, useState } from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import axios from "axios"
import { useLocation } from "react-router-dom"

export const Home = () => {
  const [posts, setPosts] = useState([])

  const { search } = useLocation()

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPost()
  }, [search])
  return (
    <>
      <Category />
      <Card posts={posts} />
    </>
  )
}
