import {ProjectElement} from '../components/ProjectFolder/ProjectPage/ProjectElements'
import ProjectData from '../components/ProjectFolder/Projects/Data';
// import {ReactComponent as Car} from '../content/svg/svg-5.svg'
const Projects = () => {
  return(
    <>
    {ProjectData.map((value, index)=>{
      return(
        <ProjectElement {...value} key={value.id}/>
      )
    })}
    {/* <Car style={{"width":"100%", "height":"100%"}}/> */}
    </>
  )
}


export default Projects;