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
    <Link to="/20210116/">2021-01-16 土 まず、最初のごあいさつ</Link> <br />
    <Link to="/20210117/">2021-01-17 日 音楽環境を整える</Link> <br />
    <Link to="/20210118/">2021-01-18 月 スタジオ、GEN 20:00~23:00</Link> <br />
    <Link to="/20210119/">2021-01-19 火 通常更新、初日</Link> <br />
    <Link to="/20210120/">2021-01-20 水 もうやばい</Link> <br />
    <Link to="/20210121/">2021-01-21 木 やばいつづき</Link> <br />
    <Link to="/20210122/">2021-01-22 金 やばいつづきつづき</Link> <br />
    <Link to="/20210123/">2021-01-23 土 肉体労働</Link> <br />
    <Link to="/20210124/">2021-01-24 日 取り返し</Link> <br />
    <Link to="/20210125/">2021-01-25 月 これからスタジオ</Link> <br />
    <Link to="/20210126/">2021-01-26 火 初音ミク</Link> <br />
    <Link to="/20210126/">2021-01-27 水 座れました</Link> <br />
    <Link to="/20210128/">2021-01-28 木 仕事のプレッシャで初音ミク</Link> <br />
    <Link to="/20210129/">2021-01-29 金 打ち合わせ</Link> <br />
    <Link to="/20210130/">2021-01-30 土 座れました、アゲイン[</Link> <br />


    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
