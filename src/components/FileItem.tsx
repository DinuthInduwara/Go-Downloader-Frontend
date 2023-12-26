import IconPhoto from "./Icons/IconPhoto";
import { IconMusic } from "./Icons/IconMusic";
import { IconVideo } from "./Icons/IconVideo";
import { IconDocument } from "./Icons/IconDocument";
import { IconLink } from "./Icons/IconLink";
import { IconDownload } from "./Icons/IconDownload";
import { IconBin } from "./Icons/IconBin";
import { IconFolderColored } from "./Icons/IconFolderColored";
import VideoPlayer from "../components/VideoPlayer";
import { useState } from "react";

interface FileItemProps {
	name: string;
	size: string;
	dir?: boolean;
}
function detectFileType(fileName: string) {
	const fileExtension = fileName.split(".").pop()?.toLowerCase();
	if (!fileExtension) return false;
	const videoExtensions = ["mp4", "avi", "mkv", "mov"];
	const audioExtensions = ["mp3", "wav", "ogg", "aac"];
	const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];

	if (videoExtensions.includes(fileExtension)) {
		return "Video";
	} else if (audioExtensions.includes(fileExtension)) {
		return "Audio";
	} else if (imageExtensions.includes(fileExtension)) {
		return "Photo";
	} else return;
}
const IconDetect = (filename: string) => {
	const type = detectFileType(filename);
	switch (type) {
		case "Video":
			return <IconVideo />;
		case "Audio":
			return <IconMusic />;
		case "Photo":
			return <IconPhoto />;
		default:
			return <IconDocument />;
	}
};

export default function FileItem({ name, size, dir = false }: FileItemProps) {
	const [clicked, onclicked] = useState(false);
	return (
		<div className="flex flex-col items-center justify-center w-full py-4 space-x-10 overflow-hidden transition-all duration-200 bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer hover:-translate-y-1 hover:ring-2">
			<div
				className="flex flex-row items-center justify-between w-full px-5"
				onClick={() => onclicked(!clicked)}
			>
				<span className="flex flex-row space-x-4">
					{!dir ? IconDetect(name) : <IconFolderColored />}
					<span className="font-thin">{name}</span>
				</span>
				<span className="font-thin">{size}</span>
				<div className="flex flex-row space-x-3">
					<span className="p-1 transition-all duration-300 rounded-sm ring-2 ring-slate-200 hover:bg-slate-200 hover:-translate-y-1">
						<IconLink className="text-blue-700 hover:scale-110" />
					</span>
					<span className="p-1 transition-all duration-300 rounded-sm ring-2 ring-slate-200 hover:bg-slate-200 hover:-translate-y-1">
						<IconBin className="text-red-600 hover:scale-110" />
					</span>
					{!dir && (
						<span className="p-1 transition-all duration-300 rounded-sm ring-2 ring-slate-200 hover:bg-slate-200 hover:-translate-y-1">
							<IconDownload className="text-green-600 hover:scale-110" />
						</span>
					)}
				</div>
			</div>

			{clicked &&
				(detectFileType(name) == "Video" ||
					detectFileType(name) == "Audio") && (
					<div className="w-2/3 my-10">
						<VideoPlayer
							source={`${window.location.href}/${name}`}
						/>
					</div>
				)}
		</div>
	);
}
