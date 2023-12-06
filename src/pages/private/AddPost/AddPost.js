import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../../store/slices/postSlice';
import fetchCategories from '../../../services/categoryServices';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import FormField from '../../../components/features/Form/FormField';
import { StyledLabel } from '../../../components/features/Form/FormField.styled';
import { FormContainer } from '../../../components/ui/Containers';
import { toast } from 'react-toastify';
import Button from '../../../components/ui/Button';
import SectionTitle from '../../../components/ui/SectionTitle/SectionTitle';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledSelect = styled(Select)`
	margin-top: 10px;
	margin-bottom: 10px;
`;

const AddPost = ({ initialPost, isEditing }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [categories, setCategories] = useState([]);
	const [isCategoryTouched, setIsCategoryTouched] = useState(false);

	useEffect(() => {
		fetchCategories().then(data => {
			const categoriesArray = Object.entries(data).map(([key, value]) => ({
				value,
				label: value,
			}));
			setCategories(categoriesArray);
		});
	}, []);

	const formik = useFormik({
		initialValues: {
			title: isEditing && initialPost ? initialPost.title : '',
			text: isEditing && initialPost ? initialPost.text : '',
			category: isEditing && initialPost ? initialPost.category : 'other',
		},
		validationSchema: Yup.object({
			title: Yup.string()
				.min(3, 'Title must be at least 3 characters')
				.required('Title is required'),
			text: Yup.string()
				.min(15, 'Text must be at least 15 characters')
				.required('Text is required'),
		}),
		onSubmit: (values, { resetForm }) => {
			if (isEditing) {
				dispatch(updatePost({ postId: initialPost._id, updateData: values }))
					.then(() => {
						toast.success('Post updated successfully');
						navigate('/dashboard/forum');
					})
					.catch(error => {
						toast.error('Error updating post: ' + error.message);
					});
			} else {
				dispatch(createPost(values))
					.then(() => {
						toast.success('Post created successfully');
						navigate('/dashboard/forum');
					})
					.catch(error => {
						toast.error('Error creating post: ' + error.message);
					});
			}
			resetForm();
		},
	});
	// useEffect(() => {
	// 	if (isEditing && initialPost) {
	// 		formik.setValues({
	// 			title: initialPost.title,
	// 			text: initialPost.text,
	// 			category: initialPost.category,
	// 		});
	// 	}
	// }, [isEditing, initialPost, formik]);

	const categoryOptions = categories.map(({ value, label }) => ({ value, label }));

	return (
		<FormContainer>
			<SectionTitle size={'big'} title={isEditing ? 'Edit Post' : 'Add New Post'} />
			<form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
				<FormField
					label={'Title'}
					type={'text'}
					name={'title'}
					errors={formik.errors}
					values={formik.values}
					touched={formik.touched}
					handleChange={formik.handleChange}
					handleBlur={formik.handleBlur}
				/>

				<FormField
					label={'Text'}
					type={'textarea'}
					name={'text'}
					errors={formik.errors}
					values={formik.values}
					touched={formik.touched}
					handleChange={formik.handleChange}
					handleBlur={formik.handleBlur}
					rows={8}
				/>
				<div>
					<StyledLabel>Category</StyledLabel>
					<StyledSelect
						name={'category'}
						options={categoryOptions}
						value={categoryOptions.find(option => option.value === formik.values.category)}
						onChange={option => {
							formik.setFieldValue('category', option.value);
							setIsCategoryTouched(true);
						}}
					/>
					{isCategoryTouched && formik.touched.category && formik.errors.category ? (
						<div>{formik.errors.category}</div>
					) : null}
				</div>
				<Button $secondary type={'submit'}>
					{isEditing ? 'Update Post' : 'Create Post'}
				</Button>
			</form>
		</FormContainer>
	);
};

AddPost.propTypes = {
	initialPost: PropTypes.object,
	isEditing: PropTypes.bool,
};

export default AddPost;
