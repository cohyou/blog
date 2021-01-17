import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>みなさんこんにちは</h1>
    <p>岡崎コウユウの音楽サイトです。</p>
    <p>ゆっくりしていってね！</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">2021-01-16 まず、最初のごあいさつ</Link> <br />
    <Link to="/20210117/">2021-01-17 音楽環境を整える</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
