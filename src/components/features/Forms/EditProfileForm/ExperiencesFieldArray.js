import { FieldArray, Field } from 'formik';
import { Button, ErrorText } from '../../../ui';
import { FaTrashAlt } from 'react-icons/fa';
import { StyledTextArea, RemoveBtn } from './EditProfileForm.styled';
import PropTypes from 'prop-types';

export const ExperiencesFieldArray = ({ formik }) => {
	return (
		<FieldArray
			name={'experiences'}
			render={arrayHelpers => (
				<div>
					<label htmlFor={'experiences'}>Teaching Experience:</label>
					{formik.values.experiences.map((experience, index) => (
						<div key={index} style={{ marginBottom: '1rem' }}>
							<Field as={StyledTextArea} name={`experiences[${index}].description`} />
							<ErrorText name={`experiences[${index}].description`} />

							<RemoveBtn type={'button'} onClick={() => arrayHelpers.remove(index)}>
								<FaTrashAlt size={'1rem'} /> Remove this experience
							</RemoveBtn>
						</div>
					))}
					<Button $small type={'button'} onClick={() => arrayHelpers.push({ description: '' })}>
						+ Add Experience
					</Button>
				</div>
			)}
		/>
	);
};

ExperiencesFieldArray.propTypes = {
	formik: PropTypes.object,
};
