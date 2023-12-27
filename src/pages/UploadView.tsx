import { UploadURLForm } from "../components/UploadURLForm";
import { WhiteBoard } from "../components/WhiteBoard";
import { DownloadTaskBox } from "../components/DownloadTaskBox";
import { useState, useEffect } from "react";
import { fetchJsonData } from "../utils/UtilFuncs";

type TdownloadTask = {
	size: number;
	downloaded: number;
	fname: string;
	speed: number;
	url: string;
	paused: boolean;
	error: null | string;
};

export const UploadView = () => {
	const [notications, setNotications] = useState<Array<string>>([]);
	const [uploadTasks, setUploadTasks] = useState<TdownloadTask[]>([]);

	useEffect(() => {
		const setData = async () => {
			const data = await fetchJsonData("/api/status");
			setUploadTasks(data.downloads);
		};
		setData();

		// Fetch data every 10 seconds
		const interval = setInterval(() => {
			setData();
		}, 3000);

		// Clean up the interval to prevent memory leaks
		return () => clearInterval(interval);
	}, []);

	return (
		<WhiteBoard>
			<h1 className="pt-5 pl-10 font-serif text-xl underline ">
				Download Engine 2.0.
			</h1>
			<div className="w-full mt-10 ">
				<UploadURLForm
					notications={notications}
					setNotications={setNotications}
				/>
			</div>
			<h1 className="pt-5 pl-10 mt-10 font-serif text-xl underline ">
				Download Tasks
			</h1>
			<div className="flex flex-col items-center justify-center w-full pb-16 my-10 space-y-4 px-7">
				{uploadTasks.map((task) => (
					<DownloadTaskBox
						setNotications={setNotications}
						url={task.url}
						active={task.paused}
						speed={task.speed}
						done={task.downloaded}
						total={task.size}
						fName={task.fname}
					/>
				))}
			</div>
		</WhiteBoard>
	);
};
