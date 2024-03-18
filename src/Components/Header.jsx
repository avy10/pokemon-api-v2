import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/header.css";
export default function Header() {
	const [types, setTypes] = useState([]);
	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/type/`)
			.then((res) => res.json())
			.then((data) => {
				setTypes(data.results);
			});
	}, []);

	function scrollButtons(val) {
		document.querySelector(".nav").scrollBy({
			left: val,
			behavior: "smooth",
		});
	}

	return (
		<header>
			<div className="wave"></div>
			<div className="wave"></div>
			<div className="wave"></div>
			<div id="section">
				<div className="content">
					<h2>Pokemon</h2>
					<h2>Pokemon</h2>
				</div>
				<div className="content2">
					<h2>KingDom</h2>
					<h2>KingDom</h2>
				</div>
			</div>
			<div className="types">
				<button
					className="scroll-button"
					id="scroll-left"
					onClick={() => scrollButtons(-500)}
				>
					&#11164;
				</button>
				<ul className="nav">
					{types.map((ele) => (
						<li>{ele.name}</li>
					))}
				</ul>
				<button
					class="scroll-button"
					id="scroll-right"
					onClick={() => scrollButtons(500)}
				>
					&#11166;
				</button>
			</div>
		</header>
	);
}
