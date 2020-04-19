/* eslint-disable no-script-url, jsx-a11y/anchor-is-valid */
import React from "react";

import "./About.css"

const makeOurGoalsEn = () => {
  return (
    <div className="our-goal">
      <h3>Our Goal</h3>

      <p>
        Because of the pandemic of Coronavirus disease 2019 (COVID-19),
        people all over the world have had tough days. In this situation,
        a lot of information is spread and complicated. We heard from
        public people that it is difficult to grasp really important
        information, and also heard from foreign residents in Japan that
        they are having anxiety because they lack multilingual
        information.
      </p>

      <p>
        Given this situation, we decided to launch this project in order
        to:
      </p>

      <ul>
        <li>Gather and share all the available information about
          COVID-19 hotlines in Japan in both Japanese and English
        </li>
        <li>Share reliable information related to COVID-19 with the
          general public</li>
      </ul>

      <p>
        We sincerely hope that we can contribute to everybody in Japan.
      </p>
    </div>
  )
}

const makeOurGoalsJa = () => {
  return (
    <div className="our-goal">
      <h3>Our Goal</h3>

      <p>
        新型コロナウイルス感染症 (COVID-19) の拡大に伴い、世界各地の人々が、
        不安な日々を送る状況に陥っています。
        このような状況の中多くの情報が錯綜しており、
        一般の方々から本当に重要な情報が把握しにくいといった声や、
        外国人の方々から多言語の情報が不足しており不安と共に
        過ごしているという声を聞きました。
      </p>

      <p>
        このような状況を鑑みて、 少しでも貢献できることがないか議論した結果、
        以下のプロジェクトを立ち上げることにしました。
      </p>

      <ul>
        <li>一般の方々向けに、COVID-19関連の信頼できる情報を集約し、
          日本語と英語の２言語で共有すること。
        </li>
        <li>窓口となっている全国全ての帰国者・接触者相談センターを調べ、
          地図に情報を落とし込むこと。
        </li>
      </ul>

      <p>
        もしも、近くに、いざとなった時の行動がわからなくて困っている方、
        情報が得られず困っている外国人の方がいたら、
        ぜひこちらのウェブサイトを教えて頂けたら嬉しいです。
      </p>

      <p>
        このような私たちの活動が、 少しでも日本にいる全ての方へ
        社会貢献できることを切に願っております。
      </p>
    </div>
  )
}

const makeAboutUsEn = () => {
  // noinspection JSValidateTypes
  return (
    <div className="about-us">
      <h3>About Us</h3>
      <div className="chihiro-tsuchiya">
        <h4>Chihiro Tsuchiya</h4>
        <ul>
          <li>Affiliation: PhD Candidate of Graduate School of Asian
            African Area Studies, Kyoto University</li>
          <li>Qualification: Registered Nurse, Public Health Nurse, and
            Master of Health Science</li>
          <li>Specialty: Global Health, Area Study in Oceania</li>
          <li>HP: <a href="https://researchmap.jp/peacechyhi?lang=en"
                     target="_blank" rel="noopener noreferrer">
                    researchmap
                  </a>
          </li>
          <li>Contact: <a href="javascript:location='mailto:\u0063\u0068\u0069\u0068\u0069\u0072\u006f\u002e\u0074\u0073\u0075\u0063\u0068\u0069\u0079\u0061\u0032\u0032\u0037\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">Send email</a></li>
        </ul>
      </div>

      <div className="eric-nichols">
        <h4>Eric Nichols</h4>
        <ul>
          <li>Affiliation: Dr.Eng. of Graduate School of Information
            Science, Nara Institute of Science and Technology</li>
          <li>Specialty: Artificial intelligence, natural language
            processing, machine learning</li>
          <li>Homepage: <a href="https://scholar.google.co.jp/citations?user=I3_MfAMAAAAJ&hl=en"
                           target="_blank" rel="noopener noreferrer">
                          Google Scholar
                        </a>
          </li>
          <li>Contact: <a href="javascript:location='mailto:\u0075\u006e\u0064\u0065\u0072\u0073\u0070\u0065\u0063\u0069\u0066\u0069\u0065\u0064\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">Send email</a></li>
        </ul>
      </div>
    </div>
  )
}

