import { FC, ReactNode } from "react";

interface NotificationBoxProps {
	children: ReactNode;
}

export const NotificationStack: FC<NotificationBoxProps> = ({ children }) => {
	return (
		<div className="fixed  top-10 right-10 z-20">
			<div>{children}</div>
		</div>
	);
};
