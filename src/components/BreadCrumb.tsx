import { IconFolderColored } from "./Icons/IconFolderColored";

export const BreadCrumb: React.FC<{
	className?: string;
	parts: Array<string>;
}> = ({ className, parts }) => {
	return (
		<nav
			className={`breadcrumb is-medium ${className}`}
			aria-label="breadcrumbs"
		>
			<ul>
				<li>
					<a href="#">
						<span className="icon is-small">
							<IconFolderColored />
						</span>
						<span>Files:</span>
					</a>
				</li>
				{parts.map((part) => (
					<li>
						<a href={`${window.location.href}/${part}`}>
							<span className="icon is-small">
								<IconFolderColored />
							</span>
							<span>{part}</span>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
