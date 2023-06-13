import React from 'react';

export default function AppList({ user }) {
	return (
		<div>
			<p>
				{`FirstName: ${user.firstName} LastName:${user.lastName} Occupation:${user.occupation} Age:${user.age}`}
			</p>
			<button>Delete</button>
		</div>
	);
}
