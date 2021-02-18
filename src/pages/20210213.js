import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="うまく寝れなかった" />
    <h1>2021-02-13</h1>
    <h2>うまく寝れなかった</h2>
    <p>
      一回朝に起きたんだけど、あさごはん食べたあと、お風呂入って寝てしまった。
      というのも昨日から、ひさしぶりにあかりをつけたまま寝てしまったので。これはよくない。
      とはいえそのあとはちゃんとブログを書いて、洗濯もしたのでOK。
    </p>
    <p>
      さて、昨日のスタジオのことを書いておく？
      というかそれは昨日の場所に書くか。

      というわけで書きました。なんだか今週分が歯抜けになっていたりしたので埋めました。
      練習というか音楽はちゃんとやっていたので問題なし。取り返しましたね。
      これからけんさんの家に行く予定なのでその準備をしないとですね。
      野江内代
    </p>
    <Link to="/">目次に戻る</Link>
  </Layout>
)

export default SecondPage
