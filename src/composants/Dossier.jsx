import './Dossier.scss';
import SortSharpIcon from '@material-ui/icons/SortSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Dossier({id, titre, couleur, dateModif}) {
  return (
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
      <SortSharpIcon className="deplacer">Déplacer</SortSharpIcon>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifier: {dateModif}</p>
        <MoreVertIcon className="more"></MoreVertIcon>
      </div>
      
    </article>
  );
}