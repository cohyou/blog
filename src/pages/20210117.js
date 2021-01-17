import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="音楽環境を整える" />
    <h1>2021-01-17</h1>
    <h2>音楽環境を整える</h2>
    <p>
      まずは物理的な環境を整える必要があります。
      現在、これを入力しているMacとは別に音楽専用に使うつもりのiMacがあります。
      そのためのテーブルも別途買っています。
      結構高かったのに、単なる物置になってしまっています。
      まあ、その場所を作るというのが最初の目的だったので、それはクリアしているわけですが。
      とうとう次の段階に入るわけですね。使いやすい状態に持っていきたい。
      ということで環境を眺めています。。。
    </p>
    <p>
      現時点でのテーブルの上の写真を撮ってみました。HEICって何の拡張子？
      <img src="../images/IMG_1503.HEIC" alt="現時点での散らかったテーブル" />
      画像表示されないな。でも拡張子の問題じゃなさそう。
      componentsの中を見たら、なんか画像表示でGraphQL書いてあった…
      これはGatsbyの仕様だね、また調べましょう。
    </p>
    <p>
    </p>
    <p>
    </p>
    <Link to="/">目次に戻る</Link>
  </Layout>
)

export default SecondPage
