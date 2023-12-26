type ProgressProps = {
	total: number;
	done: number;
	eta?: string;
	fPath?: string;
	progColor?: "is-primary" | "is-link" | "is-danger";
	speed?: string;
};

function formatBytes(bytes: number, decimals = 2) {
	if (bytes === 0) return "0 Bytes";

	const k = 1024;
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	const i = Math.floor(Math.log(bytes) / Math.log(k));
	const formattedSize = parseFloat(
		(bytes / Math.pow(k, i)).toFixed(decimals)
	);

	return `${formattedSize} ${sizes[i]}`;
}

export const ProgressBar = ({
	total,
	done,
	eta,
	fPath,
	speed,
	progColor = "is-primary",
}: ProgressProps) => {
	const percentage = ((done * 100) / total).toFixed(1);
	return (
		<div className="w-2/3 flex flex-col space-y-2">
			<div className="flex flex-row justify-between">
				<span className="font-thin text-center">
					<span className="font-bold">{formatBytes(done)}</span>
					&nbsp; OF &nbsp;
					<span className="font-bold">{formatBytes(total)}</span>
				</span>
				{speed && (
					<span className="text-sm font-semibold text-slate-600">
						{speed}
					</span>
				)}
				<span>{percentage}%</span>
			</div>
			<progress
				className={`progress ${progColor}`}
				value={percentage}
				max="100"
			>
				{percentage}
			</progress>
			<div className="flex flex-row justify-between">
				{fPath && (
					<span className="text-sm font-thin text-slate-600">
						{fPath}
					</span>
				)}
				{eta && (
					<span className="font-thin  items-center  text-sm pl-5">
						<span className="font-semibold">{eta}</span> &nbsp;
						Remaining...
					</span>
				)}
			</div>
		</div>
	);
};
