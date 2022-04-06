import './Summary.css';

function Summary(props) {
	return (
		<div className='summaryContainer'>
			<h2>Podsumowanie</h2>
			<div className='summaryItems'>
				<div className='summaryItem'>
					<p>Ilość przedmiotów: <span>{props.quantityOfItems}</span>szt</p>
				</div>
				<div className='summaryItem'>
					<p>Łączna cena: <span>2900</span>zł</p>
				</div>
			</div>
		</div>
	);
}

export default Summary;
