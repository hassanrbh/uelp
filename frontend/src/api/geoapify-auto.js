import axios from "axios";

const api = `https://api.geoapify.com/v1/geocode/autocomplete?text=`
const apiKey = "ce946c6ebe3a46f0bb80c6671c687ed0";


class geoPifyAutoCompletion {
  async getData(text) {
    const { data } = await axios.get(api + `${text}/&apiKey=${apiKey}`)

    return data;
  }
}

export default new geoPifyAutoCompletion()