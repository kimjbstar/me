import Layout from "@/components/layout"
import iconGithub from "public/icon-github.png"
import iconMail from "public/icon-mail.png"

const About = () => (
  <Layout>
    <div className="flex justify-center items-center flex-col mt-32">
      <div className="m-2 text-2xl">since 2015.</div>
      <div className="flex items-center">
        <div className="m-2 text-5xl mr-5">🇰🇷</div>
        <a href="mailto:kimjbstar@gmail.com" className="mr-5">
          <img className="w-10 h-10" src={iconMail.src} alt="mailto"></img>
        </a>
        <a href="https://github.com/kimjbstar" target="_blank" rel="noreferrer">
          <img className="w-10 h-10" src={iconGithub.src} alt="github"></img>
        </a>
      </div>
    </div>
  </Layout>
)

export default About