const makeAboutUsJa = () => {
  // noinspection JSValidateTypes
  return (
    <div className="about-us">
      <h3>About Us</h3>
      <div className="chihiro-tsuchiya">
        <h4>土谷 ちひろ</h4>
        <ul>
          <li>在籍: 京都大学 アジアアフリカ研究研究科 博士課程</li>
          <li>資格: 看護師, 保健師, 保健学修士</li>
          <li>専門分野: 国際保健, オセアニア地域研究</li>
          <li>ホームページ: <a href="https://researchmap.jp/peacechyhi?lang=en"
                     target="_blank" rel="noopener noreferrer">
                    researchmap
                  </a>
          </li>
          <li>コンタクト: <a href="javascript:location='mailto:\u0063\u0068\u0069\u0068\u0069\u0072\u006f\u002e\u0074\u0073\u0075\u0063\u0068\u0069\u0079\u0061\u0032\u0032\u0037\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">メールを送る</a></li>
        </ul>
      </div>

      <div className="eric-nichols">
        <h4>エリック・ニコルズ</h4>
        <ul>
          <li>学歴: 奈良先端科学大学院大学 情報科学研究科 博士(工)</li>
          <li>専門分野: 人工知能, 自然言語処理, 機械学習</li>
          <li>ホームページ: <a href="https://scholar.google.co.jp/citations?user=I3_MfAMAAAAJ&hl=en"
                           target="_blank" rel="noopener noreferrer">
                          Google Scholar
                        </a>
          </li>
          <li>ホームページ: <a href="javascript:location='mailto:\u0075\u006e\u0064\u0065\u0072\u0073\u0070\u0065\u0063\u0069\u0066\u0069\u0065\u0064\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">メールを送る</a></li>
        </ul>
      </div>
    </div>
  )
}

const makeDisclaimerEn = () => {
  return (
    <div className="disclaimer">
      <h3>Disclaimer</h3>
        <h4>Accuracy of information on this site</h4>
        <ul>
          <li>
            We try to post information that is as accurate as possible
            in the content and information on this site. However,
            information may become outdated.
          </li>
          <li>
            We don’t guarantee accuracy, nor legality or safety.
          </li>
        </ul>

        <h4>Liability</h4>
        <ul>
          <li>
            We are not responsible for any damages caused by the contents
            posted on this site.
          </li>
          <li>
            In addition, if you move from this site to another site by links
            we posted, we will not take any responsibility for the
            information and services on those sites.
          </li>
          <li>
            You use the information on this site at your own risk.
          </li>
        </ul>

      <h4>Reproduction prohibited</h4>
        <ul>
        <li>
          It is prohibited to reprint the information of copyrighted works
          such as texts existing on this site for commercial purposes
          without permission.
        </li>
        <li>
            Please contact us with the URL if you link to this site.
        </li>
      </ul>
    </div>
  )
}

const makeDisclaimerJa = () => {
  return (
    <div className="disclaimer">
      <h3>免責事項</h3>
        <h4>当サイトの情報の正確性について</h4>
        <ul>
          <li>
            当サイトのコンテンツや情報において, 可能な限り正確な情報を掲載するよう努めて
            いますが 誤情報が入り込んだり, 情報が古くなったりすることもあります。
          </li>
          <li>
            必ずしも正確性を保証するものではありません. また合法性や安全性なども保証
            しません。
          </li>
        </ul>

        <h4>損害等の責任について</h4>
        <ul>
          <li>
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので,
            ご了承ください。
          </li>
          <li>
            また当サイトからリンクやバナーなどによって他のサイトに移動された場合,
            移動先サイトで提供される情報, サービス等について一切の責任も負いません。
          </li>
          <li>
            当サイトを利用する場合は, 自己責任で行う必要があります。
          </li>
        </ul>

      <h4>無断転載の禁止について</h4>
        <ul>
        <li>
          当サイトに存在する, 文章や画像, 動画等の著作物の情報を商用目的で無断転載する
          ことは禁止します。
        </li>
        <li>
          当サイトはリンクフリーですが、リンクを行った場合は、問い合わせ先までリンク
          元のURLをご連絡ください。
        </li>
      </ul>
    </div>
  )
}

const makeAboutEn = () => {
  return (
    <div className="about">
      {makeOurGoalsEn()}
      {makeAboutUsEn()}
      {makeDisclaimerEn()}
    </div>
  )
}

const makeAboutJa = () => {
  return (
    <div className="about">
      {makeOurGoalsJa()}
      {makeAboutUsJa()}
      {makeDisclaimerJa()}
    </div>
  )
}

const makeAbout = (lang: string) =>
  lang === 'en' ? makeAboutEn() : makeAboutJa()

const About = (props: {lang: string}): JSX.Element => {
  return (
    makeAbout(props.lang)
  )
}

export default About