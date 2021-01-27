export const SEOExtractor = () => {
    const getElements = (selector, property) => {
        return Array.from(document.querySelectorAll(selector)).map(tag => tag[property])
    }

    const h1Texts = getElements('h1', 'innerText');
    const links = getElements('a', 'href');
    const imgSrc = getElements('img', 'src');
    const titleText = getElements('title', 'innerText');
    const metaDescription = getElements('meta[name=description]', 'content');

    return {
        h1Texts,
        links,
        imgSrc,
        titleText,
        metaDescription,
    };
}


export const HabitacliaExtractor = () => {

    const getElements = (item, selector, property) => {
        return Array.from(item.querySelectorAll(selector)).map(tag => tag[property])
    };

    const getItem = (item) => {
        const title = getElements(item, '.list-item-title', 'innerText')[0];
        const link = getElements(item, '.list-item-title a', 'href')[0];
        const price = getElements(item, '.list-item-price .font-2', 'innerText')[0];
        const imgSrc = getElements(item, '.image img', 'src')[0];

        return {
            title,
            link,
            price,
            imgSrc,
        };
    };

    const items = Array.from(document.querySelectorAll('.list-item')).map(tag => {
        return getItem(tag);
    })

    return items;
}