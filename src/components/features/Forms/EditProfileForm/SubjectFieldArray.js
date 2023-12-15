import { FieldArray, Field } from 'formik';
import { Button, ErrorText } from '../../../ui';
import { FaTrashAlt } from 'react-icons/fa';
import { SmallInput, RemoveBtn } from './EditProfileForm.styled';
import PropTypes from 'prop-types';

export const SubjectsFieldArray = ({ formik }) => {
	return (
		<FieldArray
			name={'subjects'}
			render={arrayHelpers => (
				<div>
					<label htmlFor={'subjects'}>Subjects:</label>
					{formik.values.subjects.map((subject, index) => (
						<div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
							<Field name={`subjects[${index}].name`} as={SmallInput} />
							<ErrorText name={`subjects[${index}].name`} />

							<RemoveBtn type={'button'} onClick={() => arrayHelpers.remove(index)}>
								<FaTrashAlt size={'1rem'} />
							</RemoveBtn>
						</div>
					))}
					<Button $small type={'button'} onClick={() => arrayHelpers.push({ name: '' })}>
						+ Add Subject
					</Button>
				</div>
			)}
		/>
	);
};

SubjectsFieldArray.propTypes = {
	formik: PropTypes.object,
};
