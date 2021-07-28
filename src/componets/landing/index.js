import './styles.css'


export default function Landing () {

  return(
    <div className='landing home'>
      <div className='landing-content'>
        <p className='text-one'>Hey, I'm Edward</p>
        <p className='text-two'>I improve life through creation</p>
        <p className='text-three'>I'm a Software Engineer based out of New York,<br/>focusing on Full-Stack web development.</p>
      </div>
      <img className='landing-image' src='\images\developer.png' alt='Developer' />
    </div>
  )
};