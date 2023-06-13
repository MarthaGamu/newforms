import React, { useEffect, useState } from 'react';
import './App.css';
import AppList from './AppList';

function App() {
	const [userData, setUserData] = useState({
		currentUser: {
			id: Math.random(),
			firstName: '',
			lastName: '',
			occupation: '',
			age: ''
		},
		allUsers: []
	});
	console.log('userData', userData);

	const handleOnChange = (e) => {
		setUserData({
			...userData,
			currentUser: { ...userData.currentUser, [e.target.name]: e.target.value }
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		setUserData({
			currentUser: {
				firstName: '',
				lastName: '',
				occupation: '',
				age: ''
			},
			allUsers: [...userData.allUsers, userData.currentUser]
		});
	};

	return (
		<>
			<div className='App'>
				<form onSubmit={handleOnSubmit}>
					<label htmlFor='firstName'>Enter first name</label>
					<input
						id='firstName'
						type='text'
						name='firstName'
						value={userData.currentUser.firstName}
						onChange={handleOnChange}
						required
					/>
					<label htmlFor='lastName'>Enter last name</label>
					<input
						id='lastName'
						type='text'
						name='lastName'
						value={userData.currentUser.lastName}
						onChange={handleOnChange}
						required
					/>
					<label htmlFor='occupation'>Enter last occupation</label>
					<input
						id='occupation'
						type='text'
						name='occupation'
						value={userData.currentUser.occupation}
						onChange={handleOnChange}
						required
					/>
					<label htmlFor='age'>Enter age</label>
					<input
						id='age'
						type='text'
						name='age'
						value={userData.currentUser.age}
						onChange={handleOnChange}
						required
					/>
					<button type='submit' onClick={handleOnChange}>
						Addd
					</button>
				</form>
			</div>
			{userData.allUsers.map((user) => (
				<AppList user={user} />
			))}
		</>
	);
}

export default App;
