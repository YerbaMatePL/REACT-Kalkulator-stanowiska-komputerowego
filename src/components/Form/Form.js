import './Form.css';
import Select from './Select/Select';


function Form() {

	return (
		<div className='form'>
			<div className='form__items'>
				<div className='form__item'>
					<div className='form__item_labels'>
						<label htmlFor='item'>przedmiot</label>
					</div>
					<div className='form__item_inputs'>
						<input type='text' id='item' placeholder='Podaj nazwę przedmiotu' />
					</div>
				</div>

				<div className='form__item'>
					<div className='form__item_labels'>
						<label htmlFor='description'>Opis</label>
					</div>
					<div className='form__item_inputs'>
						<input
							type='text'
							id='description'
							placeholder='Wpisz krótki opis np. model'
						/>
					</div>
				</div>
				<Select />
				<div className='form__item'>
					<div className='form__item_labels'>
						<label htmlFor='price'>Cena</label>
					</div>
					<div className='form__item_inputs'>
						<input
							type='number'
							step='0.5'
							id='price'
							placeholder='Wpisz cenę przedmiotu'
						/>
					</div>
				</div>

				<div className='form__item'>
					<div className='form__item__btnAdd'>
						<button>Dodaj</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;
