import axios from "axios";

const KEY = "AIzaSyBeQlb4V67wWN221i6vqupC5hofH74U04M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
