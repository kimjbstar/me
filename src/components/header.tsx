import Link from "next/link"
import React, { FC } from "react"

interface Props {}

export default function Header() {
  return (
    <nav className="text-s flex justify-center border-b-2 border-gray-100">
      <div className="flex justify-around max-w-[1200px] w-full">
        <div className="p-6">
          <Link href="/about">About</Link>
        </div>
        <div className="p-6">
          <Link href="/blog">Blog</Link>
        </div>
        <div className="p-6">
          <Link href="/other">Other</Link>
        </div>
      </div>
    </nav>
  )
}
