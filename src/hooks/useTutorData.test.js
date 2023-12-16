import { useTutorData } from './useTutorData';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTutorById, getTutorReviews, fetchUser } from '../store/thunks';
import PropTypes from 'prop-types';

const TestComponent = ({ tutorId }) => {
	const { tutor, reviews, isLoading, editingReview, setEditingReview } = useTutorData(tutorId);
	if (!tutorId) {
		return <div>No Tutor ID provided</div>;
	}

	return (
		<div>
			{isLoading && <div data-testid={'loading-state'}>Loading...</div>}
			{tutor && <div>{tutor.name}</div>}
			{Array.isArray(reviews) && reviews.map(review => <div key={review.id}>{review.content}</div>)}
			{editingReview && <div>Editing Review</div>}
			<button onClick={() => setEditingReview({ id: 'review1' })}>Edit Review</button>
		</div>
	);
};

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
	useDispatch: jest.fn(),
}));

jest.mock('../store/thunks', () => ({
	getTutorById: jest.fn(),
	getTutorReviews: jest.fn(),
	fetchUser: jest.fn(),
}));

describe('TestComponent with useTutorData hook', () => {
	const mockDispatch = jest.fn();
	const mockState = {
		tutors: {
			tutor: { name: 'John Doe' },
			isLoading: false,
		},
		reviews: {
			reviews: [{ id: 'review1', content: 'Great tutor!' }],
			isLoading: false,
		},
	};

	beforeEach(() => {
		useSelector.mockImplementation(() => ({
			tutors: { isLoading: true, tutor: null },
			reviews: { isLoading: true, reviews: null },
		}));
		useDispatch.mockReturnValue(mockDispatch);
		useSelector.mockImplementation(callback => callback(mockState));
		getTutorById.mockClear();
		getTutorReviews.mockClear();
		fetchUser.mockClear();
	});

	test('renders tutor data and reviews', () => {
		render(<TestComponent tutorId={'123'} />);
		expect(screen.getByText('John Doe')).toBeInTheDocument();
		expect(screen.getByText('Great tutor!')).toBeInTheDocument();
	});

	test('fetches tutor and reviews data on mount', () => {
		render(<TestComponent tutorId={'123'} />);
		expect(getTutorById).toHaveBeenCalledWith('123');
		expect(getTutorReviews).toHaveBeenCalledWith('123');
		expect(fetchUser).toHaveBeenCalled();
	});

	test('allows editing a review', () => {
		render(<TestComponent tutorId={'123'} />);
		fireEvent.click(screen.getByText('Edit Review'));
		expect(screen.getByText('Editing Review')).toBeInTheDocument();
	});
	test('handles null tutorId', () => {
		render(<TestComponent tutorId={null} />);
		expect(screen.queryByText('Editing Review')).not.toBeInTheDocument();
		expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
	});

	test('handles invalid tutorId', () => {
		render(<TestComponent tutorId={'invalid-id'} />);
		expect(screen.queryByText('Editing Review')).not.toBeInTheDocument();
		expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
	});

	test('renders correctly with incomplete data from useTutorData', () => {
		useSelector.mockImplementation(() => ({
			tutors: { tutor: undefined, isLoading: false },
			reviews: { reviews: undefined, isLoading: false },
		}));
		render(<TestComponent tutorId={'123'} />);
		expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
		expect(screen.queryByText('Great tutor!')).not.toBeInTheDocument();
		expect(screen.queryByTestId('loading-state')).not.toBeInTheDocument();
	});
	test('re-fetches data when tutorId changes', () => {
		const { rerender } = render(<TestComponent tutorId={'123'} />);
		expect(getTutorById).toHaveBeenCalledWith('123');

		rerender(<TestComponent tutorId={'456'} />);
		expect(getTutorById).toHaveBeenCalledWith('456');
	});

	test('renders correctly with empty tutor object', () => {
		useSelector.mockImplementation(() => ({
			tutors: { tutor: {}, isLoading: false },
			reviews: { reviews: [], isLoading: false },
		}));
		render(<TestComponent tutorId={'123'} />);
		expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
	});

	test('updates editingReview state on edit review button click', () => {
		render(<TestComponent tutorId={'123'} />);
		fireEvent.click(screen.getByText('Edit Review'));
		expect(screen.getByText('Editing Review')).toBeInTheDocument();
	});

	test('renders initial state correctly', () => {
		useSelector.mockImplementation(() => ({
			tutors: { isLoading: false, tutor: null },
			reviews: { isLoading: false, reviews: null },
		}));
		render(<TestComponent tutorId={'123'} />);
		expect(screen.queryByText('Editing Review')).not.toBeInTheDocument();
	});
});

TestComponent.propTypes = {
	tutorId: PropTypes.string,
};
