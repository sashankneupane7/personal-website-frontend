import About from './about'
// import Posts from '../components/BlogFolder/BlogPage/Posts'
import {ProjectElement} from '../components/ProjectFolder/ProjectPage/ProjectElements'
import ProjectData from '../components/ProjectFolder/Projects/Data'
// import {config} from '../website-config'


export default function Home () {
  return (
    <>
      <About />
      <ProjectElement {...ProjectData[0]} />
      <ProjectElement {...ProjectData[1]} />
      <ProjectElement {...ProjectData[2]} />
    </>
  )
}