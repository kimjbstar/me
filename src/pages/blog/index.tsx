import Layout from "@/components/layout"
import supabase from "@/lib/supabaseClient"
import dayjs from "dayjs"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import Link from "next/link"
import { Blog } from "./[id]"

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { data } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false })

  const blogs = data as Blog[]
  return {
    props: {
      blogs
    }
  }
}

const BlogIndexPage = function ({
  blogs
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <p>블로그 페이지 입니다.</p>
      <hr />
      <ul className="p-4">
        {blogs.map(({ id, title, created_at }) => (
          <li key={id}>
            <Link
              href={`/blog/${id}`}
              className="border flex justify-between p-4"
            >
              <div>{title}</div>
              <div>{dayjs(created_at).format("YY년 MM월 DD일")}</div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogIndexPage
