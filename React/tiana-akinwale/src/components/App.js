import React, { Component } from 'react'
import HomeComp from './HomeComp'
import AboutComp from './AboutComp'
import NavBar from './NavBar'
import ServicesComp from './ServicesComp';
import ProjectsComp from './ProjectsComp';
import SkillsComp from './SkillsComp';
import ContactComp from './ContactComp';

class App extends Component {
  render() {
    const navBarElements = {
      openSB: 'Open SideBar',
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact'
      /* add dark mode */
    }
    const homeCompElements = {
      greeting: "Hello I'm",
      author: {
        firstName: 'IYANUOLUWA',
        lastName: 'AKINWALE'
      },
      role: 'Web Developer',
      hire: 'Hire Me',
      connect: 'Connect with me',
      githubLink: 'https://github.com/TianaAkinwale',
      linkedInLink: 'https://www.linkedin.com/in/iyanuoluwa-akinwale-1169ab1aa/',
      twitterLink: 'https://twitter.com/tianaa-akinwale'
    }
    const aboutCompElements = {
      heading: 'About Me',
      about1: `Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et rutrum eleifend sollicitudin
       lacinia justo id turpis. Nec convallis integer. Odio eget duis. Nulla aenean et. Blandit varius
        sollicitudin. Pellentesque leo primis neque urna magnis. Elit ut sollicitudin. Et est a nam dolores
         eget itaque sagittis et parturient duis est eleifend sociis rutrum odio viverra integer.`,
      about2: `Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et rutrum eleifend sollicitudin
      lacinia justo id turpis. Nec convallis integer. Odio eget duis. Nulla aenean et. Blandit varius
       sollicitudin...`,
      download: 'Download CV'  
    }
    const servicesCompElements = {
      heading: 'My Services',
      /* heading2: 'What I provide my clients', */
      services: {
        service1: 'Consultation',
        service2: 'FrontEnd Development',
        service3: 'oiuytfvbnmgfghjk',
        service4: 'kjhj,jhghyujkjhghjk'
      },
      service1Abt: `Lorem ipsum dolor sit aconsect dipisicing elit, 
      sed do eiusmod to incididunt uabore etdolore magna 
      aliqua.`,
      service2Abt: `Lorem ipsum dolor sit aconsect dipisicing elit, 
      sed do eiusmod to incididunt uabore etdolore magna 
      aliqua.`,
      service3Abt: `Lorem ipsum dolor sit aconsect dipisicing elit, 
      sed do eiusmod to incididunt uabore etdolore magna 
      aliqua.`,
      service4Abt: `Lorem ipsum dolor sit aconsect dipisicing elit, 
      sed do eiusmod to incididunt uabore etdolore magna 
      aliqua.`
    }
    const projectsCompElements = {
      heading: 'My Featured Projects',
      projects: {
        project1Name: 'Mini Math Game',
        project2Name: 'Count Down Timer',
        project3Name: 'My Portfolio',
        project4Name: 'Frontend io project',
        project5Name: 'Count Down Timer',
        project6Name: 'My Portfolio',
      }
    }
    const reactSkills = ['HTML', 'CSS', 'React.js',]
    const reactSkillsMap = reactSkills.map((skill) => 
    <p key={skill}>{skill}</p>)

    const jsSkills = ['HTML', 'CSS', 'JavaScript',]
    const jsSkillsMap = jsSkills.map((skill) => 
    <p key={skill}>{skill}</p>)

    const hcSkills = ['HTML', 'CSS']
    const cssSkillsMap = hcSkills.map((skill) => 
    <p key={skill}>{skill}</p>)

    //slkils props
    const heading = 'Some Tools I use'
    const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Git', 'Github']
    const skillsMap = skills.map((skill) => 
    <p key={skill}>{skill}</p>)

    //contact props
    const contactCompElements = {
      heading: 'Contact Me',
      /* subHeading: 'Do you have an idea for a project?', */
      subHeading2: 'Send me a message',
      email: 'tianaakinwale@gmail.com',
      phone: 'https://wa.me/c/2347054208628',
      button: 'Send Message'
    }

    return (
      <div>
        <ContactComp 
        contactCompElements={contactCompElements}
        />
        <NavBar 
        navBarElements={navBarElements}
        />
        <HomeComp 
        homeCompElements={homeCompElements}
        />
        <AboutComp 
        aboutCompElements={aboutCompElements}
        />
        <ServicesComp 
        servicesCompElements={servicesCompElements}
        />
        <SkillsComp 
        heading={heading}
        skillsMap={skillsMap}
        />
        <ProjectsComp 
        projectsCompElements={projectsCompElements}
        reactSkillsMap={reactSkillsMap}
        jsSkillsMap={jsSkillsMap}
        cssSkillsMap={cssSkillsMap}
        />        
        <ContactComp 
        contactCompElements={contactCompElements}
        />
      </div>
    )
  }
}

export default App