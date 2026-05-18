export const theme = {
	accent: "#cac1ec",
	accent50: "rgba(205, 184, 150, 0.5)",
	background: "#0c0b0f",
	border: "#3a3a4e",
	card: "#211f24",
	muted: "#8b85a1",
	muted10: "rgba(131, 118, 96, 0.1)",
	muted20: "rgba(131, 118, 96, 0.2)",
	muted30: "rgba(131, 118, 96, 0.3)",
	primary: "oklch(0.923 0.003 48.717)",
};
export const styles = {
	stepsContainer: {
		display: "flex",
		flexDirection: "column",
		fontSize: "14px",
		fontWeight: 600,
		color: theme.accent50,
		alignSelf: "center",
		width: "66.6667%",
		height: "40px",
	},
	stepsRow: {
		display: "flex",
		alignItems: "center",
		gap: "4px",
		width: "100%",
		height: "100%",
		pointerEvents: "none",
	},
	progressFill: {
		backgroundColor: theme.accent,
		height: "20px",
		borderTopLeftRadius: "2px",
		borderBottomLeftRadius: "2px",
		borderTopRightRadius: "1px",
		borderBottomRightRadius: "1px",
		transition: "min-width 200ms",
	},
	progressTick: {
		minWidth: "4px",
		minHeight: "32px",
		backgroundColor: theme.accent,
		borderRadius: "2px",
	},
	progressRemaining: {
		width: "100%",
		height: "19.2px",
		backgroundColor: theme.muted10,
		borderTopLeftRadius: "1px",
		borderBottomLeftRadius: "1px",
		borderTopRightRadius: "2px",
		borderBottomRightRadius: "2px",
	},
	stepsLabelsRow: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		gap: "4px",
		marginTop: "-19px",
		width: "100%",
		height: "100%",
	},
	stepLabelLeft: {
		transform: "translateX(-100%)",
		marginLeft: "-6px",
		transition: "color 200ms",
	},
	stepLabelRight: {
		transform: "translateX(100%)",
		marginRight: "-16px",
		transition: "color 200ms",
	},
	stepsDividerRow: {
		display: "flex",
		alignItems: "center",
		gap: "8px",
		width: "100%",
		justifyContent: "space-evenly",
	},
	stepColumn: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		transition: "color 200ms",
	},
	playlistDividerRow: {
		display: "flex",
		alignItems: "center",
		gap: "8px",
		width: "100%",
	},
	playlistSpacerLeft: {
		width: "28.5714%",
	},
	playlistSpacerRight: {
		width: "42.8571%",
	},
	playlistStepColumnLeft: {
		display: "flex",
		flexDirection: "column",
		width: 0,
		alignItems: "center",
		justifyContent: "center",
		marginLeft: "-3px",
		transition: "color 200ms",
	},
	playlistStepColumnRight: {
		display: "flex",
		flexDirection: "column",
		width: 0,
		alignItems: "center",
		justifyContent: "center",
		marginLeft: "-15px",
		transition: "color 200ms",
	},
	nowrap: {
		whiteSpace: "nowrap",
	},
	card: {
		position: "fixed",
		borderBottom: `1px solid ${theme.border}`,
		borderLeft: `1px solid ${theme.border}`,
		borderBottomLeftRadius: "8px",
		top: 0,
		right: 0,
		width: "480px",
		height: "640px",
		background: `linear-gradient(180deg, ${theme.card}ee 0%, ${theme.background}dd 20%, #000000cc 100%)`,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		WebkitBackdropFilter: "blur(10px)",
		backdropFilter: "blur(10px)",
		pointerEvents: "auto",
		fontSize: "14px",
		color: theme.background,
	},
	controlButton: {
		borderRadius: "9999px",
		width: "32px",
		height: "32px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		background: theme.accent,
		fontSize: "18px",
		paddingBottom: "2px",
		border: "none",
		color: "inherit",
		cursor: "pointer",
	},
	topButtonSubtle: {
		color: theme.muted,
		background: theme.card,
		border: `0px solid ${theme.border}`,
		padding: "8px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "8px",
		cursor: "pointer",
	},
	cardBody: {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		overflow: "hidden",
		overflowY: "auto",
	},
	cardSubBody: {
		color: "color-mix(in oklab, " + theme.accent + " 80%, transparent)",
		position: "sticky",
		top: 0,
		display: "flex",
		alignItems: "center",
		// backgroundColor: "color-mix(in oklab, " + theme.background + " 90%, transparent)",
		borderBottomWidth: "0px",
		borderColor: theme.border,
		zIndex: "100",
		paddingBlock: "8px", // 0.5rem = 8px
		justifyContent: "space-evenly",
		width: "100%",
	},
	flex: {
		display: "flex",
	},
	"mt-2": {
		marginTop: "8px",
	},
	"-mb-1": {
		marginBottom: "-4px",
	},
	"items-center": {
		alignItems: "center",
	},
	"justify-center": {
		justifyContent: "center",
	},
	"rounded-lg": {
		borderRadius: "8px",
	},
	// "scale-80":{
};

