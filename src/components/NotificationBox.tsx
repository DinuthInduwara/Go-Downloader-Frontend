export const NotificationBox = ({
	children,
	className,
	onClose,
}: {
	children: string;
	className?: string;
	onClose?: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
	return (
		<div
			className={`bg-purple-50 hover:-translate-y-4 cursor-pointer duration-100 hover:translate-x-3 ring-2 p-6 rounded-lg shadow-purple-500 relative top-10 right-0 -mt-16 shadow-xl ${className} min-w-60`}
		>
			<button
				className="text-red-500 hover:text-white hover:bg-red-600 top-3 right-3 absolute rounded-full bg-slate-200"
				onClick={() => {
					onClose &&
						onClose((array) =>
							array?.filter((item) => item !== children)
						);
				}}
			>
				<svg
					className="fill-current h-6 w-6"
					role="button"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<title>Close</title>
					<path d="M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.228.469-1.697 0-.469-.469-.469-1.228 0-1.697l2.758-3.15-2.758-3.151c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.182l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.228 0 1.697l-2.758 3.151 2.758 3.15c.469.469.469 1.228 0 1.697z" />
				</svg>
			</button>
			<div className="flex items-center justify-between">
				<p className="text-gray-800 text-sm">{children}</p>
			</div>
		</div>
	);
};
