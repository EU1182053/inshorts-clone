import React, { useEffect, useState } from 'react'
import NavInshorts from './NavInshorts'
import NewsContent from "./NewsContent/NewsContent"
import Footer from "./Footer/Footer"
import Menu from '../../Menu';
 

const NewsApp = () => {
  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadMore, setLoadMore] = useState(50 || 200);


  // console.log(process.env);
  // console.log(NEWS_API);

  useEffect(() => {
    const newsApi = async () => {

      setnewsArray([
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Samsung Has Launched Samsung Galaxy F54 5G Smartphone | Business News | ET Now - ET NOW",
          "description": "With an aim to further strong hold the smartphone segment, Samsung has launched Samsung Galaxy F54 5G smartphone in the affordable premium smartphone categor...",
          "url": "https://www.youtube.com/watch?v=JkgSQ3oNbS0",
          "urlToImage": "https://i.ytimg.com/vi/JkgSQ3oNbS0/maxresdefault.jpg",
          "publishedAt": "2023-06-06T14:14:29Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": "Press Trust of India",
          "title": "\"Have Not Said Ravichandran Ashwin Is...\": Rohit Sharma On India's Playing XI For WTC Final vs Austr.. - NDTV Sports",
          "description": "On team combination, Rohit Sharma did not reveal much and expectedly kept the suspense going till toss time",
          "url": "https://sports.ndtv.com/cricket/have-not-said-ravichandran-ashwin-is-rohit-sharma-on-indias-playing-xi-for-wtc-final-vs-australia-4099352",
          "urlToImage": "https://c.ndtvimg.com/2023-06/fds0f5qo_rohit-ashwin_625x300_06_June_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
          "publishedAt": "2023-06-06T13:42:20Z",
          "content": "On another nippy and overcast morning in London on Tuesday, Rohit was among the four squad members who turned up for optional practice. R Ashwin, Umesh and K S Bharat were the others who showed up in… [+3024 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": null,
          "title": "About 83 bodies remain unidentified four days after Indian rail crash - Reuters India",
          "description": "Indian authorities made fervent appeals to families on Tuesday to help identify 83 unclaimed bodies kept in hospitals and mortuaries after the death toll in the country's <a href=\"/world/india/indian-train-crash-death-toll-jumps-233-900-injured-2023-06-03/\">d…",
          "url": "https://www.reuters.com/world/india/over-100-dead-bodies-remain-unclaimed-after-indian-rail-disaster-2023-06-06/",
          "urlToImage": "https://www.reuters.com/resizer/mEZ0s3rFno55ixV3JXAW6rZlzd0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HCBS6DINZRJUTDUNPTUCT4NRSI.jpg",
          "publishedAt": "2023-06-06T13:14:00Z",
          "content": "BALASORE, India, June 6 (Reuters) - Indian authorities made fervent appeals to families on Tuesday to help identify 83 unclaimed bodies kept in hospitals and mortuaries after the death toll in the co… [+4131 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "India Today"
          },
          "author": "Poulomi Saha",
          "title": "Delhi-San Francisco Air India flight diverted to Russia after engine snag - India Today",
          "description": "The flight with 216 passengers and 16 crew members landed safely in Russia’s Magadan airport.",
          "url": "https://www.indiatoday.in/india/story/delhi-san-francisco-air-india-flight-diverted-to-russia-after-engine-snag-2389580-2023-06-06",
          "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/air_india_pti-sixteen_nine.jpeg?VersionId=4QJoDJJojSrK.vZKscxaombnFNPk4wYx",
          "publishedAt": "2023-06-06T12:53:54Z",
          "content": "By Poulomi Saha: An Air India flight from Delhi to San Francisco was diverted to Russia after the aircraft reported a technical glitch in one of its engines. The flight with 216 passengers and 16 cre… [+432 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "\"Told Not To Talk About It\": Wrestler Bajrang Punia On Amit Shah Meet - NDTV",
          "description": "The wrestlers demanded an impartial probe and quick action against Brij Bhushan Sharan Singh, who has been accused of sexual harassment by seven women wrestlers, including a minor, they said.",
          "url": "https://www.ndtv.com/india-news/no-deal-with-amit-shah-protests-to-continue-wrestler-bajrang-punia-to-ndtv-4098758",
          "urlToImage": "https://c.ndtvimg.com/2023-06/2ar0906o_bajrang-punia-ndtv_625x300_06_June_23.jpg",
          "publishedAt": "2023-06-06T12:21:00Z",
          "content": "Wrestlers Protest: \"We are ready to quit our jobs if it becomes an obstacle in our agitation,\" he said.\r\nNew Delhi: Olympian wrestler Bajrang Punia, one of the elite grapplers leading the protest aga… [+4273 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Vision Pro: Apple's new augmented reality headset unveiled - BBC",
          "description": "The high price and two-hour battery life raise questions about how popular the new device will be.",
          "url": "https://www.bbc.com/news/technology-65809408",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15E1E/production/_130003698_apple_vision_pro.jpg",
          "publishedAt": "2023-06-06T11:31:47Z",
          "content": "Apple has unveiled a much-anticipated augmented reality headset, Apple Vision Pro, in its first major hardware launch for almost a decade.\r\nApple chief executive Tim Cook said the new headset \"seamle… [+5167 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "DAWN.com"
          },
          "author": "DAWN.com",
          "title": "PTI's Shah Mahmood Qureshi released from Adiala Jail - DAWN.com",
          "description": null,
          "url": "https://www.dawn.com/news/1758286/ptis-shah-mahmood-qureshi-released-from-adiala-jail",
          "urlToImage": null,
          "publishedAt": "2023-06-06T11:30:22Z",
          "content": null
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TIMESOFINDIA.COM",
          "title": "NASA's James Webb Telescope captures infrared images of 45,000 galaxies - Indiatimes.com",
          "description": "Trending News: The James Webb Space Telescope (JWST) captured an infrared image of the GOODS-South region, revealin",
          "url": "https://timesofindia.indiatimes.com/etimes/trending/nasas-james-webb-telescope-captures-infrared-images-of-45000-galaxies/articleshow/100791998.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-100791964,width-1070,height-580,imgsize-29446,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-06-06T11:30:00Z",
          "content": null
        },
        {
          "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
          },
          "author": "Manish Singh and Rita Liao",
          "title": "Sequoia splits China and India arms from US mothership - TechCrunch",
          "description": "Sequoia is splitting into three entities -- Sequoia Capital in US and Europe, Peak XY Partners in India and SEA, and HongShan in China",
          "url": "https://techcrunch.com/2023/06/06/sequoia-rebrands-china-india-and-southeast-asia-units/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/04/GettyImages-563374603-1.jpg?resize=1200,602",
          "publishedAt": "2023-06-06T11:15:00Z",
          "content": "Sequoia is splitting into three entities — Sequoia Capital in U.S. and Europe, Peak XV Partners in India and Southeast Asia, and HongShan in China — as the storied venture firm scrambles to assess th… [+3239 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sporting News"
          },
          "author": null,
          "title": "'I wanted to retire here' - Karim Benzema says goodbye to Real Madrid in emotional press conference ahead of Al-Ittihad transfer - Goal.com",
          "description": "Get all the latest Soccer news, highlights, scores, schedules, standings and more from Sporting News Canada.",
          "url": "https://www.sportingnews.com/ca/soccer",
          "urlToImage": "https://static.sportingnews.com/1.32.0.8/themes/custom/tsn/logo.jpg",
          "publishedAt": "2023-06-06T11:00:58Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Rakesh Patil",
          "title": "Closing Bell: Sensex, Nifty end flat amid volatility; IT index major drag - Moneycontrol",
          "description": "The BSE midcap index rose 0.3 percent and smallcap index added 0.5 percent.",
          "url": "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-june-6-latest-news-bse-nse-sensex-nifty-covid-coronavirus-10747931.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/06/Sensex_Nifty-2-770x433.jpg",
          "publishedAt": "2023-06-06T10:54:03Z",
          "content": "<li>NHPC signs MoU with Maharashtra govt to establish Energy Storage Systems\r\n</li><li>JPMorgan keeps neutral rating on Tata Consumer Products, target at Rs 770\r\n</li><li>Indices trade in the red, Ni… [+4300 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Iran Unveils Hypersonic Missile, Can Go 15 Times Speed Of Sound: Report - NDTV",
          "description": "Iran's Revolutionary Guards unveiled an intermediate range ballistic missile Tuesday capable of travelling at hypersonic speeds of up to 15 times the speed of sound, state television reported.",
          "url": "https://www.ndtv.com/world-news/iran-unveils-new-hypersonic-fattah-missile-has-a-range-of-1-400-km-report-4098761",
          "urlToImage": "https://c.ndtvimg.com/2023-06/s7l5d178_fattah-missile_625x300_06_June_23.jpg",
          "publishedAt": "2023-06-06T10:48:56Z",
          "content": "The range of the Fattah missile is 1,400 kilometres.\r\nTehran, Iran: Iran's Revolutionary Guards unveiled an intermediate range ballistic missile Tuesday capable of travelling at hypersonic speeds of … [+2429 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ANI News"
          },
          "author": null,
          "title": "Study detects most distant organic molecules using Webb telescope - ANI News",
          "description": "Astronomers discovered complex organic molecules in the most distant galaxy to date, using NASA's James Webb Space Telescope.\nThe study was published in 'Nature.'",
          "url": "https://www.aninews.in/news/science/space/study-detects-most-distant-organic-molecules-using-webb-telescope20230606155806",
          "urlToImage": "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230606102752.jpg",
          "publishedAt": "2023-06-06T10:29:58Z",
          "content": "Washington [US], June 6 (ANI): Astronomers discovered complex organic molecules in the most distant galaxy to date, using NASA's James Webb Space Telescope.The study was published in 'Nature.'The dis… [+5049 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Quint"
          },
          "author": "Quint NEON",
          "title": "Netizens React To 'Adipurush' Producers Leaving A Seat Vacant For Lord Hanuman - The Quint",
          "description": "“Lord Hanuman appears wherever the Ramayana is recited. It is our belief. Respecting this belief, every theatre screening Prabhas' Rama-starrer Adipurush will reserve one seat for Lord Hanuman without selling it.” read the statement.",
          "url": "https://www.thequint.com/neon/social-buzz/netizens-react-to-adipurush-producers-leaving-a-seat-vacant-for-lord-hanuman",
          "urlToImage": "https://images.thequint.com/thequint%2F2023-06%2F7321efce-4e17-4e3e-a625-2dcff0056030%2FNeon_Hero_Image__1_.png",
          "publishedAt": "2023-06-06T10:12:54Z",
          "content": "Ahead of the release of the much-awaited Prabhas-and-Kriti Sanon-starrer Adipurush, the film has, yet again, made headlines and sparked some hilarious reactions on social media.\r\nThe producers of the… [+330 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Lung Cancer Pill Significantly Lowers The Risk Of Death After Surgery: Study - NDTV",
          "description": "Impressive outcomes from a lung cancer drug have been reported in recently published research over the weekend.",
          "url": "https://www.ndtv.com/feature/lung-cancer-pill-significantly-lowers-the-risk-of-death-after-surgery-study-4098586",
          "urlToImage": "https://c.ndtvimg.com/2020-12/1pt4hlk_lung-cancer_625x300_02_December_20.jpg",
          "publishedAt": "2023-06-06T10:10:58Z",
          "content": "The biggest cause of cancer-related death worldwide is lung cancer.\r\nThe patients of lung cancer, which is the 2nd most common cancer worldwide and one of the leading causes of death, have good news … [+1676 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "India Today"
          },
          "author": "India Today Entertainment Desk",
          "title": "Swara Bhasker, Fahad Ahmad announce pregnancy. Guneet Monga, Gauahar Khan and others congratulate the couple - India Today",
          "description": "Swara Bhasker announced her first pregnancy with a sweet Instagram post. Several Bollywood celebrities such as Gauahar Khan, Guneet Monga, Tanuja Chandra and others have sent best wishes to the soon-to-be-parents.",
          "url": "https://www.indiatoday.in/movies/celebrities/story/celebrities-reaction-to-swara-bhasker-fahad-ahmad-pregnancy-announcement-2389438-2023-06-06",
          "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/swara_bhaskara-sixteen_nine.jpg?VersionId=.APCb1hZ2NeoTiQ4xnu5PgslmELlYaL7",
          "publishedAt": "2023-06-06T09:58:19Z",
          "content": "By India Today Entertainment Desk: Swara Bhasker is all set to become a mommy! The actress, on Tuesday, took to her social media and uploaded pictures with her husband, Fahad Ahmed. The mom-to-be can… [+1261 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT News Desk",
          "title": "Apple WWDC 2023: Price cut announced for this Macbook Air. Check new rate here - Hindustan Times",
          "description": "The company has also unveiled the latest model of its Macbook Air laptops, the 15-inch Macbook Air.",
          "url": "https://www.hindustantimes.com/technology/13-inch-macbook-air-price-drop-alert-apple-worldwide-developers-conference-2023-101686041870666.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/06/1600x900/MB_1686042042201_1686042047771.jpg",
          "publishedAt": "2023-06-06T09:37:47Z",
          "content": "On Monday, the opening day of its 2023 Worldwide Developers Conference (WWDC), Apple unveiled the 15-inch Macbook Air. Simultaneously, the tech giant announced a price cut for the existing 13-inch Ma… [+928 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "etimes.in",
          "title": "Amitabh Bachchan finally reveals why he goes to meet his fans outside his house bare feet on Sunday, and - Indiatimes.com",
          "description": "Amitabh Bachchan has a ritual of greeting his fans outside his house 'Jalsa', every Sunday since the last 41 years!",
          "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/amitabh-bachchan-finally-reveals-why-he-goes-to-meet-his-fans-outside-his-house-bare-feet-on-sunday-and-wins-the-internet-see-inside/articleshow/100791148.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-100791124,width-1070,height-580,imgsize-124046,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-06-06T09:34:00Z",
          "content": "Here's how Abhishek Bachchan dropped wishes for Amitabh Bachchan and Jaya Bachchan's 50th wedding anniversary - Pics insideAmitabh Bachchan and Jaya Bachchan celebrate their 50th wedding anniversary … [+63 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Deccan Herald"
          },
          "author": null,
          "title": "Zotrim Reviews: Weight Loss Supplement Dosage, Benefits, Ingredients Report Updated - Deccan Herald",
          "description": "Zotrim Reviews 2023: Best Hunger Control Pills - Is It A Safe Way to Lose Weight? Some people find it hard to lose weight. They need to watch what they eat and exercise more often. One of the biggest problems for losing weight is eating too much snacks and un…",
          "url": "https://www.deccanherald.com/brandspot/sponsored/zotrim-reviews-weight-loss-supplement-dosage-benefits-ingredients-report-updated-1225328.html",
          "urlToImage": "https://www.deccanherald.com/sites/dh/files/Pict%20151-1225328-1686057453.png",
          "publishedAt": "2023-06-06T09:24:04Z",
          "content": "Zotrim Reviews 2023: Best Hunger Control Pills - Is It A Safe Way to Lose Weight?\r\nSome people find it hard to lose weight. They need to watch what they eat and exercise more often.\r\nOne of the bigge… [+22300 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Stella Dey",
          "title": "Rehana Fathima: Sued for kids painting on her topless body, Kerala activist’s huge win in court - Moneycontrol",
          "description": "One of the major controversies surrounding Rehana Fathima was her attempt to enter the Sabarimala temple in 2018.",
          "url": "https://www.moneycontrol.com/news/trends/current-affairs/who-is-rehana-fathima-kerala-activist-in-legal-case-after-her-children-painted-on-her-semi-nude-body-10751651.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/06/Collage-Maker-06-Jun-2023-02-50-PM-5512-770x433.jpg",
          "publishedAt": "2023-06-06T09:22:04Z",
          "content": "Rehana Fathima, a Kerala-based activist, has found respite in a POCSO case where the state High Court discharged her citing that a womans autonomous decision over her body is at the very core of her … [+2005 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "ET Online",
          "title": "Balasore Train Crash: 'Electrocution may have killed 40 in Coromandel Express' - Economic Times",
          "description": "According to a supervising police officer involved in the rescue operation, around 40 bodies recovered from the derailed carriages of the Coromandel Express, which was part of the triple train crash in Balasore, Odisha, may have been electrocuted due to snapp…",
          "url": "https://economictimes.indiatimes.com/news/india/odisha-mishap-electrocution-may-have-caused-deaths-of-40-people-whose-bodies-showed-no-external-injuries/articleshow/100790292.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-100790319,width-1070,height-580,imgsize-289470,overlay-economictimes/photo.jpg",
          "publishedAt": "2023-06-06T09:13:00Z",
          "content": "Baring, Blackstone, 3 Others in Fray to Acquire Indira IVFBaring PE Asia EQT, Blackstone, Bain Capital, Advent International and TPG Capital have submitted non-binding bids to acquire a majority stak… [+176 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Deccan Herald"
          },
          "author": "Shemin Joy",
          "title": "Sachin Pilot likely to announce new party on June 11 - Deccan Herald",
          "description": "A compromise enforced by the Congress leadership a week ago in their Rajasthan unit appeared to be crumbling as dissident leader Sachin Pilot is contemplating walking out and may indicate his next move on June 11, the death anniversary of his late father Raje…",
          "url": "https://www.deccanherald.com/national/national-politics/new-party-or-next-move-sachin-pilot-to-indicate-on-june-11-1225309.html",
          "urlToImage": "https://www.deccanherald.com/sites/dh/files/articleimages/2023/06/06/sachn-pilot-pti-1225309-1686058919.jpg",
          "publishedAt": "2023-06-06T08:40:04Z",
          "content": "A compromise enforced by the Congress leadership a week ago in their Rajasthan unit appeared to be crumbling as dissident leader Sachin Pilot is contemplating walking out and may indicate his next mo… [+3858 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Siasat Daily"
          },
          "author": "Indo-Asian News Service",
          "title": "SpaceX Dragon enroute to ISS with 7K pounds of cargo, blueberries - The Siasat Daily",
          "description": "Washington: NASA has launched SpaceX's Dragon resupply spacecraft with more than 7,000 pounds of science experiments, two new solar panels, and other cargo including blueberries to the International Space Station (ISS). The liftoff was scrubbed twice over the…",
          "url": "https://www.siasat.com/spacex-dragon-enroute-to-iss-with-7k-pounds-of-cargo-blueberries-2608046/",
          "urlToImage": "https://cdn.siasat.com/wp-content/uploads/2021/10/spacex.jpg",
          "publishedAt": "2023-06-06T08:32:00Z",
          "content": "Washington: NASA has launched SpaceX’s Dragon resupply spacecraft with more than 7,000 pounds of science experiments, two new solar panels, and other cargo including blueberries to the International … [+2027 chars]"
        },
        {
          "source": {
            "id": "the-hindu",
            "name": "The Hindu"
          },
          "author": "The Hindu",
          "title": "Narcotics Control Bureau busts major DarkNet-based LSD smuggling syndicate - The Hindu",
          "description": null,
          "url": "https://www.thehindu.com/news/national/ncb-busts-pan-india-darknet-based-drug-cartel-network/article66937126.ece",
          "urlToImage": null,
          "publishedAt": "2023-06-06T08:28:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Rediff.com"
          },
          "author": "PTI",
          "title": "Why Starc chose to skip IPL for Test cricket revealed! - Rediff.com",
          "description": "The real reason behind Mitchell Starc's IPL absence revealed",
          "url": "https://www.rediff.com/cricket/report/wtc-final-why-starc-chose-to-skip-ipl-for-test-cricket-revealed/20230606.htm",
          "urlToImage": "https://im.rediff.com/cricket/2023/jun/06starc.jpg",
          "publishedAt": "2023-06-06T08:18:24Z",
          "content": "The money's nice, but I'd love to play 100 Test matches: Mitchell Starc \r\nIMAGE: Mitchell Starc will be looking to add another ICC event to his name when he turns up for Australia in the World Test C… [+2077 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "GSMArena.com"
          },
          "author": "Michail",
          "title": "Apple iPhone X and older iPhones are not getting iOS 17 - GSMArena.com news - GSMArena.com",
          "description": "It’s the end of the road for the iPhone X, iPhone 8 and 8 Plus. Apple announced iOS 17 yesterday with several noteworthy features including StandBy mode,...",
          "url": "https://www.gsmarena.com/iphone_x_and_older_iphones_not_getting_ios_17-news-58786.php",
          "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/06/ios-17-cuts-support-iphone-x/-952x498w6/gsmarena_000.jpg",
          "publishedAt": "2023-06-06T08:01:01Z",
          "content": "Apple announced iOS 17 yesterday with several noteworthy features including StandBy mode, NameDrop and Live Voicemail. As is the case with new iOS versions, several older model iPhones are left unsup… [+584 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Sports Desk",
          "title": "Kohli fires warning to Rohit and Co. before WTC final, shares crucial advice - Hindustan Times",
          "description": "Virat Kohli has fired a fresh warning to Rohit Sharma and Co. before the ICC World Test Championship final between India and Australia at The Oval. | Cricket",
          "url": "https://www.hindustantimes.com/cricket/virat-kohli-fires-warning-to-rohit-sharma-and-co-wtc-final-vs-aus-advises-ind-stars-to-be-cautious-wont-get-flat-wicket-101686033450800.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/06/1600x900/Britain-Cricket-India-Australia-31_1686036800000_1686036829561.jpg",
          "publishedAt": "2023-06-06T07:34:55Z",
          "content": "After being upstaged by the Black Caps in the inaugural edition of the ICC World Test Championship, the onus is on run-machine Virat Kohli to make amends and deliver the goods with the bat in India's… [+2122 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Russia launches air strike on Kyiv, city official says attack repelled | Russia-Ukraine War | WION - WION",
          "description": "Russia launched a new wave of overnight air strikes on Kyiv, with officials at the Ukrainian capital saying that air defence systems downed more than 20 crui...",
          "url": "https://www.youtube.com/watch?v=nP9-BzjKQRg",
          "urlToImage": "https://i.ytimg.com/vi/nP9-BzjKQRg/maxresdefault_live.jpg",
          "publishedAt": "2023-06-06T07:21:34Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "India TV News"
          },
          "author": "Written by Snigdha Behera",
          "title": "Heart Disease: Know all the risk factors to prevent a heart attack - India TV News",
          "description": "Some heart disease risk factors and symptoms in women can differ from those in men. Here are the risk factors and symptoms of heart disease in women that you should know",
          "url": "https://www.indiatvnews.com/health/heart-disease-know-all-the-risk-factors-to-prevent-a-heart-attack-2023-06-06-874511",
          "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/healthhh-1686034014.jpg",
          "publishedAt": "2023-06-06T07:02:56Z",
          "content": "Coronary heart disease is the most common cause of heart attack, which can be life-threatening. Fortunately or unfortunately, the biggest risk factors of heart disease are in your control. Knowing ab… [+2417 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TOI Photogallery",
          "title": "Sunny Leone twins with Maldivian seascape in chic blue swimsuit - Indiatimes.com",
          "description": "Sunny Leone twins with Maldivian seascape in chic blue swimsuit",
          "url": "https://photogallery.indiatimes.com/web-stories/sunny-leone-twins-with-maldivian-seascape-in-chic-blue-swimsuit/photostory/100785703.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-100785734,width-900,height-1200,resizemode-6.cms",
          "publishedAt": "2023-06-06T06:51:57Z",
          "content": "Sunny cannot get enough of the trendy swimsuits, especially when she is on holiday. Only this time, she decided to twin with the Maldivian seascape as she posed on the beach for a series of alluring … [+5 chars]"
        },
        {
          "source": {
            "id": "the-hindu",
            "name": "The Hindu"
          },
          "author": "The Hindu",
          "title": "Ukraine accuses Russia of destroying major dam near Kherson, warns of widespread flooding - The Hindu",
          "description": null,
          "url": "https://www.thehindu.com/news/international/ukraine-accuses-russia-of-destroying-major-dam-near-kherson-warns-of-widespread-flooding/article66936828.ece",
          "urlToImage": null,
          "publishedAt": "2023-06-06T06:37:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "India Today"
          },
          "author": "Akshay Dongare",
          "title": "1 BSF jawan killed, 2 Assam Rifles personnel injured in Manipur's Serou - India Today",
          "description": "A jawan of the Border Security Force (BSF) died while two Assam Rifles personnel sustained gunshot wounds in Manipur’s Serou area in firing between security forces and a group of insurgents on the intervening night of June 5-6.",
          "url": "https://www.indiatoday.in/india/story/bsf-jawan-killed-assam-rifles-personnel-injured-manipur-serou-army-2389364-2023-06-06",
          "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/army--sixteen_nine.jpg?VersionId=3U2d1sxAd5Swk4naR2OUZ8Pyn7rTgft2",
          "publishedAt": "2023-06-06T06:31:09Z",
          "content": "By Akshay Dongare: A jawan of the Border Security Force (BSF) died while two Assam Rifles personnel sustained gunshot wounds in Manipur’s Serou area in firing between security forces and a group of i… [+1879 chars]"
        },
        {
          "source": {
            "id": "the-hindu",
            "name": "The Hindu"
          },
          "author": "The Hindu",
          "title": "BYJU'S moves New York Supreme Court challenging acceleration of $1.2 billion Term Loan B - The Hindu",
          "description": null,
          "url": "https://www.thehindu.com/business/Industry/byjus-moves-new-york-supreme-court-challenging-acceleration-of-12-billion-term-loan-b/article66936812.ece",
          "urlToImage": null,
          "publishedAt": "2023-06-06T06:23:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "Potentially Hazardous 1500-foot asteroid hurtling towards Earth at fearsome pace! - HT Tech",
          "description": "NASA has issued an alert that a bridge-sized asteroid is on course to approach Earth soon! Check out its speed, distance, and other details, as revealed by the space agency.",
          "url": "https://tech.hindustantimes.com/tech/news/potentially-hazardous-1500-foot-asteroid-hurtling-towards-earth-at-fearsome-pace-71686026534327.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2023/06/06/1600x900/space-1728186_640_1685508037976_1686026611347.jpg",
          "publishedAt": "2023-06-06T04:43:56Z",
          "content": "NASA uses telescopes, such as Pans-STARRS1 in Maui, Hawaii, and Catalina Sky Survey near Tucson, Arizona, to detect near-Earth objects like asteroids and comets. To collect accurate information about… [+2154 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "ANI",
          "title": "Adults with regular, healthy sleep schedule have lower risk of death: Study - Hindustan Times",
          "description": "The study emphasises on the need of maintaining a consistent sleep schedule to lower the risk of death. | Health",
          "url": "https://www.hindustantimes.com/lifestyle/health/adults-with-regular-healthy-sleep-schedule-have-lower-risk-of-death-study-101686023852142.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/06/1600x900/sleep_getty_images-iStockphoto_1641046481543_1686024176022.jpg",
          "publishedAt": "2023-06-06T04:06:44Z",
          "content": "A new study, which will be presented at the SLEEP 2023 annual meeting, emphasises that individuals should keep a consistent sleep schedule with a regular bedtime and wake time, in addition to receivi… [+2091 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Business Today"
          },
          "author": "Business Today Desk",
          "title": "Qatar Airways Kolkata-Doha flight delayed due to bomb scare, aircraft still at Kolkata airport - Business Today",
          "description": "A passenger allegedly started shouting about a bomb scare inside the aircraft.",
          "url": "https://www.businesstoday.in/industry/aviation/story/qatar-airways-kolkata-doha-flight-delayed-due-to-bomb-scare-aircraft-still-at-kolkata-airport-384341-2023-06-06",
          "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202306/ezgif-sixteen_nine_88.jpg",
          "publishedAt": "2023-06-06T03:48:21Z",
          "content": "A Qatar Airways Kolkata-Doha flight (QR 541) flight on Tuesday was delayed due to a bomb scare. A passenger allegedly started shouting about a bomb scare inside the aircraft, India Today reported cit… [+593 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Investing.com"
          },
          "author": "Reuters",
          "title": "Oil falls as economic fears overshadow Saudi output cut By Reuters - Investing.com",
          "description": "Oil falls as economic fears overshadow Saudi output cut",
          "url": "https://www.investing.com/news/commodities-news/oil-prices-tick-down-with-opec-meeting-in-rear-view-3098695",
          "urlToImage": "https://i-invdn-com.investing.com/news/OPEC_800x533_L_1601882884.jpg",
          "publishedAt": "2023-06-06T00:58:00Z",
          "content": "By Rowena Edwards\r\nLONDON (Reuters) -Oil prices tumbled by more than $1 a barrel on Tuesday, retreating from a strong rally in the previous session as worries over global economic growth outweighed S… [+2053 chars]"
        },
        {
          "source": {
            "id": "the-hindu",
            "name": "The Hindu"
          },
          "author": "The Hindu",
          "title": "Russia claims it thwarted Ukrainian attacks in provinces annexed by Moscow - The Hindu",
          "description": null,
          "url": "https://www.thehindu.com/news/international/russia-claims-it-thwarted-ukrainian-attacks-in-provinces-annexed-by-moscow/article66933335.ece",
          "urlToImage": null,
          "publishedAt": "2023-06-05T09:07:00Z",
          "content": null
        }
      ]);

      setnewsResults(38);


    };

    newsApi();
  }, [newsResults, category, loadMore]);
  return (
    <div className="App">
      <Menu />
      <NavInshorts setCategory={setCategory} />
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
      <Footer />
    </div>
  );
}

export default NewsApp