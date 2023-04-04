import "./newsItem.css";
function newsItem(props) {
	return (
		<div className='news-item'>
			<img src={props.item.urlToImage} alt={props.item.title} />
			<h2>{props.item.title}</h2>
			<p>{props.item.description}</p>
		</div>
	);
}

export default newsItem;
