
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

import instrumoon from '../../assets/instrumoonC.png'
import visionDrop from '../../assets/LOGO VISION.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={instrumoon} link="https://github.com/SnoWed-29/instrumoon-laravel" h3='Instrumoon' p='Online Musical Store'/>
        <ProjectCard src={visionDrop} link="https://github.com/SnoWed-29/vision_drop" h3='Vision Drop' p='Psychedelic Shop'/>
        {/* <ProjectCard src={hipsster} link="www.google.com" h3='hipsster' p='Glasses Shop'/>
        <ProjectCard src={fitLift} link="www.google.com" h3='fitLift' p='Fitness App'/> */}
      </div>
    </section>
  )
}

export default Projects
