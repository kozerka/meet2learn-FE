// hooks/useTutorData.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, getTutorById, getTutorReviews } from '../store/thunks';

export const useTutorData = tutorId => {
	const dispatch = useDispatch();
	const { tutor, isLoading: isTutorLoading } = useSelector(state => state.tutors);
	const { reviews, isLoading: isReviewsLoading } = useSelector(state => state.reviews);
	const [editingReview, setEditingReview] = useState(null);

	useEffect(() => {
		if (tutorId) {
			dispatch(getTutorById(tutorId));
			dispatch(getTutorReviews(tutorId));
			dispatch(fetchUser());
		}
	}, [dispatch, tutorId]);

	const isLoading = isTutorLoading || isReviewsLoading;

	return { tutor, reviews, isLoading, editingReview, setEditingReview };
};
