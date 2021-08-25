import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Meta } from '../Components/Meta';
import Layout from '../Components/Layout';

const Index = () => {
	const router = useRouter();
	const [name, setName] = useState<string>();
	const [year, setYear] = useState<number>();

	const handleSubmit = () => {
		if (!name || !year) {
			alert('Hey! You gotta fill out the two fields');
		} else {
			router.push(`/howoldis/${name}/${year}`);
		}
	};

  return (
    <Layout>
				<Meta
          title="In Tech Years"
          description="Measure the age of something in 'Tech Years'"
					image="/images/intechyears.jpg"
        />

			<section className="relative w-full bg-center bg-cover">

				{/* BG */}
				<div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-500 to-yellow-300 opacity-90" />

				{/* Header */}
				<div className="mx-auto max-w-7xl">
					<div className="relative h-24 px-10 mx-auto pt-10">
						<a
							href="/"
							className="flex items-center mb-4 font-medium text-gray-100 order-none w-auto justify-center md:mb-0"
						>
							<span className="text-3xl md:text-5xl text-gray-100 select-none logo font-black text-center">
								<span className="text-yellow-300 mr-3 underline">How old is this</span>
								<span className="text-white font-extralight block md:inline">in tech years?</span>
							</span>
						</a>
					</div>

					<div className="flex flex-col items-center px-10 pt-20 pb-40 lg:flex-row">
						{/* Main Text */}
						<div className="relative w-full max-w-2xl bg-cover lg:w-7/12">
							<div className="relative flex flex-col items-center justify-center w-full h-full lg:pr-10">
								<div className="flex flex-col items-start space-y-8">
									<div className="relative">
										<h1 className="text-4xl font-extrabold leading-tight text-gray-100 sm:text-7xl md:text-7xl text-center lg:text-left">
											Ever wondered how old something is <br /><span className="text-yellow-200">in tech years</span>?
										</h1>
									</div>
									<p className="text-2xl text-red-100 text-center lg:text-left w-full">
										Now you can find out, try it!
									</p>
								</div>
							</div>
						</div>

						{/* Form */}
						<div className="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
							<div className="flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
								<h4 className="w-full text-3xl font-bold">Find out now:</h4>
								<div className="relative w-full mt-6 space-y-8">
									<div className="relative">
										<label className="font-medium text-gray-900">Name of Company, Person, Tech, etc.</label>
										<input
											type="text"
											className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50"
											placeholder="Enter Name"
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<div className="relative">
										<label className="font-medium text-gray-900">Start Year</label>
										<input
											type="number"
											className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-600 focus:ring-opacity-50"
											placeholder="Enter the start year"
											onChange={(e) => setYear(Number(e.target.value))}
										/>
									</div>
									<div className="relative">
										<span
											onClick={handleSubmit}
											className="cursor-pointer inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-red-600 rounded-lg hover:bg-red-700 ease"
										>
											Find out how old!
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Examples */}
			<section className="py-20 bg-white">
				<div className="flex flex-col items-center px-10 mx-auto space-y-20 lg:space-y-0 lg:flex-row max-w-7xl">
					<div className="flex flex-col justify-center flex-shrink-0 w-full h-full max-w-lg space-y-5 text-gray-800 lg:max-w-none lg:w-5/12 xl:w-6/12">
						<div className="flex items-center space-x-5 text-red-500">
							<div className="w-20 h-0.5 bg-red-500" />
							<p className="text-sm font-bold tracking-wide uppercase">
								To get you started
							</p>
						</div>
						<h2 className="text-4xl font-black xl:text-5xl">
							Try out some
							<br />
							popular ones
						</h2>
					</div>
					<div className="max-w-lg lg:max-w-none lg:w-7/12 lg:pl-8 xl:w-6/12">
						<div className="grid grid-cols-3 text-gray-400 gap-x-12 gap-y-16">
							<a
								href="/howoldis/Tesla/2003"
								className="flex items-center justify-center hover:text-gray-600"
							>
								<svg
									className="w-auto h-10 fill-current sm:h-14"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="-41.8008 -9.08425 362.2736 54.5055"
								>
									<path d="M238.077 14.382v21.912h7.027V21.705h25.575v14.589h7.022V14.42l-39.624-.038m6.244-7.088h27.02c3.753-.746 6.544-4.058 7.331-7.262h-41.681c.779 3.205 3.611 6.516 7.33 7.262m-27.526 29.014c3.543-1.502 5.449-4.1 6.179-7.14h-31.517l.02-29.118-7.065.02v36.238h32.383M131.874 7.196h24.954c3.762-1.093 6.921-3.959 7.691-7.136h-39.64v21.415h32.444v7.515l-25.449.02c-3.988 1.112-7.37 3.79-9.057 7.327l2.062-.038h39.415V14.355h-32.42V7.196m-61.603.069h27.011c3.758-.749 6.551-4.058 7.334-7.265H62.937c.778 3.207 3.612 6.516 7.334 7.265m0 14.322h27.011c3.758-.741 6.551-4.053 7.334-7.262H62.937c.778 3.21 3.612 6.521 7.334 7.262m0 14.717h27.011c3.758-.747 6.551-4.058 7.334-7.263H62.937c.778 3.206 3.612 6.516 7.334 7.263M0 .088c.812 3.167 3.554 6.404 7.316 7.215h11.37l.58.229v28.691h7.1V7.532l.645-.229h11.38c3.804-.98 6.487-4.048 7.285-7.215v-.07H0v.07" />
								</svg>
							</a>
							<a
								href="/howoldis/Netflix/1997"
								className="flex items-center justify-center hover:text-gray-600"
							>
								<svg
									className="w-auto fill-current h-7 sm:h-9"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 2500 676"
								>
									<defs />
									<path
										fillRule="nonzero"
										d="M343.757 632.09c-37.607 6.604-75.876 8.584-115.464 13.857L107.546 292.295v368.83C69.94 665.083 35.63 670.361 0 675.64V0h100.293l137.236 383.352V0h106.228v632.09zm207.84-384.663c40.91 0 103.591-1.98 141.198-1.98v105.566c-46.848 0-101.608 0-141.198 1.98V510.03c62.024-3.957 124.045-9.24 186.723-11.22v101.604L446.025 623.51V0H738.32v105.569H551.597v141.858zm579.306-141.856h-109.526v485.616c-35.63 0-71.26 0-105.564 1.315v-486.93H806.287V0h324.621l-.005 105.571zm171.548 134.6h144.5v105.566h-144.5V585.25h-103.596V0h294.941v105.569h-191.345V240.17zm362.893 252.703c60.044 1.315 120.742 5.942 179.468 9.235v104.25c-94.35-5.942-188.704-11.872-285.034-13.857V0h105.566v492.874zm268.54 120.744c33.65 1.983 69.28 3.963 103.59 7.915V0h-103.59v613.618zM2500 0l-133.943 321.326L2500 675.64c-39.592-5.279-79.18-12.537-118.77-19.136l-75.874-195.298-77.19 179.468c-38.276-6.604-75.224-8.584-113.486-13.862l135.918-309.449L2127.871 0h113.482l69.28 177.488L2384.532 0H2500z"
									/>
								</svg>
							</a>
							<a
								href="/howoldis/Zoom/2011"
								className="flex items-center justify-center hover:text-gray-600"
							>
								<svg
									className="w-auto h-5 fill-current sm:h-6"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 2500 563"
								>
									<defs />
									<path
										fillRule="evenodd"
										d="M2035.464 169.177c9.556 16.487 12.683 35.246 13.715 56.334l1.357 28.108v196.55l1.386 28.138c2.772 45.952 36.661 79.93 82.967 82.82l27.99 1.386V253.62l1.387-28.108c1.15-20.853 4.247-39.965 13.95-56.57 20.125-34.664 57.205-55.968 97.287-55.895 40.082.073 77.084 21.512 97.081 56.249 9.557 16.487 12.536 35.6 13.686 56.216l1.386 28.02v196.638l1.386 28.138c2.89 46.188 36.514 80.166 82.968 82.82l27.99 1.386V225.511C2500 101.421 2399.431.813 2275.342.764a224.157 224.157 0 00-168.56 76.125A224.452 224.452 0 001938.221.735c-46.66 0-89.959 14.157-125.824 38.608C1790.513 14.92 1741.553.735 1713.445.735v561.778l28.108-1.386c47.014-3.097 80.991-36.16 82.82-82.82l1.504-28.138V253.62l1.386-28.108c1.18-21.206 4.13-39.847 13.715-56.452a112.55 112.55 0 0197.243-55.98c40.102.008 77.16 21.387 97.243 56.098zm-1923.12 391.98l28.108 1.356H561.78l-1.386-28.02c-3.805-46.187-36.514-79.929-82.85-82.937l-28.108-1.387H196.668l337.003-337.12-1.386-27.99c-2.183-46.66-36.279-80.372-82.85-82.938L421.327.853 0 .735l1.386 28.108c3.687 45.745 36.868 80.195 82.82 82.85l28.138 1.386h252.767L28.108 450.199l1.386 28.108c2.773 46.306 36.19 79.841 82.85 82.82v.03zM1603.165 82.965a280.875 280.875 0 010 397.26c-109.75 109.66-287.597 109.66-397.348 0-109.689-109.69-109.689-287.57 0-397.26A280.728 280.728 0 011404.314.705a280.934 280.934 0 01198.851 82.29v-.03zm-79.487 79.546c65.79 65.84 65.79 172.534 0 238.373-65.84 65.79-172.534 65.79-238.373 0-65.79-65.84-65.79-172.533 0-238.373 65.84-65.79 172.534-65.79 238.373 0zM814.781.705a280.727 280.727 0 01198.497 82.29c109.72 109.66 109.72 287.57 0 397.23-109.75 109.66-287.597 109.66-397.348 0-109.689-109.69-109.689-287.57 0-397.26A280.727 280.727 0 01814.427.705h.354zm119.01 161.747c65.81 65.843 65.81 172.56 0 238.403-65.84 65.79-172.534 65.79-238.373 0-65.79-65.84-65.79-172.534 0-238.373 65.84-65.79 172.534-65.79 238.373 0v-.03z"
									/>
								</svg>
							</a>
							<a
								href="/howoldis/Visa/1958"
								className="flex items-center justify-center hover:text-gray-600"
							>
								<svg
									className="w-auto h-8 fill-current sm:h-10"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 2158 1259"
								>
									<defs />
									<g fillRule="nonzero">
										<path d="M165.4 1258.7c465.303-199.411 1118.188-380.158 1982.882-199.178l9.066-219.318C1245.055 740.596 590.445 1031.158 165.4 1237.079v21.62z" />
										<path d="M651.974 680.377L853.64 15.43h179.942l-201.68 664.947h-179.93zM571.535 15.612L409.673 297.484c-41.205 73.824-65.29 111.112-76.872 157.764h-2.465c2.867-59.142-5.382-131.747-6.16-172.783L306.304 15.612H3.408L.295 33.497c77.818 0 123.965 39.091 136.662 119.05l59.039 527.83H382.41L759.337 15.612H571.535zm1399.321 664.765l-4.967-98.894-224.689-.182-45.951 99.063h-195.351l354.217-663.676H2093.9l59.985 663.676h-183.029v.013zm-20.635-392.231c-1.997-49.143-3.67-115.846-.324-156.208h-2.659c-10.946 33.008-57.988 132.136-78.674 180.89l-66.95 145.753h157.764l-9.157-170.435zm-727.733 411.128c-127.04 0-211.343-40.297-271.535-76.223l85.717-130.904c54.032 30.22 96.456 65.095 194.066 65.095 31.387 0 61.633-8.158 78.805-37.897 25.031-43.254-5.772-66.522-76.068-106.313l-34.707-22.568c-104.2-71.204-149.269-138.828-100.217-256.879C1129.935 58.075 1212.72.839 1349.293.839c94.187 0 182.485 40.738 233.936 80.543l-98.545 115.573c-50.205-40.608-91.825-61.152-139.45-61.152-37.976 0-66.82 14.643-76.781 34.396-18.742 37.132 6.056 62.45 60.815 96.443l41.27 26.25c126.507 79.79 156.648 163.459 124.937 241.68-54.525 134.638-161.292 164.702-272.987 164.702z" />
									</g>
								</svg>
							</a>
							<a
								href="/howoldis/Uber/2009"
								className="flex items-center justify-center hover:text-gray-600"
							>
								<svg
									className="w-auto h-4 fill-current sm:h-6"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 2501 351"
								>
									<defs />
									<path
										fillRule="nonzero"
										d="M328.287.93v200.266c0 68.532-33.062 109.035-132.354 109.035-99.579 0-132.815-40.503-132.815-109.035V60.42C61.843 27.05 34.486.236.934.236v38.873c12.157 0 21.832 9.448 22.98 21.311v154.466c0 79.399 62.275 135.818 172.011 135.818 109.57 0 171.597-56.434 171.597-135.818V.93h-39.235zm1140.018 303.633v-93.828c0-12.882 10.95-23.462 23.644-23.719h170.962V147.48H1491.36a62.132 62.132 0 00-23.055 4.966V39.44h279.024V.1h-318.66v343.797h330.259v-39.334h-290.623zM2175.626 172.3c-8.301 0-16.142 1.698-23.395 4.649l-.34-139.75 215.421-.083a67.498 67.498 0 0167.626 67.58c0 37.395-30.232 67.725-67.626 67.725l-191.686-.12zm301.234 134.656c-9.464 7.592-22.935 6.067-31.145-2.657l-75.203-95.48c56.155-1.729 101.103-47.748 101.103-104.213 0-57.792-46.812-104.514-104.53-104.514h-254.542v343.805h39.326l.385-112.016c.43-12.482 10.98-22.881 23.75-22.881l144.783.037 94.054 119.442c21.652 25.583 59.664 29.847 86.078 9.086l-24.06-30.61zm-1500.162 0l-217.043-.189v-97.518c.159-13.018 10.966-24.09 23.886-24.09l193.165-.045c33.658 0 60.819 27.244 60.819 60.736-.008 33.87-27.168 61.106-60.827 61.106zM759.655 37.199l218.04.25c30.548 0 55.264 24.79 55.264 55.392 0 30.428-24.708 55.181-55.265 55.181H780.265a63.196 63.196 0 00-20.61 4.883V37.2zm273.719 129.049c22.142-16.86 36.647-43.44 36.647-73.573 0-50.955-41.379-92.455-92.455-92.455L720.352.1v343.797h256.346c54.065 0 97.836-43.862 97.836-98.047 0-32.836-16.294-61.822-41.16-79.602z"
									/>
								</svg>
							</a>
							<a
								href="/howoldis/Apple/1976"
								className="flex items-center justify-center hover:text-gray-600"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-auto h-6 fill-current sm:h-8"
									viewBox="-150 -296.79925 1300 1780.7955"
								>
									<path d="M979.042 925.187c-17.954 41.478-39.206 79.657-63.828 114.76-33.563 47.852-61.044 80.975-82.222 99.37-32.83 30.191-68.006 45.654-105.672 46.533-27.041 0-59.652-7.695-97.611-23.304-38.085-15.535-73.084-23.23-105.086-23.23-33.563 0-69.56 7.695-108.061 23.23-38.561 15.61-69.625 23.744-93.376 24.55-36.12 1.539-72.123-14.364-108.06-47.78-22.938-20.006-51.627-54.302-85.997-102.887-36.875-51.884-67.191-112.048-90.942-180.64C12.751 781.703 0 709.96 0 640.504c0-79.562 17.192-148.183 51.627-205.687 27.063-46.189 63.066-82.625 108.127-109.372 45.06-26.748 93.749-40.379 146.182-41.25 28.69 0 66.312 8.874 113.066 26.315 46.622 17.5 76.557 26.374 89.682 26.374 9.812 0 43.068-10.377 99.443-31.064 53.313-19.185 98.307-27.13 135.168-24 99.883 8.061 174.923 47.435 224.828 118.372-89.33 54.126-133.52 129.935-132.64 227.187.806 75.751 28.287 138.788 82.295 188.84 24.476 23.23 51.81 41.184 82.222 53.935-6.595 19.126-13.557 37.447-20.958 55.034zM749.964 23.751c0 59.373-21.692 114.81-64.928 166.122-52.176 61-115.286 96.248-183.724 90.686a184.836 184.836 0 01-1.378-22.498c0-56.998 24.813-117.998 68.878-167.873 21.999-25.253 49.978-46.25 83.907-63 33.856-16.5 65.88-25.625 95.999-27.188.88 7.937 1.246 15.875 1.246 23.75z" />
								</svg>
							</a>
							<a
								href="/howoldis/NYT/1851"
								className="flex items-center justify-center hover:text-gray-600"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-auto h-8 fill-current sm:h-10"
									viewBox="-27.615 -6.05 239.33 36.3"
								>
									<path d="M13.8 2.5c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8C6.2 1 5 .6 4 .6 2 .6.6 2.1.6 3.8c0 1.5 1.1 2 1.5 2.2l.1-.2c-.2-.2-.5-.4-.5-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8v3.1L9 9.8v.1l1.5 1.3v4.3c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V5.6l-5 2.2C3.6 6.5 4.7 5.6 5.8 5l-.1-.3c-3 .8-5.7 3.6-5.7 7 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1l-1.6-1.3V5.4c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7 0-1.5.2-2.1l2.1-.9zm10.6 2.3l-1.3 1 .2.2.6-.5 2.2 2 3-2-.1-.2-.8.5-1-1V9l.8-.6L21 9.8v6.1c0 3.8-.8 4.4-2.5 5v.3c2.8.1 5.4-.8 5.4-5.7V8.9l.9-.7-.2-.2-.8.6-2.5-2.1-2.8 2.1V.4h-.2l-3.5 2.4V3c.4.2 1 .4 1 1.5zM34 14.7l-2.5 1.9-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6zM29 13V8.1l.2-.1 2.2 3.5zM53.1 1.6c0-.3-.1-.6-.2-.9h-.2c-.3.8-.7 1.2-1.7 1.2-.9 0-1.5-.5-1.9-.9l-2.9 3.3.2.2 1-.9c.6.5 1.1.9 2.5 1v8.3L44 2.8C43.5 2 42.8.9 41.4.9c-1.6 0-3 1.4-2.8 3.6h.3c.1-.6.4-1.3 1.1-1.3.5 0 1 .5 1.3 1v3.3c-1.8 0-3 .8-3 2.3 0 .8.4 2 1.6 2.3v-.2c-.2-.2-.3-.4-.3-.7 0-.5.4-.9 1.1-.9h.5v4.2c-2.1 0-3.8 1.2-3.8 3.2 0 1.9 1.6 2.8 3.4 2.7v-.2c-1.1-.1-1.6-.6-1.6-1.3 0-.9.6-1.3 1.4-1.3.8 0 1.5.5 2 1.1l2.9-3.2-.2-.2-.7.8c-1.1-1-1.7-1.3-3-1.5v-10l8 14h.6v-14c1.5-.1 2.9-1.3 2.9-3zm7.3 13.1l-2.5 1.9-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6zm-5-1.7V8.1l.2-.1 2.2 3.5zm21.3-5.4l-.7.5-1.9-1.6-2.2 2 .9.9v7.5l-2.4-1.5V9.2l.8-.5-2.3-2.2-2.2 2 .9.9v7.2l-.3.2-2.1-1.5v-6c0-1.4-.7-1.8-1.5-2.3-.7-.5-1.1-.8-1.1-1.5 0-.6.6-.9.9-1.1v-.2c-.8 0-2.9.8-2.9 2.7 0 1 .5 1.4 1 1.9s1 .9 1 1.8v5.8l-1.1.8.2.2 1-.8 2.3 2 2.5-1.7 2.8 1.7 5.3-3.1V8.8l1.3-1zm18.6-5.5l-1 .9-2.2-2-3.3 2.4V1.2h-.3l.1 16.2c-.3 0-1.2-.2-1.9-.4l-.2-13.5c0-1-.7-2.4-2.5-2.4s-3 1.4-3 2.8h.3c.1-.6.4-1.1 1-1.1s1.1.4 1.1 1.7v3.9c-1.8.1-2.9 1.1-2.9 2.4 0 .8.4 2 1.6 2v-.2c-.4-.2-.5-.5-.5-.7 0-.6.5-.8 1.3-.8h.4v6.2c-1.5.5-2.1 1.6-2.1 2.8 0 1.7 1.3 2.9 3.3 2.9 1.4 0 2.6-.2 3.8-.5 1-.2 2.3-.5 2.9-.5.8 0 1.1.4 1.1.9 0 .7-.3 1-.7 1.1v.2c1.6-.3 2.6-1.3 2.6-2.8 0-1.5-1.5-2.4-3.1-2.4-.8 0-2.5.3-3.7.5-1.4.3-2.8.5-3.2.5-.7 0-1.5-.3-1.5-1.3 0-.8.7-1.5 2.4-1.5.9 0 2 .1 3.1.4 1.2.3 2.3.6 3.3.6 1.5 0 2.8-.5 2.8-2.6V3.3l1.2-1zm-4.1 6.1c-.3.3-.7.6-1.2.6s-1-.3-1.2-.6V3.8l1-.7 1.4 1.3zm0 3c-.2-.2-.7-.5-1.2-.5s-1 .3-1.2.5V8.6c.2.2.7.5 1.2.5s1-.3 1.2-.5zm0 4.7c0 .8-.5 1.6-1.6 1.6h-.8v-5.9c.2-.2.7-.5 1.2-.5s.9.3 1.2.5zm13.7-7.1l-3.2-2.3-4.9 2.8v6.5l-1 .8.1.2.8-.6 3.2 2.4 5-3zm-5.4 6.3V7.9l2.5 1.8v7.1zm14.9-8.4h-.2c-.3.2-.6.4-.9.4-.4 0-.9-.2-1.1-.5h-.2l-1.7 1.9-1.7-1.9-3 2 .1.2.8-.5 1 1.1v6.3l-1.3 1 .2.2.6-.5 2.4 2 3.1-2.1-.1-.2-.9.5-1.2-1v-7c.5.5 1.1 1 1.8 1 1.4.1 2.2-1.3 2.3-2.9zm12 9.6l-3.4 2.3-4.6-7 3.3-5.1h.2c.4.4 1 .8 1.7.8s1.2-.4 1.5-.8h.2c-.1 2-1.5 3.2-2.5 3.2s-1.5-.5-2.1-.8l-.3.5 5 7.4 1-.6zm-11-.5l-1.3 1 .2.2.6-.5 2.2 2 3-2-.2-.2-.8.5-1-1V.4h-.1l-3.6 2.4V3c.4.2 1 .3 1 1.5zM143 2.5c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8-1.3-.4-2.5-.8-3.5-.8-2 0-3.4 1.5-3.4 3.2 0 1.5 1.1 2 1.5 2.2l.1-.2c-.3-.2-.6-.4-.6-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8v3.1l-1.5 1.3v.1l1.5 1.3v4.3c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2v-7l-5 2.2c.5-1.3 1.6-2.2 2.6-2.9l-.1-.2c-3 .8-5.7 3.5-5.7 6.9 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1L140 8.4v-3c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7.1-1.5.3-2.1l2.1-.9zm12.2-12h-.1l-2 1.7v.1l1.7 1.9h.2l2-1.7v-.1zm3 14.8l-.8.5-1-1V8.9l1-.7-.2-.2-.7.6-1.8-2.1-2.9 2 .2.3.7-.5.9 1.1v6.5l-1.3 1 .1.2.7-.5 2.2 2 3-2zm16.7-.1l-.7.5-1.1-1V8.9l1-.8-.2-.2-.8.7-2.3-2.1-3 2.1-2.3-2.1-2.8 2.1-1.8-2.1-2.9 2 .1.3.7-.5 1 1.1v6.5l-.8.8 2.3 1.9 2.2-2-.9-.9V8.9l.9-.6 1.5 1.4v6l-.8.8 2.3 1.9 2.2-2-.9-.9V8.9l.8-.5 1.6 1.4v6l-.7.7 2.3 2.1 3.1-2.1zm8.7-1.5l-2.5 1.9-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.8l3.5 2.5L175 15zm-5-1.7V8.1l.2-.1 2.2 3.5zm14.1-.9l-1.9-1.5c1.3-1.1 1.8-2.6 1.8-3.6v-.6h-.2c-.2.5-.6 1-1.4 1-.8 0-1.3-.4-1.8-1L176 8.9v3.6l1.7 1.3c-1.7 1.5-2 2.5-2 3.3 0 1 .5 1.7 1.3 2l.1-.2c-.2-.2-.4-.3-.4-.8 0-.3.4-.8 1.2-.8 1 0 1.6.7 1.9 1l4.3-2.6v-3.6zm-1.1-3c-.7 1.2-2.2 2.4-3.1 3l-1.1-.9V7.7c.4 1 1.5 1.8 2.6 1.8.7 0 1.1-.1 1.6-.4zm-1.7 8c-.5-1.1-1.7-1.9-2.9-1.9-.3 0-1.1 0-1.9.5.5-.8 1.8-2.2 3.5-3.2l1.2 1z" />
								</svg>
							</a>
							<a
								href="/howoldis/Dribbble/2009"
								className="flex items-center justify-center hover:text-gray-600"
							>
								<svg
									className="w-auto h-6 fill-current sm:h-8"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 2500 611"
								>
									<defs />
									<path
										fillRule="nonzero"
										d="M763.838 245.713c28.613 0 51.807-23.203 51.807-51.821 0-28.623-23.194-51.822-51.807-51.822-28.613 0-51.807 23.199-51.807 51.822 0 28.618 23.194 51.82 51.807 51.82zm1709.766 177.056c-7.881-5.542-13.965-6.46-19.014 4.301-87.012 188.457-233.643 94.414-219.077 102.69 32.524-14.877 118.066-83.48 105.136-178.207-7.851-57.89-57.539-83.57-110.278-74.375-92.06 16.05-125.928 115.346-108.686 203.257 3.017 15.097 8.408 27.548 13.794 39.746-104.034 84.6-145.347-75.733-150.035-94.893-.185-1.025 80.327-68.135 102.72-228.052C2111.636 29.634 2058.17-.884 2003.496.068c-101.172 1.763-128.51 213.145-91.782 389.317-3.076.8-17.393 8.73-40.396 9.619-16.552-52.085-87.28-97.74-105.79-80.147-46.329 44.01 11.235 130.05 51.738 136.797-24.331 149.859-176.495 112.744-148.17-75.005 49.551-92.016 87.237-228.837 80.513-311.435-2.382-29.243-24.004-68.423-72.9-66.48-94.048 3.721-104.272 215.162-93.247 365.23-.547-3.696-5.781 18.232-44.321 29.136-9.117-50.601-90.591-101.392-109.77-76.973-35.904 45.703 26.317 127.192 55.79 132.876-24.33 149.853-176.49 112.74-148.164-75.01 49.55-92.012 87.232-228.833 80.508-311.43-2.383-29.249-24-68.428-72.9-66.49-94.048 3.726-104.273 215.166-93.248 365.235-.551-3.755-5.908 18.896-46.02 29.619-1.343-65.65-83.115-95.752-102.759-74.805-35.01 37.339 8.018 113.95 47.822 132.88-24.33 149.854-176.489 112.74-148.164-75.009 49.551-92.012 87.237-228.833 80.508-311.43-2.378-29.249-23.999-68.428-72.9-66.49C915.8 3.8 908.232 225.87 919.258 375.933c-30.977 132.72-134.859 298.462-121.362-33.555 1.333-23.291 2.788-32.134-8.824-40.855-8.7-6.777-28.486-3.515-39.301-3.247-13.145.528-16.44 8.218-19.346 19.844-6.768 30.02-7.984 59.121-8.95 98.828-.635 18.574-2.124 27.241-9.278 52.569-7.143 25.322-47.9 71.606-70.215 63.867-30.957-10.645-20.8-98.037-15-158.081 4.834-47.451-10.644-68.76-50.302-76.51-23.218-4.838-37.325-4.096-61.504-11.718-22.866-7.207-28.037-50.459-76.807-36.045-26.675 7.89-9.526 64.41-15.937 106.3-31.519 206.059-97.1 211.718-127.525 111.62C431.934 133.35 334.546 1.045 277.54 1.045c-59.375 0-127.246 40.898-98.506 302.578-13.974-4.077-18.271-6.274-33.57-6.274C58.946 297.349 0 367.29 0 453.569c0 86.28 58.95 156.226 145.469 156.226 51.074 0 86.933-23.228 114.092-59.16 17.72 25.376 39.296 59.55 78.754 58.012 117.613-4.58 151.817-245.835 155.855-259.292 12.573 1.939 24.468 5.606 36.079 7.544 19.346 2.906 20.752 10.562 20.313 30.02-5.127 164.082 25.15 221.533 93.833 221.533 38.266 0 72.373-37.598 95.869-64.482 17.548 36.22 45.512 63.374 83.027 64.477 90.903 2.261 125.708-142.627 122.534-123.56-2.49 14.962 29.492 122.745 123.076 123.135 115.923.489 137.471-126.992 140.04-148.344.322-4.248.463-3.809 0 0l-.088 1.294c36.801-6.846 55.79-26.577 55.79-26.577s29.551 175.61 139.014 173.632c113.672-2.06 135.108-117.295 137.92-139.765.371-5.332.591-4.707 0 0l-.044.659c43.716-15.903 55.215-31.865 55.215-31.865s23.486 172.119 139.014 173.623c102.949 1.347 141.103-104.077 141.328-148.203 17.363.185 49.482-10.303 48.73-10.899 0 0 37.71 150.488 143.018 158.218 49.443 3.628 86.533-27.822 107.676-42.168 49.687 40.24 215.141 91.636 319.614-85.488 14.746-25.42-16.958-55.45-22.524-59.37zM141.294 551.367c-50.479 0-82.847-46.675-82.847-97.002 0-50.322 29.712-96.997 80.19-96.997 22.716 0 35.352 2.5 53.043 17.886 3.208 12.642 12.3 41.802 16.723 55.044 5.928 17.72 12.979 32.803 20.088 49.219-10.156 42.104-43.452 71.85-87.197 71.85zm123.008-174.634c-2.1-3.344-1.66-1.289-4.009-4.448-9.253-25.17-27.085-81.352-29.15-145.166-2.334-72.187 9.697-156.802 45.166-156.802 24.033 0 49.575 171.485-12.012 306.416h.005zm710.747-75.214c-5.694-42.837-5.991-233.804 39.853-228.545 25.313 10.254-16.05 190.454-39.853 228.545zm334.76 0c-5.693-42.837-5.99-233.804 39.854-228.545 25.313 10.254-16.05 190.454-39.853 228.545zm332.105 2.66c-5.698-42.841-5.991-233.808 39.849-228.55 25.312 10.255-16.05 190.46-39.849 228.55zm366.64-242.382c41.915-4.346 40.186 178.691-43.945 294.248-10.85-41.768-27.485-279.907 43.946-294.253v.005zm176.173 393.857c-13.462-68.003 21.323-112.666 57.182-117.563 12.534-2.002 30.698 6.118 34.321 21.299 5.957 28.608-.864 71.045-81.123 124.887.118.46-7.378-13.476-10.376-28.623h-.004z"
									/>
								</svg>
							</a>
							<a
								href="/howoldis/PlayStation/1994"
								className="flex items-center justify-center hover:text-gray-600"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-auto fill-current h-7 sm:h-10 opacity-50 hover:opacity-100"
									preserveAspectRatio="xMidYMid"
									viewBox="-29.7 -38.20475 257.4 229.2285"
								>
									<path
										d="M196.24 116.962c-3.869 4.88-13.344 8.36-13.344 8.36l-70.492 25.32V131.97l51.877-18.484c5.887-2.11 6.791-5.091 2.006-6.657-4.776-1.57-13.425-1.12-19.316.999l-34.567 12.174v-19.379l1.993-.674s9.988-3.535 24.034-5.091c14.045-1.547 31.242.211 44.743 5.329 15.215 4.808 16.928 11.895 13.065 16.775zm-77.125-31.796V37.413c0-5.608-1.035-10.77-6.297-12.232-4.03-1.291-6.53 2.45-6.53 8.054V152.82l-32.25-10.236V0c13.712 2.545 33.69 8.563 44.429 12.183 27.312 9.377 36.572 21.048 36.572 47.344 0 25.63-15.821 35.344-35.924 25.639zM14.862 130.018c-15.62-4.399-18.219-13.564-11.1-18.844 6.58-4.875 17.77-8.545 17.77-8.545l46.241-16.442v18.745L34.497 116.84c-5.878 2.109-6.782 5.095-2.005 6.66 4.78 1.565 13.433 1.12 19.32-.994l15.961-5.792v16.77c-1.012.18-2.14.36-3.184.535-15.966 2.609-32.97 1.52-49.727-4.002zm171.105 7.425c2.02 0 3.913.782 5.339 2.226a7.487 7.487 0 012.212 5.334 7.472 7.472 0 01-2.212 5.334 7.465 7.465 0 01-5.339 2.217 7.472 7.472 0 01-5.338-2.217 7.467 7.467 0 01-2.208-5.334c0-4.165 3.382-7.56 7.546-7.56zm-6.278 7.56c0 1.677.652 3.256 1.84 4.434a6.2 6.2 0 004.438 1.844 6.281 6.281 0 006.279-6.278c0-1.682-.648-3.26-1.84-4.444a6.195 6.195 0 00-4.439-1.839 6.195 6.195 0 00-4.439 1.84 6.227 6.227 0 00-1.839 4.443zm8.558-4.07c.828.364 1.246 1.066 1.246 2.064 0 .513-.108.944-.328 1.282-.158.243-.382.44-.634.611.198.117.373.257.503.419.18.233.284.607.297 1.115l.04 1.075c.014.288.032.508.077.643.045.198.13.324.239.364l.112.054v.49h-1.628l-.054-.094a1.477 1.477 0 01-.108-.328 5.105 5.105 0 01-.058-.657l-.068-1.336c-.018-.463-.175-.75-.472-.904-.185-.085-.49-.125-.904-.125h-2.29v3.444h-1.461v-8.405h3.904c.638 0 1.174.094 1.587.288zm-4.03 3.386h2.33c.468 0 .841-.085 1.107-.26.243-.176.36-.495.36-.959 0-.503-.167-.832-.518-1.007-.193-.094-.463-.148-.805-.148h-2.473v2.374z"
										fill="#1f1f1f"
										fillRule="evenodd"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* More Examples */}
			<section className="pt-20 pb-32 bg-white">
				<div className="max-w-7xl px-20 mx-auto">
					<h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
						Or how about something else...
					</h2>
					<div className="grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-5 lg:gap-y-20">
						<div className="border shadow-lg p-10 rounded-xl hover:bg-gray-50 cursor-pointer">
							<a href={`/howoldis/The%20Moon%20Landing/1969?youtube=${encodeURIComponent('https://www.youtube.com/watch?v=w4wx_3XOrns')}`}>
								<h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">
									The Moon Landing
								</h3>
								<p className="text-sm text-gray-500 lg:text-base">
									How long ago in tech years was the moon landing?
								</p>
							</a>
						</div>
						<div className="border shadow-lg p-10 rounded-xl hover:bg-gray-50 cursor-pointer">
							<a href={`/howoldis/The%20iPhone%20/2007?youtube=${encodeURIComponent('https://www.youtube.com/watch?v=MnrJzXM7a6o')}`}>
								<h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">
									The iPhone
								</h3>
								<p className="text-sm text-gray-500 lg:text-base">
									How old in tech years is the original iPhone?
								</p>
							</a>
						</div>
						<div className="border shadow-lg p-10 rounded-xl hover:bg-gray-50 cursor-pointer">
							<a href={`/howoldis/DEVELOPERS!%20DEVELOPERS!%20DEVELOPERS!/2000?youtube=${encodeURIComponent('https://youtu.be/EMldOiiG1Ko')}`}>
								<h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">
									DEVELOPERS! DEVELOPERS! DEVELOPERS!
								</h3>
								<p className="text-sm text-gray-500 lg:text-base">
									How long ago did Steve make that fateful speech?
								</p>
							</a>
						</div>
						<div className="border shadow-lg p-10 rounded-xl hover:bg-gray-50 cursor-pointer">
							<a href={`/howoldis/Never%20gonna%20give%20you%20up/1987?youtube=${encodeURIComponent('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}`}>
								<h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 lg:text-lg">
									"Never gonna give you up"
								</h3>
								<p className="text-sm text-gray-500 lg:text-base">
									Seriously, how old in tech years is this song anyway?
								</p>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* How it works link */}
			<section className="py-20 bg-white">
				<div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
						Research and Tested on Mars
					</h2>
					<p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
						Hundreds of years of research (on Mars) has been spent researching exactly how to properly measure things in <em>'tech years'</em>.  
						Read up on the breakthrough research here <span className="text-yellow-500 italic">(see, we have a Jupyter Notebook, it's like officially science)</span>:
					</p>
					<div className="flex justify-center mt-8 space-x-3">
						<a
							href="https://github.com/rblalock/how-old-is-this-in-tech-years/blob/master/in_tech_years.ipynb"
							className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow hover:bg-red-700"
						>
							How this works
						</a>
					</div>
				</div>
			</section>

    </Layout>
  );
};

export default Index;
