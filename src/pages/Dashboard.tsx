import { IconCPU } from "../components/Icons/IconCPU";
import { IconRam } from "../components/Icons/IconRam";
import { IconStorage } from "../components/Icons/IconStorage";
import { IconNetwork } from "../components/Icons/IconNetwork";
import { IconFolder } from "../components/Icons/IconFolder";
import { IconFloppy } from "../components/Icons/IconFloppy";
import { ProgressBar } from "../components/ProgressBar";
import { WhiteBoard } from "../components/WhiteBoard";

export const Dashboard = () => {
	return (
		<WhiteBoard className="items-center justify-center py-32 pt-20">
			<ul className="flex flex-row justify-between w-11/12 ">
				<li className="spec-box ">
					<span className="mb-1 font-thin">2 Cores</span>
					<div className="flex flex-row items-center text-xl font-bold align-middle">
						<IconCPU /> &nbsp; <span>CPU</span>
					</div>
				</li>
				<li className="spec-box ">
					<span className="mb-1 font-thin">2 GB</span>
					<div className="flex flex-row items-center text-xl font-bold align-middle">
						<IconRam /> &nbsp; <span>RAM</span>
					</div>
				</li>
				<li className="spec-box ">
					<span className="mb-1 font-thin">2.6 GB</span>
					<div className="flex flex-row items-center text-xl font-bold align-middle">
						<IconStorage /> &nbsp; <span>STORAGE</span>
					</div>
				</li>
				<li className="spec-box ">
					<span className="mb-1 font-thin">124kbps/300kbps</span>
					<div className="flex flex-row items-center text-xl font-bold align-middle">
						<IconNetwork /> &nbsp; <span>UP/DOWN</span>
					</div>
				</li>
			</ul>
			<br />
			<ProgressBar total={1998928329} done={1998928329 / 2} />
			<br />
			<br />
			<ul className="flex flex-row justify-between w-11/12 ">
				<li className="spec-special">
					<span className="mb-1 font-thin">124</span>
					<div className="flex flex-row items-center text-xl font-bold align-middle">
						<IconFolder /> &nbsp; <span>Folders</span>
					</div>
				</li>
				<li className="spec-special">
					<span className="mb-1 font-thin">221</span>
					<div className="flex flex-row items-center text-xl font-bold align-middle">
						<IconFloppy /> &nbsp; <span>Files</span>
					</div>
				</li>
			</ul>
		</WhiteBoard>
	);
};
