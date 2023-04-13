import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { okaidia as syntaxStyle } from "react-syntax-highlighter/dist/cjs/styles/prism"
import Mermaid from "@/components/mermaid"

interface Props {
  content: string | null
}

export default function BlogMarkDown(props: React.PropsWithChildren<Props>) {
  if (props.content === null) return <></>

  return (
    <ReactMarkdown
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
              className="code-style"
              showInlineLineNumbers={true}
              language={lang}
              PreTag="div"
              {...props}
              style={syntaxStyle}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          )
        }
      }}
    >
      {props.content}
    </ReactMarkdown>
  )
}
