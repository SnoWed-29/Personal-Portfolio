import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';
function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML' />
            <SkillList src={checkMarkIcon} skill='CSS' />
            <SkillList src={checkMarkIcon} skill='JavaScript' />
            <SkillList src={checkMarkIcon} skill='PHP' />
            <SkillList src={checkMarkIcon} skill='C#' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='TailwindCss' />
            <SkillList src={checkMarkIcon} skill='Bootstrap' />
            <SkillList src={checkMarkIcon} skill='React Js' />
            <SkillList src={checkMarkIcon} skill='Vue Js' />
            <SkillList src={checkMarkIcon} skill='Laravel' />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='SQL' />
            <SkillList src={checkMarkIcon} skill='Jquery' />
            <SkillList src={checkMarkIcon} skill='Ajax' />
            <SkillList src={checkMarkIcon} skill='Git' />
            <SkillList src={checkMarkIcon} skill='Linux' />
        </div>
    </section>
  )
}

export default Skills
