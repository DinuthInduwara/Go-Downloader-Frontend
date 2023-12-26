import { useState, FC } from "react";
import { IconDropUpDown } from "./Icons/IconDropUpDown";

interface DropDownButtonProps {
	defaultText: string;
	dropdown: Array<string>;
	onClick?: (text: string) => void;
	selected: string;
}

export const DropDownButton: FC<DropDownButtonProps> = ({
	defaultText,
	dropdown,
	onClick,
	selected,
}) => {
	const [isDropdown, dropDownOpen] = useState(false);
	return (
		<div className={`dropdown ${isDropdown && "is-active"}`}>
			<div className="dropdown-trigger">
				<button
					className="button"
					aria-haspopup="true"
					aria-controls="dropdown-menu3"
					onClick={() => dropDownOpen(!isDropdown)}
				>
					<span>{selected || defaultText}</span>

					<span
						className={`icon is-small ${
							isDropdown && "rotate-180"
						}`}
					>
						<IconDropUpDown />
					</span>
				</button>
			</div>
			<div className="dropdown-menu" id="dropdown-menu3" role="menu">
				<div className="dropdown-content">
					{dropdown.map((item) => (
						<button
							onClick={(event) => {
								onClick &&
									onClick(
										event.currentTarget.textContent || ""
									);
								dropDownOpen(!isDropdown);
							}}
							className="dropdown-item"
						>
							{item}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
