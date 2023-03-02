import Layout from "@/components/layout"
import supabase from "@/lib/supabaseClient"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import Link from "next/link"
import { Post } from "./[id]"

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { data } = await supabase.from("blogs").select("*")
  const posts = data as Post[]
  return {
    props: {
      posts
    }
  }
}

const PostIndexPage = function ({
  posts
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
              <div>{post.created_at}</div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default PostIndexPage
