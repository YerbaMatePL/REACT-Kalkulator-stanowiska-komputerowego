import './Summary.css';

function Summary() {
	return (
		<div className='summaryContainer'>
			<h2>Podsumowanie</h2>
			<div className='summaryItems'>
				<div className='summaryItem'>
					<p>Ilość przedmiotów: <span>10</span>szt</p>
				</div>
				<div className='summaryItem'>
					<p>Łączna cena: <span>2900</span>zł</p>
				</div>
			</div>
		</div>
	);
}

export default Summary;
