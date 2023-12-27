import {
	calculateETA,
	fetchTextData,
	formatBytes,
	formatTime,
} from "../utils/UtilFuncs";
import { IconPause } from "./Icons/IconPause";
import { IconPlay } from "./Icons/IconPlay";
import { ProgressBar } from "./ProgressBar";
import { useState } from "react";

type DownloadTaskBoxProps = {
	url: string;
	speed: number;
	done: number;
	total: number;
	fName: string;
	active?: boolean;
	setNotications: React.Dispatch<React.SetStateAction<string[]>>;
};

export const DownloadTaskBox = ({
	active,
	done,
	fName,
	speed,
	url,
	total,
	setNotications,
}: DownloadTaskBoxProps) => {
	const [isCancelling, setCancel] = useState(false);
	const [isPausing, setPause] = useState(false);

	const cancelOrPause = async (url: string, task: "pause" | "cancel") => {
		const formData = new URLSearchParams();
		formData.append("url", url);
		const resp = await fetchTextData("/api/" + task, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: formData,
		});
		switch (task) {
			case "pause":
				setPause(false);
				break;
			case "cancel":
				setCancel(false);
				break;
		}
		resp && setNotications((noti) => [...noti, resp]);
	};
	const percentage = (done * 100) / total;

	return (
		<div className="flex flex-row items-center justify-center w-full py-4 space-x-10 overflow-hidden transition-all duration-200 bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer hover:-translate-y-2 hover:ring-8">
			<ProgressBar
				speed={`${formatBytes(speed)} /s`}
				done={done}
				total={total}
				eta={formatTime(calculateETA(total, done, speed))}
				fPath={fName}
				progColor="is-link"
			/>
			<div className="flex flex-row space-x-2">
				<button
					onClick={() => {
						setCancel(!isCancelling);
						cancelOrPause(url, "cancel");
					}}
					className={`button is-danger ${
						isCancelling && "is-loading"
					}`}
				>
					X
				</button>
				{percentage !== 100 && (
					<button
						onClick={() => {
							setPause(!isPausing);
							cancelOrPause(url, "pause");
						}}
						className={`button is-primary ${
							isPausing && "is-loading"
						}`}
					>
						{active ? <IconPause /> : <IconPlay />}
					</button>
				)}
			</div>
		</div>
	);
};
