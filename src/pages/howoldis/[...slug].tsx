import React, { useMemo } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Meta } from '../../Components/Meta';
import Layout from '../../Components/Layout';
import YearCard from '../../Components/YearCard';
import { IMAGE_URL } from '../../lib/config';

type Props = {
  name?: string | null;
	year?: string | null;
	calculatedYear?: number | null;
};

const Detail = (props: Props) => {
	const socialImage = useMemo(() => {
		if (props.calculatedYear && props.name) {
			return `${IMAGE_URL}/**${props.name}**%20is%20**${Math.trunc(props.calculatedYear)}**%20tech%20years%20old.png?md=1&theme=dark`;
		} else {
			return undefined;
		}
	}, [props]);

  return (
    <Layout>
				<Meta
          title={`${props.name} is ${props.calculatedYear?.toFixed(1)} tech years old`}
          description={`${props.name} is ${props.calculatedYear?.toFixed(1)} tech years old`}
					image={socialImage}
        />

			<section className="relative w-full bg-center bg-cover">

				{/* BG */}
				<div className={`absolute inset-0 bg-gradient-to-br opacity-90 from-red-700 via-red-500 to-yellow-300`} />

				{/* Header */}
				<div className="mx-auto max-w-7xl">
					<div className="relative h-24 px-10 mx-auto pt-10">
						<a
							href="/"
							className="flex items-center mb-4 font-medium text-gray-100 order-none w-auto justify-center md:mb-0"
						>
							<span className="text-3xl md:text-5xl text-gray-100 select-none logo font-black">
								<span className={`text-yellow-300 mr-3 underline`}>How old is this</span>
								<span className="text-white italic font-extralight">in tech years?</span>
							</span>
						</a>
					</div>

					<div className="px-10 pt-20 pb-40 mx-auto text-center w-full">
						<YearCard
							year={props.year}
							name={props.name}
							calculatedYear={props.calculatedYear} />
					</div>
				</div>
			</section>

			{/* How it works link */}
			<section className="py-20 bg-white">
				<div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
					<p className="max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl mb-10">
						Want to see how old something is? <a href="/" className="text-red-500 font-bold">Try it!</a>
					</p>

					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
						Research and Tested on Mars
					</h2>
					<p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
						Hundreds of years of research (on Mars) has been spent researching exactly how to properly measure things in <em>'tech years'</em>.  Read up on the breakthrough research below.
					</p>
					<div className="flex justify-center mt-8 space-x-3">
						<a
							href="#"
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

export default Detail;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const name = params?.slug?.[0]?.toString() || null;
	const year = params?.slug?.[1]?.toString() || null;

    if (name && year) {
			// todo - Ref. how formula has come about by linking to public notebook
			const multiplier = Math.PI;
			const X = (new Date().getFullYear()) - parseInt(year);
			const m = Math.log(2);
			const c = Math.log(1);
			const calculatedYear = (m * X + c) * multiplier;

			return {
				props: {
					name,
					year,
					calculatedYear
				},
				revalidate: 5
			};
    }

		return {
			props: {}
		};
};

export const getStaticPaths: GetStaticPaths = async () => {
  return Promise.resolve({
    paths: [],
    fallback: 'blocking'
  });
};
