import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../../store/slices/postSlice';
import fetchCategories from '../../../services/categoryServices';
import { useFormik } from 'formik';
import Select from 'react-select';
import FormField from '../../../components/features/Form/FormField';
import { StyledLabel } from '../../../components/features/Form/FormField.styled';
import { FormContainer } from '../../../components/ui/Containers';
import { toast } from 'react-toastify';
import Button from '../../../components/ui/Button';
import SectionTitle from '../../../components/ui/SectionTitle/SectionTitle';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ErrorText } from '../../../components/ui/ErrorText.styled';
import { postFormSchema } from '../../../schemas';
import PropTypes from 'prop-types';
import JoditEditor from 'jodit-react';

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
	const handleEditorChange = newContent => {
		formik.setFieldValue('text', newContent);
	};

	const formik = useFormik({
		initialValues: {
			title: isEditing && initialPost ? initialPost.title : '',
			text: isEditing && initialPost ? initialPost.text : '',
			category: isEditing && initialPost ? initialPost.category : 'other',
		},
		validationSchema: postFormSchema,
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
				{formik.touched.text && formik.errors.text ? (
					<ErrorText>{formik.errors.text}</ErrorText>
				) : null}
				<JoditEditor
					value={formik.values.text}
					onChange={newContent => {
						handleEditorChange(newContent);
						formik.validateField('text');
					}}
					onBlur={() => formik.handleBlur('text')}
					className={'my-jodit-editor'}
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
