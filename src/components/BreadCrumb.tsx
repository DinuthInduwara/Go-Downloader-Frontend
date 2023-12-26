import { IconFolderColored } from "./Icons/IconFolderColored";

export const BreadCrumb: React.FC<{
	className?: string;
	parts: Array<string>;
	size?: "is-medium" | "is-small";
}> = ({ className, parts, size = "is-medium" }) => {
	return (
		<nav
			className={`breadcrumb ${size} ${className}`}
			aria-label="breadcrumbs"
		>
			<ul>
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
