import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/header.css";
const types = [
	{
		name: "normal",
		url: "https://pokeapi.co/api/v2/type/1/",
	},
	{
		name: "fighting",
		url: "https://pokeapi.co/api/v2/type/2/",
	},
	{
		name: "flying",
		url: "https://pokeapi.co/api/v2/type/3/",
	},
	{
		name: "poison",
		url: "https://pokeapi.co/api/v2/type/4/",
	},
	{
		name: "ground",
		url: "https://pokeapi.co/api/v2/type/5/",
	},
	{
		name: "rock",
		url: "https://pokeapi.co/api/v2/type/6/",
	},
	{
		name: "bug",
		url: "https://pokeapi.co/api/v2/type/7/",
	},
	{
		name: "ghost",
		url: "https://pokeapi.co/api/v2/type/8/",
	},
	{
		name: "steel",
		url: "https://pokeapi.co/api/v2/type/9/",
	},
	{
		name: "fire",
		url: "https://pokeapi.co/api/v2/type/10/",
	},
	{
		name: "water",
		url: "https://pokeapi.co/api/v2/type/11/",
	},
	{
		name: "grass",
		url: "https://pokeapi.co/api/v2/type/12/",
	},
	{
		name: "electric",
		url: "https://pokeapi.co/api/v2/type/13/",
	},
	{
		name: "psychic",
		url: "https://pokeapi.co/api/v2/type/14/",
	},
	{
		name: "ice",
		url: "https://pokeapi.co/api/v2/type/15/",
	},
	{
		name: "dragon",
		url: "https://pokeapi.co/api/v2/type/16/",
	},
	{
		name: "dark",
		url: "https://pokeapi.co/api/v2/type/17/",
	},
	{
		name: "fairy",
		url: "https://pokeapi.co/api/v2/type/18/",
	},
];

export default function Header() {
	// const [types, setTypes] = useState([]);
	// useEffect(() => {
	// 	fetch(`https://pokeapi.co/api/v2/type/`)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setTypes(data.results);
	// 		});
	// }, []);

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
					{types.map((ele, index) => (
						<li key={index}>{ele.name}</li>
					))}
				</ul>
				<button
					className="scroll-button"
					id="scroll-right"
					onClick={() => scrollButtons(500)}
				>
					&#11166;
				</button>
			</div>
		</header>
	);
}
