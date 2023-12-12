import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { resetPasswordFinalize } from '../../../store/slices/userSlice';

const ResetPasswordFinalize = () => {
	const [searchParams] = useSearchParams();

	const [newPassword, setNewPassword] = useState('');
	const [token, setToken] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		// Pobierz token z URL
		const tokenFromUrl = searchParams.get('token');
		if (tokenFromUrl) {
			setToken(tokenFromUrl);
		}
	}, [searchParams]);

	const handleSubmit = e => {
		e.preventDefault();
		// Wywołaj akcję Redux do finalizacji resetowania hasła
		if (token) {
			dispatch(resetPasswordFinalize({ token, newPassword }));
		}
	};

	return (
		<div style={{ padding: '7rem' }}>
			<h2>Zresetuj swoje hasło</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor={'newPassword'}>Nowe Hasło:</label>
				<input
					type={'password'}
					id={'newPassword'}
					value={newPassword}
					onChange={e => setNewPassword(e.target.value)}
					required
				/>
				<button type={'submit'}>Zresetuj Hasło</button>
			</form>
		</div>
	);
};

export default ResetPasswordFinalize;
