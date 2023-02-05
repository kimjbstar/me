import Layout from "@/components/layout"

const About = () => (
  <Layout>
    <div className="flex justify-center items-center flex-col mt-32">
      <div className="m-2 text-2xl">🇰🇷</div>
      <div className="m-2 text-2xl">since 2015.</div>
      <div className="m-2 text-2xl">
        <a className="p-2" href="mailto:kimjbstar@gmail.com">
          [mail]
        </a>
        <a
          className="p-2"
          href="https://github.com/kimjbstar"
          target="_blank"
          rel="noreferrer"
        >
          [github]
        </a>
      </div>
    </div>
  </Layout>
)

export default About
