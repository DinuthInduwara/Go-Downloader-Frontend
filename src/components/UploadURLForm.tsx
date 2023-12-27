import { IconLink } from "./Icons/IconLink";
import { IconYoutube } from "./Icons/IconYoutube";
import { UrlInputBox } from "./UrlInputBox";
import { NotificationStack } from "../components/NotificationStack";
import { NotificationBox } from "../components/NotificationBox";

export const UploadURLForm = ({
	notications,
	setNotications,
}: {
	notications: Array<string>;
	setNotications: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full space-y-8">
			<NotificationStack>
				{notications?.map((notification) => (
					<NotificationBox onClose={setNotications}>
						{notification}
					</NotificationBox>
				))}
			</NotificationStack>
			<UrlInputBox
				task="direct-download"
				Icon={<IconLink />}
				setNotications={setNotications}
				title="Direct Link"
				textsm="eg : www.example.com/random_video.mp4"
				color="is-primary"
			/>
			<UrlInputBox
				task="yt-dlp"
				setNotications={setNotications}
				Icon={<IconYoutube />}
				title="YT-DLP + Video Streaming Sites"
				textsm="eg : Youtube, TikTok, Facebook, Instergram, + ..."
				color="is-danger"
			/>
			<UrlInputBox
				task="streamtape"
				setNotications={setNotications}
				Icon={<IconLink />}
				title="Streamtape"
				textsm="eg : www.example.com/random_video.mp4"
				color="is-link"
			/>
		</div>
	);
};
