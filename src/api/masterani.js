import axios from "axios";
import cheerio from "cheerio";
import _ from "lodash";
import { parseScript } from "shift-parser";

const CORS = "https://cors-anywhere.herokuapp.com/";
const CORSX = "https://secret-ocean-49799.herokuapp.com/";
const BASE_URL = "https://www.masterani.me";
const FULL_URL = `${CORS}${BASE_URL}`;
const FULL_URLX = `${CORSX}${BASE_URL}`;

// Bulk Anime
const updated = "/api/releases";
const popular = "/api/anime/trending/today";
const trending = "/api/anime/trending/now";
const trendingBoth = "/api/anime/trending";
const scheduled = "/anime/schedule";

// Anime details
const anime = "/api/anime/";
const detailed = "/detailed";

// Searching
const filter = "filter?";
// const order = 'order=';
// const type = 'type=';
// const page = 'page=';
// const genres = 'genres=';
const search = "search?search=";

// Image URLs
const CDN = "https://cdn.masterani.me";
// Posters
const large = `${CDN}/poster/1/`;
const medium = `${CDN}/poster/2/`;
const small = `${CDN}/poster/3/`;
// Episode thumbs
// const thumbnail = `${CDN}/episodes/`;
const wallpaper = `${CDN}/wallpaper/0/`;
const defaultWallpaper =
  "https://img00.deviantart.net/32b6/i/2014/353/a/2/mashup_anime_collage_by_dinocojv-d8af5lu.jpg";

