
export const isMediaUrl = url => url.match(/png$|jpg$|jpeg$|gif$|webm$|mp4$|mpg$|mp4$|svg$/g);

export const hasMainDomain = baseUrl => url => url.startsWith(baseUrl) && !url.includes('#') && !isMediaUrl(url);
