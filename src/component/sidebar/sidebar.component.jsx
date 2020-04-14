import React from "react";
import "./sidebar.style.scss";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const SidebarItem = ({
	name,
	label,
	items: subitems,
	depth,
	depthStep,
	...other
}) => {
	return (
		<React.Fragment>
			<ListItem button dense {...other}>
				<ListItemText style={{ paddingLeft: depth * depthStep }}>
					{label}
				</ListItemText>
			</ListItem>
			{Array.isArray(subitems) ? (
				<List disablePadding dense>
					{subitems.map((subitem) => (
						<SidebarItem
							key={subitem.name}
							depth={depth + 1}
							depthStep={depthStep}
							{...subitem}
						/>
					))}
				</List>
			) : null}
		</React.Fragment>
	);
};

const Sidebar = ({ items, depth = 0, depthStep = 15 }) => {
	return (
		<div className="sidebar">
			<List disablePadding dense>
				{items.map((item) => {
					const { name, label, items: subitems, ...other } = item;
					return (
						<SidebarItem
							depth={depth}
							depthStep={depthStep}
							key={name}
							label={label}
							items={subitems}
							{...other}
						/>
					);
				})}
			</List>
		</div>
	);
};

export default Sidebar;
