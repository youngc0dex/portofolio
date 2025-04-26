import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import { getImagePath } from "../utils/imgPath";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const showSkills = () => {
      INFO.skill.skills.forEach((skill, index) => {
        setTimeout(() => {
          setVisibleSkills(prev => [...prev, skill.title]);
        }, 200 * index);
      });
    };

    // Delay the start of the animation to ensure other elements are loaded
    const timer = setTimeout(() => {
      showSkills();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-logo-container">
            <div className="about-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">{INFO.about.title}</div>

                <div className="subtitle about-subtitle">
                  {INFO.about.description}
                </div>

                <div className="skill-container">
                  <div className="title skill-title">{INFO.skill.title}</div>
                  <div className="skill-list">
                    {INFO.skill.skills.map((skill) => (
                      <div 
                        className={`skill-item ${visibleSkills.includes(skill.title) ? 'skill-fade-in' : 'skill-hidden'}`} 
                        key={skill.title}
                      >
                        <img src={skill.image.startsWith('http') ? skill.image : getImagePath(skill.image)} alt={skill.title} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="about-left-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img src={getImagePath("about-pp.jpg")} alt="about" className="about-image" />
                  </div>
                </div>

                <div className="about-socials">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="about-socials-mobile">
              <Socials />
            </div>
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
