import { spotifyURL, styles } from "./css";

function YT({ globalSteps, setGlobalSteps, totalSteps, failedTracks, steps, trackSteps, songs }) {
	return (
		<>
			{/* <div className="mt-2 text-accent/80  text-xs  ">Do not interact with the page or switch tabs when the process is running.</div> */}
			<div
				className="flex flex-col text-muted min-h-full font-semibold w-full items-center justify-center"
				style={{
					gap: "10px",
					marginBottom: "-100%",
					opacity: songs.length > 0 ? "0" : "1",
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
				{/* <div style={{ fontSize: "18px", marginBottom: "8px" }}>Queue is empty.</div> */}
				<div className="flex w-full justify-evenly">
					<button
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
						Import Config
					</button>
					<button
						sym="true"
						key="set"
						onClick={() => window.open(spotifyURL, "_blank")}
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
								class="lucide lucide-shredder-icon lucide-shredder">
								<path d="M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" />
								<path d="M14 2v5a1 1 0 0 0 1 1h5" />
								<path d="M10 22v-5" />
								<path d="M14 19v-2" />
								<path d="M18 20v-3" />
								<path d="M2 13h20" />
								<path d="M6 20v-3" />
							</svg>
						</div>
						Create Config
					</button>
				</div>
			</div>

			<div
				style={{
					width: "100%",
					paddingInline: "16px",
					marginTop: "-24px",
					paddingTop: "8px",
					paddingBottom: "16px",
					opacity: songs.length > 0 ? "1" : "0",
					transitionProperty: "all",
					transitionDuration: "500ms",
				}}>
				<div
					style={{
						color: globalSteps > 5 ? "var(--accent)" : "rgba(139, 133, 161, 0)",
						width: "calc(full * 4px)",
						display: "flex",
						gap: "calc(2 * 4px)",
						transitionProperty: "all",
						transitionDuration: "200ms",
						alignItems: "center",
					}}>
					<svg
						style={{
							rotate: globalSteps > 5 ? "0deg" : "180deg",
							marginLeft: globalSteps > 5 ? "0" : "-36px",
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
							marginLeft: globalSteps > 5 ? "-40px" : "",
							filter: globalSteps > 5 ? "drop-shadow(0 0 12px var(--accent)) blur(2px)" : "",
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
							color: globalSteps > 5 ? "var(--accent)" : "#8b85a1",
						}}>
						Configure & Create a Playlist
					</label>
				</div>
				<div
					style={{
						width: "calc(100%)",
						transitionDuration: "500ms",
						transitionProperty: "all",
						pointerEvents: "none",
						maxHeight: "calc(10 * 4px)",
						paddingLeft: "calc(2 * 4px)",
						paddingRight: "calc(2 * 4px)",
						scale: globalSteps > 5 || globalSteps === 0 ? "1 0" : "1",
						marginBottom: globalSteps > 5 || globalSteps === 0 ? "-40px" : "0",
					}}>
					<div
						style={{
							display: "flex",
							marginBottom: "calc(-1 * 3 * 4px)",
							marginTop: "calc(1 * 6 * 4px)",
							width: "calc(100%)",
						}}>
						{steps.slice(0, 5).map((step, i) => (
							<div
								className="group"
								style={{
									marginLeft: `calc(4px * ${2.9 - i * 0.7})`,
									left: `calc(${i + 1} / 6 * 100%)`,
									width: "calc(2 * 4px)",
									position: "absolute",
									pointerEvents: "auto",
									color: "#8b85a1",
									transform: "translateX(-50%)",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
								}}>
								<div
									className="group-hover:bg-accent bg-[rgba(202,193,236,0.4)]"
									style={{
										minWidth: "8px",
										minHeight: "8px",
										borderRadius: "4px",
										transitionDuration: "200ms",
									}}
								/>
								<label
									className="opacity-0 group-hover:opacity-100"
									style={{
										opacity: globalSteps == i + 1 ? "1" : "",
										minWidth: "fit-content",
										whiteSpace: "nowrap",
										marginTop: "calc(1 * 3 * 4px)",
										pointerEvents: "none",
										transitionDuration: "200ms",
									}}>
									{steps[i]}
								</label>
							</div>
						))}
					</div>
					<div style={styles.stepsRow}>
						<div
							style={{
								...styles.progressFill,
								minWidth: `calc(${Math.min(globalSteps, 6)} / 6 * 100%)`,
							}}
						/>
						<div style={styles.progressTick} />
						<div style={styles.progressRemaining} />{" "}
					</div>
				</div>
				{songs.map((song, i) => (
					<>
						<div
							key={i + "-1"}
							id={"symply-ct-song-" + i}
							style={{
								marginTop: "calc(1 * 8 * 4px)",
								width: "calc(100%)",
								display: "flex",
								gap: "calc(2 * 4px)",
								transitionProperty: "all",
								transitionDuration: "200ms",
								alignItems: "center",
								color: totalSteps > 5 * (i + 2) ? (failedTracks.has(i) ? "var(--destructive)" : "var(--accent)") : "rgba(139, 133, 161, 0)",
							}}>
							<svg
								style={{
									rotate: totalSteps > 5 * (i + 2) ? "0deg" : "180deg",
									marginLeft: totalSteps > 5 * (i + 2) ? "0" : "-36px",
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
							</svg>
							<img src={song.img} style={{ borderRadius: "4px", width: "40px", height: "40px", objectFit: "cover", transitionDuration: "600ms", transitionProperty: "all", marginLeft: totalSteps > 5 * (i + 2) ? "-40px" : "", filter: totalSteps > 5 * (i + 2) ? `drop-shadow(0 0 12px ${failedTracks.has(i) ? "var(--destructive)" : "var(--accent)"}) blur(2px) brightness(60%)` : "" }} />
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
						<div
							key={i + "-2"}
							id={"symply-ct-song-" + i + "-steps"}
							style={{
								transitionDuration: "500ms",
								transitionProperty: "all",
								scale: totalSteps > 5 * (i + 2) || totalSteps <= 5 * (i + 1) ? "1 0" : "1",
								marginBottom: totalSteps > 5 * (i + 2) || totalSteps <= 5 * (i + 1) ? "-40px" : "0",
								width: "calc(100%)",
								pointerEvents: "none",
								maxHeight: "calc(10 * 4px)",
								paddingLeft: "calc(2 * 4px)",
								paddingRight: "calc(2 * 4px)",
							}}>
							<div
								style={{
									display: "flex",
									marginBottom: "-12px",
									marginTop: "24px",
									width: "100%",
								}}>
								{steps.slice(0, 5).map((step, x) => (
									<div
										style={{
											marginLeft: `calc(4px * ${2.9 - x * 0.7})`,
											left: `calc(${x + 1} / 6 * 100%)`,
											width: "calc(2 * 4px)",
											position: "absolute",
											pointerEvents: "auto",
											color: "#8b85a1",
											transform: "translateX(-50%)",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											justifyContent: "center",
										}}
										className="group">
										<div
											className="group-hover:bg-accent bg-[rgba(202,193,236,0.4)]"
											style={{
												width: "calc(2 * 4px)",
												height: "calc(2 * 4px)",
												borderRadius: "4px",
												transitionDuration: "200ms",
											}}
										/>
										<label
											className="group-hover:opacity-100 opacity-0"
											style={{
												...{
													marginTop: "calc(1 * 3 * 4px)",
													pointerEvents: "none",
													transitionDuration: "200ms",
												},
												whiteSpace: "nowrap",
												minWidth: "fit-content",
												opacity: totalSteps == 5 * (i + 1) + x + 1 ? "1" : "",
											}}>
											{trackSteps[x]}
										</label>
									</div>
								))}
							</div>
							<div style={styles.stepsRow}>
								<div
									style={{
										...styles.progressFill,
										minWidth: `calc(${Math.min(totalSteps - 5 * (i + 1), 6)} / 6 * 100%)`,
									}}
								/>
								<div style={styles.progressTick} />
								<div style={styles.progressRemaining} />{" "}
							</div>
						</div>
					</>
				))}
			</div>
		</>
	);
}

export default YT;
