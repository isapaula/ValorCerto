import axios from 'axios';
import cheerio from 'cheerio';

function home () {
const url = 'https://br.shein.com/ark/3715?goods_id=33309702&test=5051&url_from=adhub437273549&scene=1&pf=google&ad_type=DPA&language=pt-br&siteuid=br&version_bid=101682411,101507551,100710736,101545096,101682511&version_eid=100647471&landing_page_id=3715&ad_test_id=44360&requestId=olw-59w78lip4toj&cid=22660886387&gad_source=1&skucode=I64luzxqe4l8&onelink=0/googlefeed_br&network=g&gad_campaignid=22660886387&gclid=EAIaIQobChMIuNWr0OW1kQMVgUBIAB3EpAqAEAQYBSABEgKlQvD_BwE&adid=780984463840&tv_b=2&geoid=9199182&setid=187264615589&kwd=pla-336453362635&currency=BRL&lang=pt';
axios(url).then(
  response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const salePreice = $('#productMainPriceId').text().trim();
    console.log(salePreice)
    
    // console.log(html)
  }).catch(console.error)

}

export default home;