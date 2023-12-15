import { ImgPreview } from '../../';
import { FormStyled } from './UploadForm.styled';
import { LuFileImage } from 'react-icons/lu';
import { FormContainer, Button, Loader, ErrorText } from '../../../ui';
import { useUploadForm } from '../../../../hooks';

const UploadForm = () => {
	const { handleSubmit, setFieldValue, errors, values, isLoading } = useUploadForm();
	return (
		<FormContainer>
			<FormStyled onSubmit={handleSubmit}>
				<label htmlFor={'avatar'}>
					Upload avatar <LuFileImage size={'1.5rem'} />
				</label>
				<input
					id={'avatar'}
					type={'file'}
					name={'avatar'}
					onChange={e => setFieldValue('avatar', e.target.files[0])}
				/>
				{errors.avatar && <ErrorText>{errors.avatar}</ErrorText>}
				<Button $secondary type={'submit'}>
					Upload
				</Button>
			</FormStyled>

			{!errors.avatar &&
				values.avatar &&
				(isLoading ? <Loader /> : <ImgPreview file={values.avatar} />)}
		</FormContainer>
	);
};

export default UploadForm;
