import React, { useState, useEffect } from "react";
import "./App.css";
import Pagination from "./components/pagination";
import NewsItem from "./components/newsItem";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
	const [news, setNews] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [newsPerPage, setNewsPerPage] = useState(10);
	const [searchTerm, setSearchTerm] = useState("");
	const [sortOrder, setSortOrder] = useState("");

	useEffect(() => {
		fetch("data.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (rNews) {
				setNews(rNews);
			});
	}, []);

	useEffect(() => {
		if (sortOrder === "oldest") {
			setNews((prevNews) =>
				[...prevNews].sort((a, b) => {
					return new Date(a.publishedAt) - new Date(b.publishedAt);
				})
			);
		} else if (sortOrder === "newest") {
			setNews((prevNews) =>
				[...prevNews].sort((a, b) => {
					return new Date(b.publishedAt) - new Date(a.publishedAt);
				})
			);
		}
	}, [sortOrder]);

	const indexOfLastNews = currentPage * newsPerPage;
	const indexOfFirstNews = indexOfLastNews - newsPerPage;
	const filteredNews = news.filter((item) =>
		item.title.toLowerCase().includes(searchTerm.toLowerCase())
	);
	const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const handleSortChange = (event) => {
		setSortOrder(event.target.value);
	};

	return (
		<React.Fragment>
			<div className='App'>
				<Header />
				<div className='options-container'>
					<input
						type='text'
						placeholder='&#128270; Search News'
						onChange={(event) => setSearchTerm(event.target.value)}
						className='search-input'
					/>
					<select
						name='Choose Category'
						id='categories'
						className='select-cat'
						onChange={handleSortChange}>
						<option selected='true' disabled='true'>
							Sort News
						</option>
						<option value='newest'>Newest First</option>
						<option value='oldest'>Oldest First</option>
					</select>
				</div>

				<div className='news-grid'>
					{currentNews.map((item) => (
						<NewsItem key={item.url} item={item} />
					))}
				</div>
				<Pagination
					newsPerPage={newsPerPage}
					totalNews={filteredNews.length}
					paginate={paginate}
				/>
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default App;
