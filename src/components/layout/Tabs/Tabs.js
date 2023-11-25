import PropTypes from 'prop-types';
import { useState } from 'react';
import { TabsContainer, TabLabels, Tab, TabContent } from './Tabs.styled';
const Tabs = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<TabsContainer>
			<TabLabels>
				{tabs.map((tab, index) => (
					<Tab
						key={index}
						className={index === activeTab ? 'active' : ''}
						onClick={() => setActiveTab(index)}
					>
						{tab.label}
					</Tab>
				))}
			</TabLabels>
			<TabContent>{tabs[activeTab].content}</TabContent>
		</TabsContainer>
	);
};

Tabs.propTypes = {
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			content: PropTypes.node.isRequired,
		})
	).isRequired,
};

export default Tabs;
