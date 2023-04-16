import React from "react"
import Header from "./header"

interface Props {}

export default function Layout(props: React.PropsWithChildren<Props>) {
  return (
    <>
      <Header></Header>
      <div className="lg:p-20 sm:p-5">{props.children}</div>
    </>
  )
}
