import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

function Table() {
	return (
        <div className='tableContainer'>
		<h2>Aktualna lista</h2>
  <div className="tblHeader">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>Przedmiot</th>
          <th>Opis</th>
          <th>Kategoria</th>
          <th>Cena</th>
          <th>Akcje</th>
        </tr>
      </thead>
    </table>
  </div>
  <div className="tblContent">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td>Myszka</td>
          <td>Myszka model hgdhsd7676, kupic w sklepie</td>
          <td>$1.38</td>
          <td>+2.01</td>
          <td><button><FontAwesomeIcon icon={faPencil}/></button><button><FontAwesomeIcon icon={faTrash}/></button></td>
        </tr>
      </tbody>
    </table>  </div>
  </div>
	);
}

export default Table;
