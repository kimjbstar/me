/* eslint-disable react/no-children-prop */
import Layout from "@/components/layout"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import supabase from "@/lib/supabaseClient"
import BlogMarkDown from "@/components/blog-markdown"

export type Blog = {
  id: number
  subtitle?: string
  title: string
  content: string
  created_at: string
}

// Generates `/blogs/1` and `/blogs/2`
export async function getStaticPaths() {
  const { data } = await supabase.from("blogs").select("*")
  const blogs = data as Blog[]
  const paths = blogs.map((blog) => ({ params: { id: blog.id } }))

  return {
    paths,
    fallback: false // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id
  const { data } = await supabase.from("blogs").select("*").eq("id", id)
  if (!data || data.length < 1) {
    throw new Error("no!")
  }
  const blog = data[0] as Blog

  return {
    props: {
      blog
    }
  }
}

const PostDetailPage = ({
  blog: { title, subtitle, created_at, content }
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout>
    <section className="flex flex-col items-center mt-20">
      <div className="max-w-7xl flex flex-col">
        <div className="text-6xl mb-10 font-bold text-gray-800">{title}</div>
        <div className="text-4xl mb-10 text-gray-700">{subtitle}</div>
        <div className="self-end">{created_at}</div>
        <BlogMarkDown content={content}></BlogMarkDown>
      </div>
    </section>
  </Layout>
)

export default PostDetailPage
