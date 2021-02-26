import './Entete.scss'
import avatar from '../images/avatar.png';
import Avatar from '@material-ui/core/Avatar';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Sabrina Ales</div> <Avatar  src={avatar} alt="Camille Semaan" />
    </header>
  );
}