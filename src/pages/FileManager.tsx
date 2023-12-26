import { WhiteBoard } from "../components/WhiteBoard";
import { BreadCrumb } from "../components/BreadCrumb";
import { FilePreviewManager } from "../components/FilePreviewManager";

export const FileManager = () => {
	return (
		<WhiteBoard>
			<BreadCrumb className="p-4" parts={[]} />

			<FilePreviewManager
				files={[
					{ name: "somefile", size: "4 GB", dir: true },
					{ name: "somefile.mp3", size: "4 GB", preview:true },
					{ name: "somefile.mp4", size: "4 GB", preview:true },
					{ name: "somefile.txt", size: "4 GB", preview:true },
					{ name: "somefile.jpg", size: "4 GB", preview:true },
				]}
			/>
		</WhiteBoard>
	);
};
