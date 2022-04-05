import './Popup.css';

function Popup() {
	return (
		<div className='popup wrapper'>
			<div className='popup__Form '>
                <h2>Edytuj zadanie:</h2>
                <input type="text" placeholder='Podaj nazwę przedmiotu...'></input>
                <input type="text" placeholder='Podaj któtki opis...'></input>
                <select><option>Przykładowa kategoria</option><option>Przykładowa kategoria</option></select>
                <input type="number" placeholder='Podaj cenę przedmiotu...'></input>
                <div className='popup__Form__btnsContainer'>
                <button className=' popup__Form__btn popup__Form__btn--btnConfirm'>Zatwierdź</button>
                <button className='popup__Form__btn popup__Form__btn--btnCancel'>Anuluj</button>
                </div>
        
            </div>
		</div>
	);
}

export default Popup;
