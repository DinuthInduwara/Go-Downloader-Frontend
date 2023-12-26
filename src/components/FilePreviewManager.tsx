import FileItem, { FileItemProps } from "./FileItem";
import { IconSearch } from "./Icons/IconSearch";
import { useState } from "react";

interface FilePreviewManagerProps {
	files: Array<FileItemProps>;
}

export const FilePreviewManager = ({ files }: FilePreviewManagerProps) => {
	const [searchKWD, setSearch] = useState("");
	return (
		<div className="flex items-center justify-center w-full ">
			<div className="w-5/6 field">
				<div className="w-full control has-icons-left has-icons-right">
					<input
						className="w-full input is-link"
						type="text"
						value={searchKWD}
						placeholder="Text input"
						onChange={(e) => setSearch(e.target.value)}
					/>
					<span className="icon is-small is-left">
						<IconSearch />
					</span>
				</div>
				<div className="w-full my-4 space-y-2">
					{files.map(
						(file) =>
							file.name
								.toLowerCase()
								.includes(searchKWD.toLowerCase()) && (
								<FileItem {...file} />
							)
					)}
				</div>
			</div>
		</div>
	);
};
