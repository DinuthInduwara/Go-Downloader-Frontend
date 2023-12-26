import { BreadCrumb } from "../components/BreadCrumb";
import { DetailSpecBox } from "../components/DetailSpecBox";
import { DetailsBox } from "../components/DetailsBox";
import { DropDownButton } from "../components/DropDownButton";
import { FilePreviewManager } from "../components/FilePreviewManager";
import { IconCompare } from "../components/Icons/IconCompare";
import { IconDataUsage } from "../components/Icons/IconDataUsage";
import { IconNetwork } from "../components/Icons/IconNetwork";
import { IconTimerGlass } from "../components/Icons/IconTimerGlass";
import { WhiteBoard } from "../components/WhiteBoard";
import { useState } from "react";

export const RcloneView = () => {
	const [selectedRemote, selectRemote] = useState<string>("");
	return (
		<WhiteBoard>
			<div className="flex items-center justify-center py-32 pt-20 flex-col">
				<DetailSpecBox>
					<DetailsBox
						text="Transfers"
						Icon={IconCompare}
						subText="124"
						className="bg-emerald-500 hover:bg-white"
					/>

					<DetailsBox
						text="NetUsage"
						Icon={IconDataUsage}
						subText="34 GB"
						className="bg-emerald-500 hover:bg-white"
					/>
					<DetailsBox
						text="ETA"
						Icon={IconTimerGlass}
						subText="3 H"
						className="bg-emerald-500 hover:bg-white"
					/>
					<DetailsBox
						text="Speed"
						Icon={IconNetwork}
						subText="3 mb/s"
						className="bg-emerald-500 hover:bg-white"
					/>
				</DetailSpecBox>
				<div className="flex flex-row justify-between w-full items-center px-10 py-7">
					<BreadCrumb
						size="is-small"
						className="p-4"
						parts={[selectedRemote, "videos", "tempory"]}
					/>
					<DropDownButton
						dropdown={["gd6", "gd7", "gd8", "unionc"]}
						defaultText="Select Remote"
						onClick={selectRemote}
						selected={selectedRemote}
					/>
				</div>
				{!selectedRemote ? (
					<p>No Remote Selected</p>
				) : (
					<FilePreviewManager
						files={[
							{ name: "somefile", size: "4 GB", dir:true },
							{ name: "somefile.mp3", size: "4 GB" },
							{ name: "somefile.mp4", size: "4 GB" },
							{ name: "somefile.txt", size: "4 GB" },
							{ name: "somefile.jpg", size: "4 GB" },
						]}
					/>
				)}
			</div>
		</WhiteBoard>
	);
};
