import React from 'react';
import { useRouter } from 'next/router';

import YearCard from '../Components/YearCard';

export default () => {
	const { query } = useRouter();
	const name = query.name as string;
	const year = query.year as string;
	const calculatedYear = query.calculatedYear as string;

	if (name && year && calculatedYear) {
		return (
			<div className="p-10 mx-auto text-center w-full">
				<YearCard
					year={year}
					name={name}
					calculatedYear={parseInt(calculatedYear)} />
			</div>
		);
	} else {
		return (<></>);
	}
};
