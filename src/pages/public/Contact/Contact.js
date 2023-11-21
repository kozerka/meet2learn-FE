import { useState } from 'react';
import FormInput from '../../../components/features/Form/FormInput';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
	updateFormData,
	sendContactForm,
	resetFormData,
	updateConsent,
} from '../../../store/slices/contactFormSlice';
import Button from '../../../components/ui/Button';
import beInTouch from '../../../assets/img/beIntouch.png';
import styled from 'styled-components';
import IntersectionTitle from '../../../components/layout/IntersectionTitle';

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	img {
		max-height: 100%;
		width: auto;
		object-fit: cover;
		max-width: 480px;
	}

	@media (max-width: 992px) {
		order: -1;

		img {
			max-width: 320px;
		}
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
	margin: 0 auto;
	gap: 2rem;

	@media (max-width: 992px) {
		flex-direction: column;
	}
`;

const Contact = () => {
	const dispatch = useDispatch();
	const { formData, consent } = useSelector(state => state.contactForm);
	const [errors, setErrors] = useState({});

	const handleCheckboxChange = e => {
		dispatch(updateConsent(e.target.checked));
	};
	const validate = (name, value) => {
		if (value.trim() === '') {
			return `This field ${name} is required!`;
		}
		if (name === 'username' && value.length < 3) {
			return 'Username should be 3 characters long!';
		}
		if (name === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
			return 'It should be a valid email address!';
		}
		if (name === 'messageTitle' && (value.length < 3 || value.length > 80)) {
			return 'Title should be 3-80 characters long!';
		}
		if (name === 'messageBody' && (value.length < 15 || value.length > 500)) {
			return 'Message should be 15-500 characters long!';
		}
		return '';
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!consent) {
			toast.error('Please agree to the processing of your data.');
			return;
		}
		const validationErrors = {};
		let isValid = true;
		Object.keys(formData).forEach(name => {
			const error = validate(name, formData[name]);
			if (error) {
				validationErrors[name] = error;
				toast.error(error);
				isValid = false;
			}
		});
		setErrors(validationErrors);
		if (isValid) {
			dispatch(sendContactForm(formData))
				.unwrap()
				.then(() => {
					toast.success('Form Submitted');
					dispatch(resetFormData());
				})
				.catch(error => {
					toast.error(error.message || 'Error submitting form');
				});
		}
	};

	const onChange = e => {
		dispatch(updateFormData({ [e.target.name]: e.target.value }));
	};

	return (
		<div
			style={{
				marginTop: '5rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: 'calc(100vh - 5rem)',
			}}
		>
			<IntersectionTitle title={'Contact'} text={'If you have any questions...'} />
			<Container>
				<form onSubmit={handleSubmit}>
					{Object.keys(formData).map((key, index) => (
						<FormInput
							key={index}
							label={key.charAt(0).toUpperCase() + key.slice(1)}
							name={key}
							value={formData[key]}
							onChange={onChange}
							type={key.includes('Body') ? 'textarea' : 'text'}
							errorMessage={errors[key]}
						/>
					))}
					<div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
						<input
							type={'checkbox'}
							id={'dataConsent'}
							checked={consent}
							onChange={handleCheckboxChange}
							style={{ marginRight: '1rem' }}
						/>
						<label htmlFor={'dataConsent'}>I agree to the processing of my data</label>
					</div>
					<Button $primary={true} type={'submit'}>
						Submit
					</Button>
				</form>
				<ImageContainer>
					<img src={beInTouch} alt={'be in touch'} />
				</ImageContainer>
			</Container>
		</div>
	);
};

export default Contact;
