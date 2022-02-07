import './menu.css';
import {BsYoutube, BsInstagram}from 'react-icons/bs'
import {Link} from 'react-router-dom';
export default function Menu(){
    return(
        <div className='menu'>
            <a className="social"href="https://youtube.com">
                <BsYoutube color='#fff' size={24} />
            </a>
            <a className="social" href="https://youtube.com">
                <BsInstagram color='#fff' size={24} />
            </a>
            <Link className="menu-item"to='/links' >
                Meus links
            </Link>
        </div>
    )
}