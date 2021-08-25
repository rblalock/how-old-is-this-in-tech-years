import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
	return (
		<div className="antialiased w-full text-gray-900">
			{props.children}

			{/* Footer / About 4 */}
			<section className="text-gray-700 bg-white body-font">
				<div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
					<p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:mt-0">
						© How old is this in tech years?
					</p>
					<span className="flex flex-wrap sm:inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
						<span className="text-gray-500 mr-2">
							Made by:
						</span>
						<a href="https://twitter.com/rblalock" className="text-red-400 hover:text-red-500 font-semibold">
							Rick
						</a>

						<span className="text-gray-500 mx-1">
							&amp;
						</span>

						<a href="https://twitter.com/svpino" className="text-red-400 hover:text-red-500 font-semibold">
							Santiago
						</a>

						<span className="text-gray-300 mx-1">
							|
						</span>

						<a href="https://github.com/rblalock/how-old-is-this-in-tech-years" className="text-gray-400 hover:text-gray-500 font-semibold">
							Open-Source @ Github
						</a>
					</span>
				</div>
			</section>
		</div>
	);
};

export default Layout;
