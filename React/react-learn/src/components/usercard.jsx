import { useState } from 'react'
import TianaImage from '../images/slack-dp.jpeg'

const UserCard = ({ userCardElements, /* skillsMap */ }/* or props */) => {
  const [noun, setNoun] = useState('Christianah');
  const [skills, setSkills] = useState([
    'HTML', 'CSS', 'JS', 'React', 'Python', 'Git', 'VSCode', 'Github'
  ])
  const [newSkill, setNewSkill] = useState('')

 const addSkill = () => {
/*   const newsSkill = prompt('en ter')
 */  if (newSkill.trim() !== ''/*  && !>= 6 */) {
    setSkills([...skills, newSkill])
 /*  setNewSkill('hhh') */
 }
}
/* const handleNewSkill = () => {setNewSkill(e.target.value)
 } */

  const changeMess = () => {
    setNoun('Kris')
  }

  const {
    author: { firstname, lastname },
    role,
    /* skillsHeading,
    dateJoined, */
  } = userCardElements;

  return (
    <div className="bg-blue-400 m-[10px] px-[26px] py-[25px] rounded-[25px] shadow-md">
      <img className="h-[180px] w-[150px] rounded-[100px]"
        src={TianaImage} alt='Tiana Akinwale' />
      <h3>
        {firstname} {noun} {lastname}
      </h3>
      <button className="bg-yellow-300 p-[8px] m-1 rounded-[10px]"
        onClick={changeMess}>Change name</button>
      <button className="bg-green-600 p-[8px] m-1 rounded-[10px]">
        <a href="#settingsDiv">Edit profile</a></button>

      <p>{role}</p>
{/*       <h3 >{skillsHeading}</h3>
 */}        <div className=" ">
          <div className="grid grid-cols-4 w-[100]">
            {/* {skillsMap} */}
              {skills.map((skill, index) => (
              <p key={index} 
                className='bg-white rounded-[8px] px-[10px] py-[8px] 
                  text-center max-w-[80px] mt-3 shadow-md'>
                {skill}
              </p>))}
          </div> 
        </div>
        <input className='bg-white rounded-[8px] px-[10px] py-[8px] 
              text-center max-w-[100px] mt-3 shadow-md'
              type='text' value={newSkill} placeholder='Add skill'
              onChange={(e) => setNewSkill(e.target.value)} onClick={addSkill}  />  
      {/* <p className='bg-white rounded-[8px] mt-5 px-[10px] py-[8px] text-center max-w-[50px] shadow-md'>{dateJoined}</p> */}
    </div>
  );
};

export default UserCard;
