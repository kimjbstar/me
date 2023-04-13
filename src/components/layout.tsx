import React from "react"
import Header from "./header"

interface Props {}

export default function Layout(props: React.PropsWithChildren<Props>) {
  return (
    <>
      <Header></Header>
      {props.children}
    </>
  )
}