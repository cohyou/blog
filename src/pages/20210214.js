import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="またねれてないな" />
    <h1>2021-02-14</h1>
    <h2>またねれてないな</h2>
    <p>
      昨日、終電でけんさんの家から帰り、またしても記憶ないまま薄い睡眠。
      お昼まで寝てしまった。まあ、しょうがないのでそこからあさめしくって風呂入って、
      tauri調べてブログを書いて。あっという間でしたがなんとかクリアですかね、ノルマは。
      調子が良くなくてもできるのがいいですね。
    </p>
    <p>
      ライブでやる曲を思い出さないとね。
      コンティニューのテンポをせめてしりたい
      だいたい143、というか2019にやってたのか、結構前だな
    </p>
    <Link to="/">目次に戻る</Link>
  </Layout>
)

export default SecondPage