const Masterani = {
  // Newly updated
  async getUpdatedAnimes() {
    const { data } = await axios.get(`${FULL_URLX}${updated}`);
    const animes = data.map((anime, index) => {
      const img = `${medium}${anime.anime.poster}`;
      anime.anime.poster = img;
      anime.url = `/watch/${anime.anime.id}`;

      return anime;
    });
    // console.log(animes);
    return animes;
  },
  // Popular Animes
  async getPopularAnimes() {
    const { data } = await axios.get(`${FULL_URLX}${popular}`);
    const animes = data.map((el, index) => {
      const img = `${medium}${el.poster}`;
      const id = el.slug.substr(0, el.slug.indexOf("-"));
      const anime = {
        anime: {
          poster: img,
          title: el.title
        },
        url: `/watch/${id}`,
        extra: el.total
      };
      return anime;
    });
    // console.log(animes);
    return animes;
  },
  // Trending Animes
  async getTrendingAnimes() {
    const { data } = await axios.get(`${FULL_URLX}${trending}`);
    const animes = data.map((el, index) => {
      const img = `${medium}${el.poster}`;
      const id = el.slug.substr(0, el.slug.indexOf("-"));
      const anime = {
        anime: {
          poster: img,
          title: el.title
        },
        url: `/watch/${id}`,
        extra: el.total
      };
      return anime;
    });
    // console.log(animes);
    return animes;
  },
  // Filtered Animes
  async getTFilteredAnimes(query = "order=score_desc&page=1") {
    const { data } = await axios.get(`${FULL_URLX}${filter}${query}`);
    return data;
  },
  async getPopularAndTrendingAnimes() {
    const { data } = await axios.get(`${FULL_URLX}${trendingBoth}`);
    const { being_watched, popular_today } = data;
    const trending = being_watched.map((el, index) => {
      const img = `${medium}${el.poster}`;
      const id = el.slug.substr(0, el.slug.indexOf("-"));
      const anime = {
        anime: {
          poster: img,
          title: el.title
        },
        url: `/watch/${id}`,
        extra: el.total
      };
      return anime;
    });
    const popular = popular_today.map((el, index) => {
      const img = `${medium}${el.poster}`;
      const id = el.slug.substr(0, el.slug.indexOf("-"));
      const anime = {
        anime: {
          poster: img,
          title: el.title
        },
        url: `/watch/${id}`,
        extra: el.total
      };
      return anime;
    });
    return {
      popular,
      trending
    };
  },
  // Scheduled Animes
  async getScheduledAnimes() {
    const { data } = await axios.get(`${FULL_URLX}${scheduled}`);
    const $ = cheerio.load(data);
    const body = $("body");
    const script = $('script[type="text/javascript"]', body)
      .first()
      .html();
    const ast = parseScript(script);

    const { statements } = ast;
    const elements =
      statements[0].declaration.declarators[0].init.properties[0].expression
        .elements;

    let schedule = elements.map((el, index) => {
      const { properties } = el;
      // console.log(properties);
      const id = properties[1].expression.value;
      const day = properties[2].expression.value;
      const timeGMT = properties[3].expression.value;
      const title = properties[6].expression.properties[1].expression.value;
      const img =
        properties[6].expression.properties[4].expression.properties[3]
          .expression.value;
      const poster = `${large}${img}`;
      const ep = properties[7].expression.properties[0].expression.value;
      let time;
      // Valid Episode time?
      if (timeGMT) {
        // Split time string load it into Date
        let timeArr = timeGMT.split(":");
        time = new Date();
        time.setUTCHours(timeArr[0]);
        time.setUTCMinutes(timeArr[1]);
        time.setUTCSeconds(timeArr[2]);
        // Time Episode releases
        let epTime = time.getHours() * 60 + time.getMinutes();
        // Time now
        let now = new Date();
        let nowTime = now.getHours() * 60 + now.getMinutes();
        // Check if time has passed
        if (day === now.getDay() && epTime < nowTime) {
          time = "RELEASED";
        } else
          time = time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          });
      }

      return {
        title,
        poster,
        day,
        id,
        time,
        ep
      };
    });
    schedule = _.values(_.groupBy(schedule, "day"));
    let today = new Date().getDay();
    let max = 7;
    let i = 0,
      count = 0;
    const scheduledAnimes = [];
    for (i = today; count < max; i++) {
      count++;
      switch (i % max) {
        case today:
          scheduledAnimes.push({ day: "Today", animes: schedule[today] });
          break;
        case 0:
          scheduledAnimes.push({ day: "Sunday", animes: schedule[0] });
          break;
        case 1:
          scheduledAnimes.push({ day: "Monday", animes: schedule[1] });
          break;
        case 2:
          scheduledAnimes.push({ day: "Tuesday", animes: schedule[2] });
          break;
        case 3:
          scheduledAnimes.push({ day: "Wednesday", animes: schedule[3] });
          break;
        case 4:
          scheduledAnimes.push({ day: "Thursday", animes: schedule[4] });
          break;
        case 5:
          scheduledAnimes.push({ day: "Friday", animes: schedule[5] });
          break;
        case 6:
          scheduledAnimes.push({ day: "Saturday", animes: schedule[6] });
          break;
        default:
          console.log("Unknown");
          break;
      }
    }
    return scheduledAnimes;
  },
  // Anime in detail
  async getAnime(id) {
    let tempURL = FULL_URLX;
    if (id === 64) tempURL = FULL_URL; //Sometimes it doesnt work with the main proxy
    const { data } = await axios.get(`${tempURL}${anime}${id}${detailed}`);
    data.poster = `${large}${data.poster}`;

    if (data.wallpapers.length > 1) {
      data.wallpaper = `${wallpaper}${data.wallpapers[0].file}`;
    } else data.wallpaper = defaultWallpaper;
    return data;
  },
  // Episode
  async getEpisode(episode) {
    const { data } = await axios.get(`${FULL_URLX}/anime/watch${episode}`);
    const $ = cheerio.load(data);
    const videoMirrors = $("video-mirrors");
    const script = videoMirrors.attr(":mirrors");

    // Parse script
    const ast = parseScript(script);
    const { statements } = ast;
    const elements = statements[0].expression.elements;

    const links = elements.map((el, index) => {
      const { properties } = el;

      const embedID = properties[2].expression.value;
      const quality = properties[3].expression.value;

      const info = properties[5].expression.properties;
      const name = info[1].expression.value;
      const host = info[2].expression.value;
      const suffix = info[3].expression.value;

      let src = `${host}${embedID}`;
      if (suffix) {
        src = `${src}${suffix}`;
      }

      return {
        key: index,
        text: `${name}   ${quality}p`,
        value: src
      };
    });
    console.log("Mirrors", links);
    return links;
  },
  // Search Suggestions
  async getSuggestions(term = "nar") {
    const { data } = await axios.get(`${FULL_URLX}${anime}${search}${term}`);
    const suggestions = data.map(el => {
      const { title } = el;
      const img = `${small}${el.poster.file}`;
      const url = `/watch/${el.id}`;
      let type;
      if (el.type === 0) {
        type = "TV";
      } else if (el.type === 1) {
        type = "OVA";
      } else if (el.type === 1) {
        type = "MOVIE";
      } else if (el.type === 1) {
        type = "SPECIAL";
      } else type = "ONA";
      const year = el.started_airing_date.substring(0, 4);
      return {
        title,
        img,
        url,
        type: type,
        year
      };
    });
    return suggestions;
  }
};

export default Masterani;
