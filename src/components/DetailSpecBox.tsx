import { FC, ReactNode } from "react";

interface DetailSpecBoxProps {
	className?: string;
	children?: ReactNode;
}
export const DetailSpecBox: FC<DetailSpecBoxProps> = ({
	children,
	className,
}) => {
	return (
		<ul className={`flex flex-row justify-between w-11/12 ${className}`}>
			{children}
		</ul>
	);
};
