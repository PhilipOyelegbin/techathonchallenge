import {Link} from 'react-router-dom';
import {FaChevronDown} from 'react-icons/fa';

export const IconicButton = ({label, onhover}) => {
  return (
    <button className='iconicbtn' onMouseOver={onhover}>{label} <FaChevronDown/></button>
  )
}

export const RedButton = ({link, label}) => {
  return (
    <Link className="redbtn" to={link}>{label}</Link>
  )
}

export const WhiteButton = ({link, label}) => {
    return (
      <Link className="whitebtn" to={link}>{label}</Link>
    )
}