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

export const Dashboard = () => {
	return (
		<WhiteBoard className="flex items-center justify-center py-32 pt-20">
			<DetailSpecBox>
				<DetailsBox
					text="CPU"
					Icon={IconCPU}
					subText="2 Cores"
					className="bg-purple-200 hover:bg-white"
				/>
				<DetailsBox
					text="RAM"
					Icon={IconRam}
					subText="2 GB"
					className="bg-purple-200 hover:bg-white"
				/>
				<DetailsBox
					text="STORAGE"
					Icon={IconStorage}
					subText="2.6 GB"
					className="bg-purple-200 hover:bg-white"
				/>
				<DetailsBox
					text="UP/DOWN"
					Icon={IconNetwork}
					subText="124kbps/300kbps"
					className="bg-purple-200 hover:bg-white"
				/>
			</DetailSpecBox>

			<br />
				<ProgressBar total={1998928329} done={1998928329 / 2}  className="border-2 p-4 rounded-full shadow-lg hover:scale-x-105 transition-all duration-150 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"/>

			<br />
			<br />
			<DetailSpecBox>
				<DetailsBox
					text="Folders"
					Icon={IconFolder}
					subText="124"
					className="bg-yellow-300 hover:bg-white"
				/>
				<DetailsBox
					text="Files"
					Icon={IconFloppy}
					subText="221"
					className="bg-yellow-300 hover:bg-white"
				/>
				<DetailsBox
					text="Data Usage"
					Icon={IconDataUsage}
					subText="34 GB"
					className="bg-yellow-300 hover:bg-white"
				/>
			</DetailSpecBox>
			<br />
			<br />
			<h1 className="my-3 font-semibold text-xl hover:scale-y-110 cursor-pointer">
				<u>
					<i>Active Tasks</i>
				</u>
			</h1>
			<DetailSpecBox>
				<DetailsBox
					text="Rclone Transfers"
					Icon={IconCompare}
					subText="124"
					className="bg-blue-500 hover:bg-white"
				/>
				<DetailsBox
					text="Download Tasks"
					Icon={IconDownload2}
					subText="221"
					className="bg-blue-500 hover:bg-white"
				/>
			</DetailSpecBox>
		</WhiteBoard>
	);
};
