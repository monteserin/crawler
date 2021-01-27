import { asyncHandler } from '../../middlewares/error-handler';
import { SEOExtractor, HabitacliaExtractor } from '../../services/extractor';
import { getSEO, getRSS } from '../../services/seo';
import builder from 'xmlbuilder';

process.setMaxListeners(0);

const Api = (app) => {
  app.get('/audit-domain', asyncHandler(async (req, res) => {
    const url = 'https://pablomonteserin.com';

    const results = await getSEO(url, SEOExtractor);
    res.send(results);
  }));



  app.get('/audit-habitaclia', asyncHandler(async (req, res) => {
    // const url = 'https://www.idealista.com/alquiler-viviendas/barcelona/gracia/con-pisos,duplex,aticos,amueblado_solo-cocina-equipada,ultimas-plantas/';

    //    const url = 'https://pablomonteserin.com';

    // const url = 'https://www.tecnoempleo.com/';

    const url = 'https://www.habitaclia.com/alquiler-distrito_sarria_sant_gervasi-barcelona.htm?#id3983001590838';

    const results = await getRSS(url, HabitacliaExtractor);
    console.log(results);
    const root = builder.create('rss')
    const channel = root.ele('channel');
    channel.ele('title', 'Habitaclia');
    channel.ele('link', 'https://www.habitaclia.com/');
    channel.ele('description', '');

    results.forEach(r => {
      const item = channel.ele('item');
      item.ele('title', r.title);
      item.ele('link', r.link)

      item.ele('description', '');
    })

    const xml = root.end({ pretty: true });

    console.log(xml);

    res.send(xml);
  }));
};

export default Api;
