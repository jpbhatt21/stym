function Spotify({ globalSteps, setGlobalSteps, songs, setSongs, isSpotifyPlaylistPage }) {
	return (
		<>
			<div
				className="flex flex-col text-muted min-h-full font-semibold w-full items-center justify-center"
				style={{
					gap: "10px",
					marginBottom: "-100%",
					opacity: globalSteps ? "0" : "1",
					transitionProperty: "all",
					transitionDuration: "500ms",
				}}>
				<div
					className="dancing-script-semibold"
					style={{
						fontSize: "48px",
						lineHeight: "1.1112",
						marginTop: "-50px",
					}}>
					symply CT
				</div>

				<label
					style={{
						textAlign: "center",
						marginBottom: "40px",
					}}>
					Convert your Spotify playlist to YouTube Music
				</label>
				<button
                disabled={!isSpotifyPlaylistPage}
					sym="true"
					onClick={() => {
						setGlobalSteps((prev) => prev || 1);
					}}
					className="group"
					style={{
						backgroundColor: "var(--accent)",
						padding: "calc(2 * 4px)",
						marginTop: "calc(-1 * 5 * 4px)",
						color: "#0c0b0f",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "8px",
						scale: "calc(120/100)",
					}}>
					<div className="flex w-[24px] gap-[8px] h-[24px] flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							style={{
								minWidth: "100%",
								minHeight: "100%",
								transitionDuration: "500ms",
								transitionProperty: "all",
								marginTop: isSpotifyPlaylistPage? globalSteps ? "-64px" : "-32px" : "0px",
								filter: isSpotifyPlaylistPage ? "blur(4px)" : "none",
							}}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-ban-icon lucide-ban">
							<circle cx="12" cy="12" r="10" />
							<path d="M4.929 4.929 19.07 19.071" />
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							style={{
								minWidth: "100%",
								minHeight: "100%",
								transitionDuration: "500ms",
								transitionProperty: "all",
								filter: !isSpotifyPlaylistPage || globalSteps ? "blur(4px)" : "none",
							}}
							minWidth="24"
							minHeight="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-play-icon lucide-play">
							<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
						</svg>
						<svg
							style={{
								minWidth: "100%",
								minHeight: "100%",
								transitionDuration: "500ms",
								transitionProperty: "all",
								filter: !isSpotifyPlaylistPage || !globalSteps ? "blur(4px)" : "none",
							}}
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-pause-icon lucide-pause">
							<rect x="14" y="3" width="5" height="18" rx="1" />
							<rect x="5" y="3" width="5" height="18" rx="1" />
						</svg>
					</div>
				</button>
				<label
					className="dancing-script-medium"
					style={{
						fontSize: "24px",
						lineHeight: "1.4",
						color: "#cac1ec",
						transitionDuration: "200ms",
						pointerEvents: "none",
                        transitionProperty: "all",
                        opacity: isSpotifyPlaylistPage ? "1" : "0",
					}}>
					Start
				</label>
                <label
					style={{
						fontSize: "18px",
						lineHeight: "1.4",
						color: "#cac1ec",
						transitionDuration: "200ms",
						pointerEvents: "none",
                        transitionProperty: "all",
                        marginTop: "-42px",
                        opacity: isSpotifyPlaylistPage ? "0" : "1",
					}}>
					Open a Spotify playlist to get started
				</label>
				{/* <div style={{ fontSize: "18px", marginBottom: "8px" }}>Queue is empty.</div> */}
				{/* <button
					sym="true"
					key="set"
					// onClick={() => setTab("set")}
					className=" flex drop-shadow-[0_0_0px_var(--accent)] hover:drop-shadow-[0_0_8px_var(--accent)] items-center justify-center gap-[8px] rounded-[10px]"
					style={{
						background: "var(--accent)",
						transitionDuration: "500ms",
						transitionProperty: "all",
						color: "var(--background)",
						paddingInline: "12px",
						paddingBlock: "8px",
					}}>
					<div className="text-card rounded-[10px]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							style={{
								height: "16px",
								width: "16px",
							}}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-import-icon lucide-import">
							<path d="M12 3v12" />
							<path d="m8 11 4 4 4-4" />
							<path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
						</svg>
					</div>
					Start
				</button> */}
				<div className="flex w-full justify-evenly"></div>
			</div>

			<div
				style={{
					width: "100%",
					paddingInline: "16px",
					marginTop: "-24px",
					paddingTop: "8px",
					paddingBottom: "16px",
					opacity: globalSteps > 0 ? "1" : "0",
					transitionProperty: "all",
					transitionDuration: "500ms",
				}}>
				<div
					style={{
						color: globalSteps > 0 ? "var(--accent)" : "rgba(139, 133, 161, 0)",
						width: "calc(full * 4px)",
						display: "flex",
						gap: "calc(2 * 4px)",
						transitionProperty: "all",
						transitionDuration: "200ms",
						alignItems: "center",
					}}>
					<svg
						style={{
							rotate: globalSteps > 0 ? "0deg" : "180deg",
							marginLeft: globalSteps > 0 ? "7px" : "-36px",
							zIndex: "10",
							transitionDuration: "600ms",
							transitionProperty: "all",
						}}
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-badge-check-icon lucide-badge-check">
						<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
						<path d="m9 12 2 2 4-4" />
					</svg>
					<div
						style={{
							backgroundColor: "#8b85a1",
							color: "#0c0b0f",
							width: "calc(10 * 4px)",
							height: "calc(10 * 4px)",
							transitionDuration: "600ms",
							borderRadius: "4px",
							zIndex: "0",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginLeft: globalSteps > 0 ? "-40px" : "",
							filter: globalSteps > 0 ? "drop-shadow(0 0 12px var(--accent)) blur(2px)" : "",
						}}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cog-icon lucide-cog">
							<path d="M11 10.27 7 3.34" />
							<path d="m11 13.73-4 6.93" />
							<path d="M12 22v-2" />
							<path d="M12 2v2" />
							<path d="M14 12h8" />
							<path d="m17 20.66-1-1.73" />
							<path d="m17 3.34-1 1.73" />
							<path d="M2 12h2" />
							<path d="m20.66 17-1.73-1" />
							<path d="m20.66 7-1.73 1" />
							<path d="m3.34 17 1.73-1" />
							<path d="m3.34 7 1.73 1" />
							<circle cx="12" cy="12" r="2" />
							<circle cx="12" cy="12" r="8" />
						</svg>
					</div>
					<label
						style={{
							transitionProperty: "all",
							fontWeight: 600,
							fontSize: "16px",
							transitionDuration: "200ms",
							color: globalSteps > 0 ? "var(--accent)" : "#8b85a1",
						}}>
						Open a Spotify playlist
					</label>
				</div>
				{songs.map((song, i) => (
					<>
						<div
							key={i + "-1"}
                            className="symply-fadein"
							id={"symply-ct-song-" + i}
							style={{
								marginTop: "calc(1 * 8 * 4px)",
								width: "calc(100%)",
								display: "flex",
								gap: "calc(2 * 4px)",
								transitionProperty: "all",
								transitionDuration: "200ms",
								alignItems: "center",
								// color: globalSteps > 5 * (i + 2) ? (failedTracks.has(i) ? "var(--destructive)" : "var(--accent)") : "rgba(139, 133, 161, 0)",
							}}>
							{/* <svg
								style={{
									rotate: globalSteps > 5 * (i + 2) ? "0deg" : "180deg",
									marginLeft: globalSteps > 5 * (i + 2) ? "0" : "-36px",
									zIndex: "10",
									transitionDuration: "600ms",
									transitionProperty: "all",
								}}
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-badge-check-icon lucide-badge-check">
								{failedTracks.has(i) ? (
									<>
										<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
										<line x1="15" x2="9" y1="9" y2="15" />
										<line x1="9" x2="15" y1="9" y2="15" />
									</>
								) : (
									<>
										<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
										<path d="m9 12 2 2 4-4" />
									</>
								)}
							</svg> */}
							<img src={song.img} style={{ borderRadius: "4px", width: "40px", height: "40px", objectFit: "cover", transitionDuration: "600ms", transitionProperty: "all", filter: `drop-shadow(0 0 16px var(--muted))` }} />
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									width: "100%",
									alignItems: "center",
									paddingRight: "calc(2 * 4px)",
								}}>
								<div style={{ display: "flex", flexDirection: "column" }}>
									<span style={{ fontWeight: "600", fontSize: "16px", color: "#cac1ec" }}>{song.name}</span>
									<span style={{ fontSize: "12px", color: "#8b85a1" }}>{song.artist}</span>
								</div>
								<span style={{ fontSize: "14px", color: "#8b85a1" }}>{song.duration > 60 ? `${Math.floor(song.duration / 60)}:${song.duration % 60 < 10 ? "0" : ""}${song.duration % 60}` : `${song.duration}`}</span>
							</div>
						</div>
					</>
				))}
			</div>
		</>
	);
}

export default Spotify;
