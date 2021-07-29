import './styles.css';
import siteData from '../../data/siteData';

export default function work({ setSelectedWork }) {


  const openModal = (site) => {
    setSelectedWork(site);
  }

  return(
    <div className='work'>
      <h1 className='work-title'>Work</h1>
      <ul className='list-of-work'>
        {siteData.map((site,i) => 
          <li className='site-card' onClick={() => openModal(siteData[i])} key={i}>
            <img className='site-card-img' src = {site.image} alt='site-screenshot'/>
            <h3>{site.siteName}</h3>
            <h4>{site.technologiesUsed}</h4>
          </li>
        )}
      </ul>
    </div>
  )
};