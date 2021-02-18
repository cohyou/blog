import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="休んでる間にえらいことに" />
    <h1>2021-02-10</h1>
    <h2>休んでる間にえらいことに</h2>
    <p>
      というわけで、あえて前日は本当に仕事のSlackも見ないで過ごしたわけですが。
      なんと休んでいる間に、DB障害が起きていたらしくって、気付いたらテストが進まず、
      新しい人がアサインされていました。どういうことだってばよ（ナルト知らない勢

      なんだっけ、しかしまあ、結構遅くはなったものの、ギター練習はしました。
      前日に歌詞を足して、引いている間にギターソロをちゃんと考えたくて、考えました。
      まあ、よかったんですけどね。ある意味では平和でした。
    </p>
    <Link to="/">目次に戻る</Link>
  </Layout>
)

export default SecondPage
