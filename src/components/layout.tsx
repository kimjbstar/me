import React from "react"
import Header from "./header"

interface Props {}

export default function Layout(props: React.PropsWithChildren<Props>) {
  return (
    <>
      <Header></Header>
      <div className="md:p-16 p-4">{props.children}</div>
    </>
  )
}
