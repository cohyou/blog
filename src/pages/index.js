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
    <h1>2021年01月</h1>
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
    <Link to="/20210130/">2021-01-30 土 座れました、アゲイン</Link> <br />
    <Link to="/20210131/">2021-01-31 日 平和な休日</Link> <br />
    <br />
    <h1>2021年02月</h1>
    <Link to="/20210201/">2021-02-01 月 月初から大変</Link> <br />
    <Link to="/20210202/">2021-02-02 火 もはや覚えていない</Link> <br />
    <Link to="/20210203/">2021-02-03 水 久々の低血糖</Link> <br />
    <Link to="/20210204/">2021-02-04 木 いそがしすぎる</Link> <br />
    <Link to="/20210205/">2021-02-05 金 大変さを乗り越えた！</Link> <br />
    <Link to="/20210206/">2021-02-06 土 久々の個人練</Link> <br />
    <Link to="/20210207/">2021-02-07 日 今朝も個人練</Link> <br />
    <Link to="/20210208/">2021-02-08 月 スタジオ個人練を経て自宅で気付いたこと</Link> <br />
    <Link to="/20210209/">2021-02-09 火 実は休み</Link> <br />
    <Link to="/20210210/">2021-02-10 水 休んでる間にえらいことに</Link> <br />
    <Link to="/20210211/">2021-02-11 木 祝日です</Link> <br />
    <Link to="/20210212/">2021-02-12 金 祝日後のスタジオでした</Link> <br />
    <Link to="/20210213/">2021-02-13 土 うまく寝れなかった</Link> <br />
    <Link to="/20210214/">2021-02-14 日 またねれてないな</Link> <br />
    <Link to="/20210215/">2021-02-15 月 抱え込みすぎ一ヶ月</Link> <br />
    <Link to="/20210216/">2021-02-16 火 初音ミクDay</Link> <br />
    <Link to="/20210217/">2021-02-17 水 雪降ってた、ちょいとくぎれておつかれ</Link> <br />
    <Link to="/20210218/">2021-02-18 木 心機一転！</Link> <br />

    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
