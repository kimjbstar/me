import React, { FC } from "react"

interface Props {}

export default function Header() {
  return (
    <nav className="text-s flex justify-center border-b-2 border-gray-100">
      <div className="flex justify-around max-w-[1200px] w-full">
        <div className="p-6">
          <a href="/about">About</a>
        </div>
        <div className="p-6">
          <a href="/post">Post</a>
        </div>
        <div className="p-6">
          <a href="/other">Other</a>
        </div>
      </div>
    </nav>
  )
}
