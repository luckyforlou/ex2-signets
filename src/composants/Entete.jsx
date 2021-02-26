import './Entete.scss'
import avatar from '../images/avatar.png';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Sabrina Ales</div> <img src={avatar} alt="Camille Semaan" />
    </header>
  );
}