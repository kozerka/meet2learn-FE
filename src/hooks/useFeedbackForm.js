import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addReview, getTutorReviews, updateReview } from '../store/slices/reviewSlice';
import { getTutorById } from '../store/slices/tutorSlice';
import { feedbackFormSchema } from '../schemas';

export const useFeedbackForm = (tutorId, reviewData) => {
	const dispatch = useDispatch();
	const userAuth = useSelector(state => state.user.userAuth);
	const userData = useSelector(state => state.user.userData);
	const [showForm, setShowForm] = useState(false);
	const [isEditMode, setIsEditMode] = useState(false);

	useEffect(() => {
		setIsEditMode(!!reviewData);
		setShowForm(!!reviewData);
	}, [reviewData]);

	const formik = useFormik({
		initialValues: {
			rating: isEditMode ? (reviewData ? reviewData.rating : 0) : 0,
			reviewText: isEditMode ? (reviewData ? reviewData.reviewText : '') : '',
		},
		validationSchema: feedbackFormSchema,
		onSubmit: async (values, { resetForm }) => {
			try {
				if (isEditMode) {
					await dispatch(updateReview({ reviewId: reviewData._id, reviewData: values })).unwrap();
					toast.success('Review updated successfully');
				} else {
					await dispatch(addReview({ tutorId, reviewData: values })).unwrap();
					toast.success('Review added successfully');
				}
				resetForm();
				setShowForm(false);
				setIsEditMode(false);
				dispatch(getTutorReviews(tutorId));
				dispatch(getTutorById(tutorId));
			} catch (error) {
				toast.error('Error: ' + error.message || 'Failed to process review');
			}
		},
	});

	const toggleForm = () => {
		if (!userAuth.userInfo) {
			toast.error('You must be logged in to give feedback');
			return;
		}
		if (userData.role === 'tutor') {
			toast.error('Tutors cannot give feedback to each other');
			return;
		}
		setShowForm(!showForm);
		setIsEditMode(false);
	};
	const handleFeedbackButtonClick = () => {
		if (!userAuth.userInfo) {
			toast.error('You must be logged in to give feedback');
			return;
		}
		if (userData.role === 'tutor') {
			toast.error('Tutors cannot give feedback to each other');
			return;
		}
		setShowForm(!showForm);
		setIsEditMode(false);
	};

	return { formik, showForm, isEditMode, handleFeedbackButtonClick, toggleForm };
};
