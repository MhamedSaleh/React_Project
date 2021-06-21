import React from 'react';
import Projects from '../components/Projects/Projects';
import './ProjectsPage.css';
class ProjectsPage extends React.Component{
    render(){
        return(
              <div className="projects_">
                <Projects />
              </div>
        )
    }
}
export default ProjectsPage
