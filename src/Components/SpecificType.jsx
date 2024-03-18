import { useParams } from "react-router-dom";
export default function SpecificType() {
	const { type } = useParams();
	console.log(type);
	return <h1 style={{ color: "red" }}>HELLO</h1>;
}
