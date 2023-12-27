import { IconCPU } from "../components/Icons/IconCPU";
import { IconRam } from "../components/Icons/IconRam";
import { IconStorage } from "../components/Icons/IconStorage";
import { IconNetwork } from "../components/Icons/IconNetwork";
import { IconFolder } from "../components/Icons/IconFolder";
import { IconFloppy } from "../components/Icons/IconFloppy";
import { ProgressBar } from "../components/ProgressBar";
import { WhiteBoard } from "../components/WhiteBoard";
import { DetailSpecBox } from "../components/DetailSpecBox";
import { DetailsBox } from "../components/DetailsBox";
import { IconDataUsage } from "../components/Icons/IconDataUsage";
import { IconDownload2 } from "../components/Icons/IconDownload2";
import { IconCompare } from "../components/Icons/IconCompare";
import { useState, useEffect } from "react";
import { fetchJsonData, formatBytes } from "../utils/UtilFuncs";

interface SystemSpecs {
	cpu: number;
	mem_total: number;
	mem_used: number;
	disk_used: number;
	disk_total: number;
	down_size: number;
	down_speed: number;
	up_speed: number;
	net_usage: number;
	folder_count: number;
	file_count: number;
	download_tasks: number;
	rclone_tasks: number;
}

export const Dashboard = () => {
	const [jsonData, setJsonData] = useState<SystemSpecs>();

	useEffect(() => {
		const setData = async () => {
			const data = await fetchJsonData("/api/sys");
			setJsonData(data);
		};
		setData();

		// Fetch data every 10 seconds
		const interval = setInterval(() => {
			setData();
		}, 6000);

		// Clean up the interval to prevent memory leaks
		return () => clearInterval(interval);
	}, []);

	return (
		<WhiteBoard className="flex items-center justify-center py-32 pt-20">
			<DetailSpecBox>
				<DetailsBox
					text="CPU"
					Icon={IconCPU}
					subText={jsonData?.cpu}
					className="bg-purple-200 hover:bg-white"
				/>
				<DetailsBox
					text="RAM"
					Icon={IconRam}
					subText={`${formatBytes(jsonData?.mem_used)}/ ${formatBytes(
						jsonData?.mem_total
					)}`}
					className="bg-purple-200 hover:bg-white"
				/>
				<DetailsBox
					text="STORAGE"
					Icon={IconStorage}
					subText={formatBytes(jsonData?.down_size)}
					className="bg-purple-200 hover:bg-white"
				/>
				<DetailsBox
					text="UP/DOWN"
					Icon={IconNetwork}
					subText={`${formatBytes(
						jsonData?.up_speed
					)}/s - ${formatBytes(jsonData?.down_speed)}/s`}
					className="bg-purple-200 hover:bg-white"
				/>
			</DetailSpecBox>

			<br />
			<ProgressBar
				total={jsonData?.disk_total}
				done={jsonData?.disk_used}
				className="p-4 transition-all duration-150 border-2 rounded-full shadow-lg cursor-pointer hover:scale-x-105 hover:-translate-y-1 hover:shadow-2xl"
			/>

			<br />
			<br />
			<DetailSpecBox>
				<DetailsBox
					text="Folders"
					Icon={IconFolder}
					subText={jsonData?.folder_count}
					className="bg-yellow-300 hover:bg-white"
				/>
				<DetailsBox
					text="Files"
					Icon={IconFloppy}
					subText={jsonData?.file_count}
					className="bg-yellow-300 hover:bg-white"
				/>
				<DetailsBox
					text="Data Usage"
					Icon={IconDataUsage}
					subText={formatBytes(jsonData?.net_usage)}
					className="bg-yellow-300 hover:bg-white"
				/>
			</DetailSpecBox>
			<br />
			<br />
			<h1 className="my-3 text-xl font-semibold cursor-pointer hover:scale-y-110">
				<u>
					<i>Active Tasks</i>
				</u>
			</h1>
			<DetailSpecBox>
				<DetailsBox
					text="Rclone Transfers"
					Icon={IconCompare}
					subText={jsonData?.download_tasks}
					className="bg-blue-500 hover:bg-white"
				/>
				<DetailsBox
					text="Download Tasks"
					Icon={IconDownload2}
					subText={jsonData?.download_tasks}
					className="bg-blue-500 hover:bg-white"
				/>
			</DetailSpecBox>
		</WhiteBoard>
	);
};
