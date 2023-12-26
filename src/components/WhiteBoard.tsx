import { ReactNode, FC } from "react";

interface WhiteBoardProps {
	children: ReactNode;
	className?: string;
}
export const WhiteBoard: FC<WhiteBoardProps> = ({ children, className }) => {
	return (
		<div className="w-full flex  items-center flex-col min-h-screen">
			<div
				className={`flex flex-col mt-10 shadow-2xl shadow-white min-h-screen h-fit rounded-md w-11/12 bg-white ${className}`}
			>
				{children}
			</div>
		</div>
	);
};
