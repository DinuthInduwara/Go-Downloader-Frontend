import { addDownloadTask } from "../utils/UtilFuncs";
import { useState } from "react";

type UrlInputBoxProps = {
	title: string;
	Icon: JSX.Element;
	textsm: string;
	color: "is-primary" | "is-danger" | "is-link";
	task: "yt-dlp" | "direct-download" | "streamtape";
	setNotications: React.Dispatch<React.SetStateAction<string[]>>;
};

export const UrlInputBox = ({
	Icon,
	setNotications,
	title,
	textsm,
	color,
	task,
}: UrlInputBoxProps) => {
	const [url, setUrl] = useState("");
	return (
		<div className="w-2/3 border-2 border-purple-500 rounded-md">
			<label className="m-4 text-gray-600 text-md">{title}</label>
			<div className="m-4 control has-icons-left has-icons-right">
				<div className="flex flex-row space-x-3">
					<input
						className={`input ${color}`}
						type="url"
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						placeholder={title}
					/>
					<button
						onClick={async () => {
							const msg = await addDownloadTask(url, task);
							msg && setNotications((tasks) => [...tasks, msg]);
						}}
						className={`button text-center ${color}`}
					>
						+
					</button>
				</div>

				<span className="icon is-small is-left">{Icon}</span>
				<span className="icon is-small is-right">
					<i className="fas fa-check"></i>
				</span>
				<p className="text-gray-400 help">{textsm}</p>
			</div>
		</div>
	);
};
