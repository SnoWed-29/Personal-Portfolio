import styles from './HeroStyles.module.css';
import heroimage from '../../assets/prfl.png';
// import sun from  '../../assets/sun.svg'
// import moon from  '../../assets/moon.svg'

import twitterLight from '../../assets/twitter-light.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';


// import twitterDark from '../../assets/twitter-dark.svg';
// import githubDark from '../../assets/github-dark.svg';
// import linkedinDark from '../../assets/linkedin-dark.svg';

import CV from '../../assets/HaithamDihaji.pdf';
// import { useTheme } from '../../common/ThemeContext';

function Hero() {

    const twitterIcon = twitterLight ;
    const githubIcon = githubLight;
    const linkedinIcon = linkedinLight ;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroimage} alt="Profile Picture" className={styles.hero} />
        {/* <img src={themeIcon} alt="Color Mode Icon" className={styles.colorMode} onClick={toggleTheme} /> */}
      </div>
      <div className={styles.info}>
        <h1>
            Haitham
            <br /> 
            Dihaji
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
            <a href="https://twitter.com/" target="_blank">
                <img src={twitterIcon} alt="Twitter Icon" />
            </a>
            
            <a href="https://github.com/Snowed-29" target="_blank">
                <img src={githubIcon} alt="github Icon" />
            </a>
            
            <a href="https://www.linkedin.com/in/haitham-dihaji-7515b1225/" target="_blank">
                <img src={linkedinIcon} alt="linkedin Icon" />
            </a>
        </span>
        <p className={styles.description}>
            With a passion for developing modern web apps.
        </p>
        <a href={CV} download>
            <button className='hover' >Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
