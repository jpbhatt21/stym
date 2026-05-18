import { styles } from "./css";

function Unknown({ routeTo }) {
	return (
		<>
			
			<div className="flex flex-col h-full w-full text-muted items-center justify-center">
				<div style={{ fontSize: "18px", marginBottom: "8px" }}>
					This menu can only be accessed on
					<a href={routeTo} target="_blank" className="brightness-115" style={{ color: "var(--accent)" }}>
						{routeTo.includes("spotify") ? " Spotify " : routeTo.includes("youtube") ? " YouTube Music " : routeTo}
					</a>
				</div>
			</div>
		</>
	);
}

export default Unknown;
