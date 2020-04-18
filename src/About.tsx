import React from "react";

import "./About.css"

interface IProps {
}

interface IState {
  lang: string;
}

class About extends React.Component<{ lang: string }, IState> {
  constructor(props: { lang: string }) {
    super(props)
    this.state = {
      lang: 'en',
    }
  }

  render() {
    return (
      <div className="about">
        <div className="our-goal">
          <h4>Our Goal</h4>

          <p>Because of the pandemic of Coronavirus disease 2019 (COVID-19),
            people all over the world have had tough days. In this situation,
            a lot of information is spread and complicated. We heard from
            public people that it is difficult to grasp really important
            information, and also heard from foreign residents in Japan that
            they are having anxiety because they lack multilingual
            information.
          </p>
          <br />
          <p>
            Under the situation, we decided to launch the following project.
          </p>
          <ul>
            <li>Translating and sharing all the information of the hotline
              centers in Japan.</li>
            <li>Sharing reliable information related to COVID-19 for the
              general public in both Japanese and English.</li>
          </ul>
          <br />
          <p>
            We sincerely hope that we can contribute to everybody in Japan.
          </p>
        </div>

        <div className="about-us">
          <h4>About Us</h4>
            <div className="chihiro-tsuchiya">
              <h5>Chihiro Tsuchiya</h5>
              <ul>
                <li>Affiliation: PhD Candidate of Graduate School of Asian
                  African Area Studies, Kyoto University</li>
                <li>Qualification: Registerd Nurse, Pablic Health Nurse, and
                  Master of Health Science</li>
                <li>Specialty: Global Health, Area Study in Oceania</li>
                <li>HP: https://researchmap.jp/peacechyhi</li>
                <li>Contact: chihiro.tsuchiya227@gmail.com</li>
              </ul>
            </div>

            <div className="eric-nichols">
              <h5>Eric Nichols</h5>
              <ul>
                <li>Affiliation: Dr.Eng. of Graduate School of Information
                  Science, Nara Institute of Science and Technology</li>
                <li>Specialty: Artificial intelligence, natural language
                  processing, machine learning</li>
                <li>HP: https://scholar.google.co.jp/citations?user=I3_MfAMAAAAJ&hl=en</li>
                <li>Contact: underspecified@gmail.com</li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default About
