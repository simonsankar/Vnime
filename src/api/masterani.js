import axios from 'axios';
import cheerio from 'cheerio';
import { parseScript } from 'shift-parser';

const CORS = 'https://cors-anywhere.herokuapp.com/';
const CORSX = 'https://secret-ocean-49799.herokuapp.com/';
const BASE_URL = 'https://www.masterani.me';
const FULL_URL = `${CORS}${BASE_URL}`;
const FULL_URLX = `${CORSX}${BASE_URL}`;

const api = '/api';
const updated = '/api/releases';
const popular = '/api/anime/trending/today';
const trending = '/api/anime/trending/now';
const schedule = '/anime/schedule';

const anime = '/api/anime/';
const detailed = '/detailed';

const filter = 'filter?';
const order = 'order=';
const type = 'type=';
const page = 'page=';
const genres = 'genres=';
const search = 'search?search=';

// Image URLs
const CDN = 'https://cdn.masterani.me';
// Posters
const large = `${CDN}/poster/1/`;
const medium = `${CDN}/poster/2/`;
const small = `${CDN}/poster/3/`;
// Episode thumbs
const thumbnail = `${CDN}/episodes/`;
const wallpaper = `${CDN}/wallpaper/0/`;

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
    return animes;
  },
  // Popular Animes
  async getPopularAnimes() {
    const { data } = await axios.get(`${FULL_URLX}${popular}`);
    const animes = data.map((el, index) => {
      const img = `${medium}${el.poster}`;
      const id = el.slug.substr(0, el.slug.indexOf('-'));
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
    console.log(animes);
    return animes;
  },
  // Trending Animes
  async getTrendingAnimes() {
    const { data } = await axios.get(`${FULL_URLX}${trending}`);
    const animes = data.map((el, index) => {
      const img = `${medium}${el.poster}`;
      const id = el.slug.substr(0, el.slug.indexOf('-'));
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
    console.log(animes);
    return animes;
  },
  // Filtered Animes
  async getTFilteredAnimes(query = 'order=score_desc&page=1') {
    const { data } = await axios.get(`${FULL_URLX}${trending}${query}`);
  },
  // Schedule
  async getScheduledAnimes() {
    const { data } = await axios.get(`${FULL_URLX}${schedule}`);
    const $ = cheerio.load(data);
    const schedule = $('div.schedule.days');
    const days = $('div.schedule.day').map((index, day) => {
      console.log(day.html());
    });
  },
  // Anime in detail
  async getAnime(id) {
    let tempURL = FULL_URLX;
    if (id === 64) tempURL = FULL_URL;

    const { data } = await axios.get(`${tempURL}${anime}${id}${detailed}`);
    data.poster = `${large}${data.poster}`;
    if (data.wallpapers.length > 1) {
      data.wallpaper = `${wallpaper}${data.wallpapers[0].file}`;
    } else
      data.wallpaper =
        'https://img00.deviantart.net/32b6/i/2014/353/a/2/mashup_anime_collage_by_dinocojv-d8af5lu.jpg';
    return data;
  },
  // Episode
  async getEpisode(episode) {
    const { data } = await axios.get(`${FULL_URLX}/anime/watch${episode}`);
    const $ = cheerio.load(data);
    const body = $('body');
    const script = $('script[type="text/javascript"]', body)
      .first()
      .html();
    const ast = parseScript(script);

    const { statements } = ast;
    const elements =
      statements[0].declaration.declarators[0].init.properties[1].expression
        .elements;
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
    console.log('Mirrors', links);

    return links;
  },
  // Search Suggestions
  async getSuggestions(term = 'nar') {
    const { data } = await axios.get(
      `${FULL_URLX}${anime}${search}${term}&sb=true`
    );
    const suggestions = data.map(el => {
      const { title } = el;
      const img = `${small}${el.poster.file}`;
      const url = `/watch/${el.id}`;
      let type;
      if (el.type === 0) {
        type = 'TV';
      } else if (el.type === 1) {
        type = 'OVA';
      } else if (el.type === 1) {
        type = 'MOVIE';
      } else if (el.type === 1) {
        type = 'SPECIAL';
      } else type = 'ONA';
      const year = el.started_airing_date.substring(0, 4);
      return {
        title,
        img,
        url,
        type,
        year
      };
    });
    return suggestions;
  }
};

export default Masterani;
