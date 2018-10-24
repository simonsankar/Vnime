const orderOptions = [
  { text: "A - Z", value: "title" },
  { text: "Z - A", value: "title_desc" },
  { text: "Lowest", value: "score" },
  { text: "Highest", value: "score_desc" }
];

const typeOptions = [
  { text: "TV", value: "0" },
  { text: "Movie", value: "1" },
  { text: "OVA", value: "2" },
  { text: "Special", value: "3" },
  { text: "ONA", value: "4" }
];

const statusOptions = [
  { text: "Ongoing", value: "0" },
  { text: "Completed", value: "1" },
  { text: "Not aired yet", value: "2" }
];
const genreOptions = [
  { text: "Action", value: 57 },
  { text: "Adventure", value: 58 },
  { text: "Cars", value: 69 },
  { text: "Comedy", value: 59 },
  { text: "Dementia", value: 84 },
  { text: "Demons", value: 86 },
  { text: "Drama", value: 60 },
  { text: "Ecchi", value: 79 },
  { text: "Fantasy", value: 77 },
  { text: "Game", value: 93 },
  { text: "Harem", value: 89 },
  { text: "Historical", value: 82 },
  { text: "Horror", value: 71 },
  { text: "Josei", value: 66 },
  { text: "Kvalues", value: 95 },
  { text: "Magic", value: 88 },
  { text: "Martial Arts", value: 75 },
  { text: "Mecha", value: 85 },
  { text: "Military", value: 83 },
  { text: "Music", value: 90 },
  { text: "Mystery", value: 63 },
  { text: "Parody", value: 94 },
  { text: "Police", value: 72 },
  { text: "Psychological", value: 73 },
  { text: "Romance", value: 67 },
  { text: "Samurai", value: 87 },
  { text: "School", value: 78 },
  { text: "Surf", value: 61 },
  { text: "Seinen", value: 70 },
  { text: "Shoujo", value: 91 },
  { text: "Shoujo AI", value: 92 },
  { text: "Shounen", value: 64 },
  { text: "Shounen AI", value: 96 },
  { text: "Slice of Life", value: 68 },
  { text: "Space", value: 62 },
  { text: "Sports", value: 65 },
  { text: "Super Power", value: 76 },
  { text: "Supernatural", value: 80 },
  { text: "Thriller", value: 74 },
  { text: "Vampire", value: 81 },
  { text: "Yaoi", value: 98 },
  { text: "Yuri", value: 97 }
];

export const filterOptions = {
  orderOptions,
  typeOptions,
  statusOptions,
  genreOptions
};
