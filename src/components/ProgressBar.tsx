import { formatBytes } from "../utils/UtilFuncs";

type ProgressProps = {
	total: number | undefined;
	done: number | undefined;
	eta?: string;
	fPath?: string;
	progColor?: "is-primary" | "is-link" | "is-danger";
	speed?: string;
	className?: string;
};

export const ProgressBar = ({
	total = 0,
	done = 0,
	eta,
	fPath,
	speed,
	className,
	progColor = "is-primary",
}: ProgressProps) => {
	const percentage = (done * 100) / total;
	return (
		<div className={`w-2/3 flex flex-col space-y-2 ${className}`}>
			<div className="flex flex-row justify-between">
				<span className="font-thin text-center">
					<span className="font-bold">{formatBytes(done)}</span>
					&nbsp; OF &nbsp;
					<span className="font-bold">{formatBytes(total)}</span>
				</span>
				{speed && (
					<span className="text-sm font-semibold text-slate-600">
						{percentage === 100 ? "Compeleted" : speed}
					</span>
				)}
				<span>{percentage.toFixed(1)}%</span>
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
					<span className="items-center pl-5 text-sm font-thin">
						<span className="font-semibold">{eta}</span> &nbsp;
						Remaining...
					</span>
				)}
			</div>
		</div>
	);
};
