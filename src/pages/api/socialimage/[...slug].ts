// Inspired by: https://github.com/vercel/virtual-event-starter-kit/blob/main/pages/api/ticket-images/%5Busername%5D.tsx

import { NextApiRequest, NextApiResponse } from 'next';
import { SITE_URL } from '../../../lib/config';
import screenshot from '../../../lib/screenshot';

const ageImage = async(req: NextApiRequest, res: NextApiResponse) => {
	const [year, name, calculatedYear] = req.query.slug as string[];
  if (year && name && calculatedYear) {
		const url = `${SITE_URL}/image?year=${encodeURIComponent(year)}&name=${encodeURIComponent(name)}&calculatedYear=${encodeURIComponent(calculatedYear)}`;
    const file = await screenshot(url);

    res.setHeader('Content-Type', `image/png`);
    res.setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.statusCode = 200;
    res.end(file);
  } else {
    res.status(404).send('Missing year and name');
  }
};

export default ageImage;
