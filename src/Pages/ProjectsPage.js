import React from 'react';
import Projects from '../components/Projects/Projects';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import './ProjectsPage.css';
class ProjectsPage extends React.Component{
    render(){
        return(
          <><Breadcrumb />
              <div className="projects_">
                <Projects />
              </div>
              </>
        )
    }
}
export default ProjectsPage
