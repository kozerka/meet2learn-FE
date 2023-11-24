import { dashboardLinks } from '../../../data';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useState } from 'react';
import { LuArrowLeftSquare, LuArrowRightSquare } from 'react-icons/lu';
import { ToggleIcon, SidebarStyled, Nav, NavLink, DashboardMenu } from './Sidebar.styled';
const Sidebar = () => {
	const [expanded, setExpanded] = useState(false);
	return (
		<>
			<ToggleIcon expanded={expanded} onClick={() => setExpanded(!expanded)}>
				{expanded ? <LuArrowLeftSquare size={'2.5rem'} /> : <LuArrowRightSquare size={'2.5rem'} />}
			</ToggleIcon>
			<SidebarStyled expanded={expanded}>
				<DashboardMenu>
					<Nav>
						{dashboardLinks.map((link, index) => (
							<NavLink
								key={index}
								to={link.path}
								className={({ isActive }) => (isActive ? 'active' : '')}
								end
							>
								<div style={{ marginLeft: '2rem' }}>{link.icon}</div>
								<span>{link.name}</span>
							</NavLink>
						))}
					</Nav>
					<NavLink to={'/'}>
						<div style={{ marginLeft: '2rem' }}>
							<RiLogoutCircleRLine size={'1.5rem'} />
						</div>
						<span>Logout</span>
					</NavLink>
				</DashboardMenu>
			</SidebarStyled>
		</>
	);
};

export default Sidebar;
