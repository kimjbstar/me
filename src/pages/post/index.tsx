import Layout from "@/components/layout"
import Link from "next/link"

const Post = () => (
  <Layout>
    <p>블로그 페이지 입니다.</p>
    <hr />
    <ul className="p-4">
      <li>
        <Link href="/post/1" className="border flex justify-between p-4">
          <div>제목</div>
          <div>2022-11-11</div>
        </Link>
      </li>
      <li>
        <Link href="/post/1" className="border flex justify-between p-4">
          <div>제목</div>
          <div>2022-11-11</div>
        </Link>
      </li>
    </ul>
  </Layout>
)

export default Post
