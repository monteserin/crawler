

export const validateImages = (images = []) => {
   return{
       images: images.filter(o => o.alt == null || o.alt == '' )
   }
}

export const validateH1 = (h1s = []) => {
    return {
        count: h1s.length,
        tooShort: h1s.filter(txt => txt && txt.length < 20),
        tooLong: h1s.filter(txt => txt && txt.length > 70),
    };}

export const validateTitle = (titles = []) => {
    return {
        count: titles.length,
        tooLong: titles.filter(txt => txt && txt.length > 65)
    };
}

export const validateMetaDescription = (descriptions = []) => {
    return {
        count: descriptions.length,
        tooLong: descriptions.filter(txt => txt && txt.length > 155)
    }
}

export const validate = results => {
    const imgResults = validateImages(results.imgSrc);
    const h1Results = validateH1(results.h1Texts);
    const titleResults = validateTitle(results.titleText);
    const metaDescriptionResults = validateMetaDescription(results.metaDescription);

    return {
        imgResults,
        titleResults,
        h1Results,
        titleResults,
        metaDescriptionResults,
        links: results.links,
        url: results.url
    };
}