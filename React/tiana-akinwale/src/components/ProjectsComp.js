import React, { Component } from 'react'

class ProjectsComp extends Component {
  render() {
    const projectsCompElements = this.props.projectsCompElements
    const {
        heading,
        projects: {
            project1Name,
            project2Name,
            project3Name,
            project4Name,
            project5Name,
            project6Name,
        }
    } = projectsCompElements

    return (
        <section>
            <h3>{heading}</h3>
            <div id="project1" class="projectDiv">
                {/* project image */}
                {/* on hover etails will show or not on hover
                using flex or grid to show them */}
                <a href="projectlink" target="_blank"><b>{project1Name}</b></a>
                {this.props.jsSkillsMap}
            </div>
            <div id="project1" class="projectDiv">
                {/* project image */}
                {/* on hover etails will show or not on hover
                using flex or grid to show them */}
                <a href="projectlink" target="_blank"><b>{project2Name}</b></a>
                {this.props.jsSkillsMap}
            </div>
            <div id="project1" class="projectDiv">
                {/* project image */}
                {/* on hover etails will show or not on hover
                using flex or grid to show them */}
                <a href="projectlink" target="_blank"><b>{project3Name}</b></a>
                {this.props.reactSkillsMap}
            </div>
            <div id="project1" class="projectDiv">
                {/* project image */}
                {/* on hover etails will show or not on hover
                using flex or grid to show them */}
                <a href="projectlink" target="_blank"><b>{project4Name}</b></a>
                {this.props.cssSkillsMap}
            </div>
            <div id="project1" class="projectDiv">
                {/* project image */}
                {/* on hover etails will show or not on hover
                using flex or grid to show them */}
                <a href="projectlink" target="_blank"><b>{project5Name}</b></a>
                {this.props.reactSkillsMap}
            </div>
            <div id="project1" class="projectDiv">
                {/* project image */}
                {/* on hover etails will show or not on hover
                using flex or grid to show them */}
                <a href="projectlink" target="_blank"><b>{project6Name}</b></a>
                {this.props.reactSkillsMap}
            </div>
        </section>
    )
  }
}

export default ProjectsComp