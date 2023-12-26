import IconHome from "./Icons/IconHome";
import { IconUpload } from "./Icons/IconUpload";
import { IconSettings } from "./Icons/IconSettings";
import { IconFastForward } from "./Icons/IconFastForward";
import { IconFolder } from "./Icons/IconFolder";
import { IconCloudUpload } from "./Icons/IconCloudUpload";
import { Link } from "react-router-dom";

export const SideBar = () => {
	return (
		<div className="h-full bg-purple-500 border-2 border-purple-800">
			<div className="py-3">
				<IconFastForward />
			</div>
			<hr className="h-2 my-3 bg-purple-800 border-2 border-purple-800" />
			<ul className="h-full px-3 space-y-11">
				<li className="sidebar-item">
					<Link
						to="/"
						className="flex flex-row py-2 drop-shadow-2xl "
					>
						<IconHome />
						&nbsp;Dashboard
					</Link>
				</li>
				<li className="sidebar-item">
					<Link
						to="/upload"
						className="flex flex-row py-2 drop-shadow-2xl "
					>
						<IconUpload />
						&nbsp;Upload
					</Link>
				</li>
				<li className="sidebar-item">
					<Link
						to="/filemanager"
						className="flex flex-row py-2 drop-shadow-2xl "
					>
						<IconFolder />
						&nbsp;Files
					</Link>
				</li>
				<li className="sidebar-item">
					<Link
						to="/rclone"
						className="flex flex-row py-2 drop-shadow-2xl "
					>
						<IconCloudUpload />
						&nbsp;Rclone
					</Link>
				</li>
				<li className="sidebar-item">
					<Link
						to="/settings"
						className="flex flex-row py-2 drop-shadow-2xl "
					>
						<IconSettings />
						&nbsp;Settings
					</Link>
				</li>
			</ul>
		</div>
	);
};
