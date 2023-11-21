import FormInput from './FormInput';
const Form = () => {
	return (
		<form>
			<FormInput placeholder={'User'} />
			<FormInput placeholder={'Email'} />
			<FormInput placeholder={'Message title'} />
			<FormInput placeholder={'Message content'} />
		</form>
	);
};

export default Form;
