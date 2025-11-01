import { Bookmark } from 'lucide-react';

const Card = (props) => {

  return (
        <div className='card'>
          <div>
            <div className='top'>
            <img src={props.logo} alt="Card Image" />
            <button>Save<Bookmark size={15} color='black'/></button>
          </div>
          <div className='center'>
            <h3>{props.Company} <span>{props.date}</span></h3>
            <h2>{props.post}</h2>
            <div className='tag'>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
          </div>
          <div className='bottom'>
              <div>
                <h3>{props.pay}</h3>
                <h5>{props.loc}</h5>
              </div>
            <button>Apply now</button>
          </div>
        </div>
  )
}

export default Card