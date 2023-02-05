import Layout from "@/components/layout"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import Link from "next/link"

export interface Post {
  id: number
  title: string
  subtitle?: string
  content: string
  createdAt: string
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  // TODO : to api directory
  // const res = await fetch('http://.../posts')
  // const posts = await res.json()
  const posts: Post[] = [
    {
      id: 1,
      title: "aa",
      subtitle: "afafa",
      content: "bb",
      createdAt: "2022-11-22",
    },
    {
      id: 2,
      title: "cc",
      content: "dd",
      createdAt: "2022-11-23",
    },
  ]
  return {
    props: {
      posts,
    },
  }
}

const PostIndexPage = function ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <p>블로그 페이지 입니다.</p>
      <hr />
      <ul className="p-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/post/${post.id}`}
              className="border flex justify-between p-4"
            >
              <div>{post.title}</div>
              <div>{post.createdAt}</div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default PostIndexPage
