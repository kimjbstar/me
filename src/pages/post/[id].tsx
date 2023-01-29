import Layout from "@/components/layout"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { okaidia as syntaxStyle } from "react-syntax-highlighter/dist/cjs/styles/prism"
import Mermaid from "@/components/mermaid"

const title = `Elastic stack을 통한 주문 데이터 분석 및 로그 분석`

const subtitle = `There is no one who loves pain itself, who seeks after it and wants to
have it, simply because it is pain...`

const content = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists

- dd
- ff

Sed ultrices purus non hendrerit posuere. Phasellus quis dui interdum, 

varius ante id, fringilla arcu. Donec a enim efficitur elit mollis volutpat semper non diam. Vivamus libero mi,

sollicitudin id eros quis, gravida ornare eros. Curabitur eleifend augue vitae tortor hendrerit lacinia.

Sed tempor sapien consectetur elit euismod blandit. Sed dignissim, enim sit amet mattis gravida, lorem dolor convallis ipsum, id interdum nulla turpis at urna. Suspendisse viverra eu nibh in pretium. Aliquam eget libero vel lectus iaculis placerat. Morbi hendrerit turpis a facilisis laoreet. Fusce porttitor eros ac urna dignissim, at molestie sapien rhoncus. Proin tincidunt sollicitudin justo non eleifend.

국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.

제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다.

모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다. 재의의 요구가 있을 때에는 국회는 재의에 붙이고, 재적의원과반수의 출석과 출석의원 3분의 2 이상의 찬성으로 전과 같은 의결을 하면 그 법률안은 법률로서 확정된다.

대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다. 대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의 필요에 응하거나 공공의 안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.

대통령은 국민의 보통·평등·직접·비밀선거에 의하여 선출한다. 국가안전보장회의는 대통령이 주재한다. 국민의 자유와 권리는 헌법에 열거되지 아니한 이유로 경시되지 아니한다.

# Hello, *world*!

Just a link: https://reactjs.com.

a
b
c

### 가나다 **aa**

- ㄹㄹ
- ㅇㅇ
- ㅇㅇ

---

# A demo of \`react-markdown\`

\`react-markdown\` is a markdown component for React.

👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview

* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using \`dangerouslySetInnerHTML\`
* Lets you define your own components (to render \`MyHeading\` instead of \`h1\`)
* Has a lot of plugins

\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import MyFancyRule from './components/my-fancy-rule.js'

ReactDOM.render(
  <ReactMarkdown
    components={{
      // Use h2s instead of h1s
      h1: 'h2',
      // Use a component instead of hrs
      hr: ({node, ...props}) => <MyFancyRule {...props} />
    }}
  >
    # Your markdown here
  </ReactMarkdown>,
  document.querySelector('#content')
)
\`\`\`

\`\`\`mermaid
graph LR
    Start --> Stop
\`\`\`

![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

`

const Post = () => (
  <Layout>
    <section className="flex flex-col items-center mt-20">
      <div className="max-w-7xl flex flex-col">
        <div className="text-8xl mb-10 font-bold text-gray-800">{title}</div>
        {subtitle ? (
          <div className="text-4xl mb-10 text-gray-700">{subtitle}</div>
        ) : (
          <></>
        )}
        <div className="self-end">2022년 11월 11일</div>
        <div className="block w-full font-thin text-2xl leading-10 text-gray-800 mt-20">
          <ReactMarkdown
            children={content}
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
              },
            }}
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default Post
