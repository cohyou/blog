import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="祝日です" />
    <h1>2021-02-11</h1>
    <h2>祝日です</h2>
    <p>
      今日はなんだっけ、祝日です。建国記念の日。
      昨日の仕事がちょっとさみしい感じになったので、不貞寝しちゃって昼まで寝てました。
      不貞寝すると首が痛くて、それで体調も悪くなっちゃいますね。

      というか今確認したら、スタジオ、今日じゃなくて明日だった。
      ちゃんと確認しなきゃね。まあ、どちらにせよギターソロ、にいまるにいいちの方が全然できていないので、
      それを考えないとね。

      でもまあ、風呂というかシャワー浴びるか。

      そのあと、ギターソロを無事に考えついて、がんばって練習してました。一時間ぐらい？ちゃんとやればできるもんです。
    </p>
    <p>
      D D F#m F#m Bm Bm D D
      G A D Bm F#7 Bm てけてけ
    </p>
    <Link to="/">目次に戻る</Link>
  </Layout>
)

export default SecondPage
