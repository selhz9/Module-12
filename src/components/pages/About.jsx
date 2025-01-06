import React from 'react';
import image from '../../assets/image1.JPG';

const About = () => {
  return (
    <section id="about-me">
      <h1>About Me</h1>
      <div className="about-me-container">
        <img src={image} alt="Sarah-Hantz" className="about-me-image" />
        <p>
          Hello, my name is Sarah Hantz and I am an aspiring web developer. I have experience with HTML, CSS, and JavaScript. I am currently learning React and I am excited to continue to grow my skills. I am passionate about creating responsive and user-friendly websites. I am a quick learner and I am always looking for new challenges. I am excited to bring my skills to a new team and help create amazing websites.
        </p>
      </div>
    </section>
  );
};

export default About;
