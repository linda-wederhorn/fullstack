const Filter = ({ filterText, changeFunction }) => (
	<div>
		filter shown with <input value={filterText} onChange={changeFunction} />
	</div>
);

export default Filter;
