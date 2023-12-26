import { useEffect } from "react";
import "plyr/dist/plyr.css"; // Import Plyr CSS
import Plyr from "plyr";

const VideoPlayer = ({ source }: { source: string }) => {
	useEffect(() => {
		const player = new Plyr("#player", {
			// Plyr options
			controls: [
				"play",
				"progress",
				"settings",
				"current-time",
				"current-time",
				"mute",
				"volume",
				"fullscreen",
			],
			// Add additional options here
		});

		return () => {
			if (player) {
				player.destroy();
			}
		};
	}, [source]);

	return (
		<div className="plyr__video-embed">
			<video controls id="player">
				<source src={source} type="video/mp4" />
				{/* Add additional sources if needed */}
			</video>
		</div>
	);
};

export default VideoPlayer;
