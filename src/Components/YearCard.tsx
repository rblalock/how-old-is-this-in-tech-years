import React from 'react';

interface YearCardProps {
  name?: string | null;
	year?: string | null;
	calculatedYear?: number | null;
}

const YearCard = (props: YearCardProps) => {
	return (
		<div className="relative w-94 h-64 bg-cover">
			<div className="relative flex items-center justify-center w-full h-full">
				<div className={`space-y-8 shadow-2xl rounded-2xl p-16 opacity-90 bg-gradient-to-br from-red-400 via-red-700 to-red-500 border border-yellow-900`}>
					<div className="relative">
						<h1 className="text-4xl font-extrabold text-gray-100 sm:text-5xl">
							{props.name && props.year ? (
								<>
									<span className={`text-yellow-300`}>{props.name.toUpperCase()}</span> 
									<br />is
									<br /><span className={`text-yellow-300 underline`}>{Math.trunc(props.calculatedYear || 0)}</span> tech years old
								</>
							) : (
								<>
									Want to see how old something is?
									<br />
									<a href="/" className={`text-yellow-300 font-bold`}>Go here to try!</a>
								</>
							)}
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default YearCard;
