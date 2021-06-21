import {ProjectElement} from '../components/ProjectFolder/ProjectPage/ProjectElements'
import ProjectData from '../components/ProjectFolder/Projects/Data';

const Projects = () => {
  return(
    <>
    {ProjectData.map((value, index)=>{
      return(
        <ProjectElement {...value} key={value.id}/>
      )
    })}
    </>
  )
}


export default Projects;