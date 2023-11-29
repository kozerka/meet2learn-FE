import { dashboardLinks } from '../../../data';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logoutUser } from '../../../store/slices/userSlice';
import { LuArrowLeftSquare, LuArrowRightSquare } from 'react-icons/lu';
import { ToggleIcon, SidebarStyled, Nav, NavLink, DashboardMenu } from './Sidebar.styled';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [expanded, setExpanded] = useState(false);
	const handleLogout = () => {
		dispatch(logoutUser());
		toast.success('Successfully logged out');
		navigate('/login');
	};
	return (
		<>
			<ToggleIcon $isExpanded={expanded} onClick={() => setExpanded(!expanded)}>
				{expanded ? <LuArrowLeftSquare size={'2.5rem'} /> : <LuArrowRightSquare size={'2.5rem'} />}
			</ToggleIcon>
			<SidebarStyled $isExpanded={expanded}>
				<DashboardMenu>
					<Nav>
						{dashboardLinks.map((link, index) => (
							<NavLink
								key={index}
								to={link.path}
								className={({ isActive }) => (isActive ? 'active' : '')}
								end={index === 0}
								$isExpanded={expanded}
							>
								<div style={{ marginLeft: '2rem' }}>{link.icon}</div>
								<span>{link.name}</span>
							</NavLink>
						))}
					</Nav>
					<div onClick={handleLogout}>
						<NavLink $isExpanded={expanded}>
							<div style={{ marginLeft: '2rem' }}>
								<RiLogoutCircleRLine size={'1.5rem'} />
							</div>
							<span>Logout</span>
						</NavLink>
					</div>
				</DashboardMenu>
			</SidebarStyled>
		</>
	);
};

export default Sidebar;
