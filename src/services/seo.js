import { validate } from './seo-validations';
import { getPage } from './crawler';
import { hasMainDomain } from '../utils/url'

export const getSEO = async (baseUrl, extractor) => {
  const trackedLinks = [baseUrl];
  let allResults = [];

  const extractPageData = async (url, extractor) => {
    const results = await getPage(url, extractor);

    if (results) {
      const domainLinks = results.links.filter(hasMainDomain(baseUrl));
      const untrackedLinks = domainLinks.filter(link => !trackedLinks.includes(link));

      allResults.push({ ...results, url });

      if (untrackedLinks.length) {
        const pageLinks = untrackedLinks.map(link => {
          trackedLinks.push(link);
          return extractPageData(link, extractor);
        });
        await Promise.all(pageLinks);
      }
    } else {
      allResults.push({ url, error: true })
    }
  }

  await extractPageData(baseUrl, extractor);

  return allResults//.map(result => validate(result));

};



export const getRSS = async (baseUrl, extractor) => {
  let allResults = [];

  const extractPageData = async (url, extractor) => {
    const results = await getPage(url, extractor);

    if (results) {
      //allResults.push(results);
      allResults = results;

    } else {
      allResults.push({ url, error: true })
    }
  }

  await extractPageData(baseUrl, extractor);
  return allResults;

};