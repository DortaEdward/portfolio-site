import './styles.css'
import React from 'react';

export default function Modal({selectedWork, setSelectedWork}){

  const handleClick = (e) =>{
    if(e.target.classList.contains('backdrop')){
      setSelectedWork(null)
    }
  }
  return(
    <div className='backdrop' onClick={handleClick}>
      <div className='modal-container'>
        <img src={selectedWork.image} alt='modal'/>
        <div className='modal-info'>
          <p className='modal-title'>{selectedWork.siteName}</p>
          <p className='modal-tech'>{selectedWork.technologiesUsed}</p>
          <p className='modal-desc'>{selectedWork.desc}</p>
          <div className='modal-links'>
            <a target="_blank" rel="noopener noreferrer" href={selectedWork.links.link}>Site Link</a>
            <a target="_blank" rel="noopener noreferrer" href={selectedWork.links.github}>Github Link</a>
          </div>
        </div>
      </div>
    </div>
  )
}