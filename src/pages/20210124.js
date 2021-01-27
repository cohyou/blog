import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="取り返し" />
    <h1>2021-01-24</h1>
    <h2>取り返し</h2>
    <p>
      昨日分もできたらいいね。よく寝たし、肉体労働はあんまり関係なくて睡眠不足の方があったかもなあ。
    </p>
    <p>
      D D F#m F#m Bm Bm D D
      G A D Bm F#7 Bm てけてけ
      やっぱりソロの部分がまだ覚えてなくて慣れてないな。というわけで１６：００なのでいったん風呂。
      昨日の分はここまで。つづきはあと。
    </p>
    <p>
      画像テスト<img src="../images/IMG_1505.JPG" alt="tremolo" />だめだ。
      正しい方法は<img src="/images/hero.jpg" alt="" />
    </p>
    <p>
    </p>
    <Link to="/">目次に戻る</Link>
  </Layout>
)

export default SecondPage
