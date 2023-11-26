import EditProfileForm from '../../../components/features/EditProfileForm/EditProfileFom';
import { dummyUser } from '../../../data';

const EditProfile = () => {
	const handleSubmit = values => {
		// TODO  Logika dla wysłania formularza
		console.log(values);
	};
	return (
		<div>
			<h1>Edit profile</h1>
			<EditProfileForm user={dummyUser} handleSubmit={handleSubmit} />
		</div>
	);
};

export default EditProfile;
