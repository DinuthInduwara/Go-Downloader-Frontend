import { WhiteBoard } from "../components/WhiteBoard";
import { BreadCrumb } from "../components/BreadCrumb";
import { IconSearch } from "../components/Icons/IconSearch";
import FileItem from "../components/FileItem";

export const FileManager = () => {
	return (
		<WhiteBoard>
			<BreadCrumb className="p-4" parts={[]} />

			<div className="flex items-center justify-center w-full ">
				<div className="w-5/6 field">
					<div className="w-full control has-icons-left has-icons-right">
						<input
							className="w-full input is-link"
							type="text"
							placeholder="Text input"
						/>
						<span className="icon is-small is-left">
							<IconSearch />
						</span>
					</div>
					<div className="w-full my-4 space-y-2">
						<FileItem name="NewVideo" size="" dir />
						<FileItem name="NewVideo.mp4" size="4 GB" />
						<FileItem name="NewVideo.zip" size="4 GB" />
						<FileItem name="NewVideo.png" size="4 GB" />
						<FileItem name="NewVideo.mp3" size="4 GB" />
						<FileItem name="NewVideo.mp3" size="4 GB" />
					</div>
				</div>
			</div>
		</WhiteBoard>
	);
};
