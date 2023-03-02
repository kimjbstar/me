/* eslint-disable react/no-children-prop */
import Layout from "@/components/layout"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { okaidia as syntaxStyle } from "react-syntax-highlighter/dist/cjs/styles/prism"
import Mermaid from "@/components/mermaid"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import supabase from "@/lib/supabaseClient"

export type Post = {
  id: number
  subtitle?: string
  title: string
  content: string
  created_at: string
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const { data } = await supabase.from("blogs").select("*")
  const posts = data as Post[]
  const paths = posts.map((post) => ({ params: { id: post.id } }))

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
  const post = data[0] as Post

  return {
    props: {
      post
    }
  }
}

const PostDetailPage = ({
  post
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout>
    <section className="flex flex-col items-center mt-20">
      <div className="max-w-7xl flex flex-col">
        <div className="text-8xl mb-10 font-bold text-gray-800">
          {post?.title}
        </div>
        {post ? (
          <div className="text-4xl mb-10 text-gray-700">{post.title}</div>
        ) : (
          <></>
        )}
        <div className="self-end">{post?.created_at}</div>
        {post?.content ? (
          <div className="block w-full font-thin text-2xl leading-10 text-gray-800 mt-20">
            <ReactMarkdown
              children={post?.content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              className="markdown-body"
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "")

                  if (inline || !match) {
                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  }
                  const lang = match[1]
                  if (lang === "mermaid") {
                    return <Mermaid chart={children}></Mermaid>
                  }
                  return (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      className="code-style"
                      showInlineLineNumbers={true}
                      language={lang}
                      PreTag="div"
                      {...props}
                      style={syntaxStyle}
                    />
                  )
                }
              }}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  </Layout>
)

export default PostDetailPage