export function styleFromClass(str) {
	if (str == "flex")
		return {
			display: "flex",
		};
	if (str == "flex-col")
		return {
			flexDirection: "column",
		};
	let multi = 1;
	if (str == "translate-x-full") {
		return {
			transform: "translateX(100%)",
		};
	}
	if (str == "-translate-x-full") {
		return {
			transform: "translateX(-100%)",
		};
	}
	if (str == "-translate-x-1/2") {
		return {
			transform: "translateX(-50%)",
		};
	}
	if (str.startsWith("-")) {
		multi = -1;
		str = str.slice(1);
	}
	if (str.startsWith("mt-")) {
		return {
			marginTop: `calc(${multi} * ${str.slice(3)} * 4px)`,
		};
	}
	if (str.startsWith("mb-")) {
		return {
			marginBottom: `calc(${multi} * ${str.slice(3)} * 4px)`,
		};
	}
	if (str.startsWith("items-")) {
		return {
			alignItems: str.slice(6),
		};
	}
	if (str.startsWith("gap-")) {
		return {
			gap: `calc(${str.slice(4)} * 4px)`,
		};
	}
	if (str.startsWith("w-")) {
		return {
			width: `calc(${str.slice(2) == "full" ? "100%" : str.slice(2) + " * 4px"})`,
		};
	}
	if (str.startsWith("h-")) {
		return {
			height: `calc(${str.slice(2) == "full" ? "100%" : str.slice(2) + " * 4px"})`,
		};
	}
	if (str.startsWith("max-h-")) {
		return {
			maxHeight: `calc(${str.slice(6)} * 4px)`,
		};
	}
	if (str.startsWith("px-")) {
		return {
			paddingLeft: `calc(${str.slice(3)} * 4px)`,
			paddingRight: `calc(${str.slice(3)} * 4px)`,
		};
	}
	if (str.startsWith("p-")) {
		return {
			padding: `calc(${str.slice(2)} * 4px)`,
		};
	}
	if (str.startsWith("scale-")) {
		return {
			scale: `calc(${str.slice(6)}/100)`,
		};
	}
	if (str.startsWith("justify-")) {
		return {
			justifyContent: str.slice(8),
		};
	}
	if (str.startsWith("rounded")) {
		return {
			borderRadius: str.slice(8) == "lg" ? "8px" : "4px",
		};
	}
	if (str == "text-xl") {
		return {
			fontSize: "20px",
			lineHeight: "1.4",
		};
	}
	if (str == "font-semibold") {
		return {
			fontWeight: 600,
		};
	}

	if (str.startsWith("text-") || str.startsWith("bg-")) {
		const isText = str.startsWith("text-");
		const token = str.slice(isText ? 5 : 3);
		const [name, opacityRaw] = token.split("/");
		const colorMap = {
			accent: theme.accent,
			background: theme.background,
			border: theme.border,
			card: theme.card,
			muted: theme.muted,
			primary: theme.primary,
		};
		const base = colorMap[name];
		if (!base) return null;
		let colorValue = base;
		if (opacityRaw !== undefined) {
			const opacity = Math.max(0, Math.min(100, Number(opacityRaw))) / 100;
			const hexMatch = /^#([0-9a-fA-F]{6})$/.exec(base);
			if (hexMatch) {
				const hex = hexMatch[1];
				const r = parseInt(hex.slice(0, 2), 16);
				const g = parseInt(hex.slice(2, 4), 16);
				const b = parseInt(hex.slice(4, 6), 16);
				colorValue = `rgba(${r}, ${g}, ${b}, ${opacity})`;
			}
		}
		return isText ? { color: colorValue } : { backgroundColor: colorValue };
	}
	if (str == "absolute") {
		return {
			position: "absolute",
		};
	}
	if (str.startsWith("left-") || str.startsWith("top-") || str.startsWith("right-") || str.startsWith("bottom-")) {
		const isLeft = str.startsWith("left-");
		const isTop = str.startsWith("top-");
		const isRight = str.startsWith("right-");
		const isBottom = str.startsWith("bottom-");
		const value = `calc( ${multi} * ${str.split("-").pop()} * 4px)`;
		if (isLeft) return { left: value };
		if (isTop) return { top: value };
		if (isRight) return { right: value };
		if (isBottom) return { bottom: value };
	}

	if (str == "opacity-0") {
		return {
			opacity: 0,
		};
	}
	if (str.startsWith("z-")) {
		return {
			zIndex: str.split("-").pop(),
		};
	}
	if (str.startsWith("duration-")) {
		return {
			transitionDuration: str.split("-").pop() + "ms",
		};
	}
	if (str == "transition-all") {
		return {
			transitionProperty: "all",
		};
	}
	if (str.startsWith("pointer-events-")) {
		return {
			pointerEvents: str.split("-").pop() === "none" ? "none" : "auto",
		};
	}

	if (str == "translate-y-full") {
		return {
			transform: "translateY(100%)",
		};
	}
	return null;
}
export const spotifyURL = "https://open.spotify.com";
export const spotifyHost = spotifyURL.split("//")[1];

export const ytURL = "https://music.youtube.com";
export const ytHost = ytURL.split("//")[1];
