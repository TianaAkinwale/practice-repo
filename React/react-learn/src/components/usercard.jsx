import {  useState } from 'react'
import {useNavigate} from 'react-router-dom'
import TianaImage from '../images/slack-dp.jpeg'

const UserCard = () => {
  const navigateTo = useNavigate();

  const [authenticated, setAuthenticated] = useState(false)
  const [profile, setProfile] = useState({
    author: {
      firstname: 'Iyanuoluwa',
      lastname: 'Akinwale'
    },
    role: 'Software Engineer, Nigeria',
/*  skillsHeading: 'Skills',
    dateJoined: new Date().getDay(),*/  
  })
 const [newProfile, setNewProfile] = useState('')
  const editProfile = (e) => {
    /* if (newProfile.trim() !== '') {
      setProfile(...profile, 
        {[name]: value}
      )
    } */
  }

  const [skills, setSkills] = useState([
    'HTML', 'CSS', 'JS', 'React', 'Python', 'Git', 'VSCode', 'Github'
  ])
  const [newSkill, setNewSkill] = useState('')

 const addSkill = () => {
/*   const newsSkill = prompt('en ter')
 */  if (newSkill.trim() !== ''/*  && !>= 6 */) {
    setSkills([...skills, newSkill])
 }
}
/* const handleNewSkill = () => {setNewSkill(e.target.value)
 } */

  const {
    author: { firstname, lastname },
    role,
    /* skillsHeading,
    dateJoined, */
  } = profile;

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    setAuthenticated(authenticated)
    navigateTo('/login')
        console.log('log out successful')
        console.log('now in login')
  } 

  return (
    <div className="bg-blue-400 m-[10px] px-[26px] py-[25px] rounded-[25px] shadow-md">
      <img className="h-[180px] w-[150px] rounded-[100px]"
        src={TianaImage} alt='Tiana Akinwale' />
      <h3>{firstname} {lastname}</h3>
      <p>{role}</p>
      
      <input
        type="text"
        value={newProfile}
        onChange={(e) => setNewProfile(e.target.value)}
      />
      <button onClick={handleLogout}
        className="bg-yellow-400 p-[8px] m-1 ml-0 rounded-[10px]">Log Out</button>
      <button onClick={editProfile}
          className="bg-yellow-400 p-[8px] m-1 ml-0 rounded-[10px]">Edit name</button>
      
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
