import { FC } from "react";
type DetailsBoxProps = {
	className?: string;
	Icon: FC;
	text: string;
	subText: string;
};

export const DetailsBox = ({
	className,
	Icon,
	text,
	subText,
}: DetailsBoxProps) => {
	return (
		<li
			className={`hover:scale-y-110 first:rounded-l-2xl last:rounded-r-2xl border-r-0 last:border-r-2 flex-grow flex justify-center items-center cursor-pointer transition-all duration-150 border-2 border-black  h-24 border-l-2 flex-col-reverse align-middle ${className}`}
		>
			<span className="mb-1 font-thin">{subText}</span>
			<div className="flex flex-row items-center text-xl font-bold align-middle">
				<Icon /> &nbsp; <span>{text}</span>
			</div>
		</li>
	);
};
