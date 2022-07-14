import axios from "axios";

const api_key = process.env.PS
const api_url = `http://api.positionstack.com/v1/forward?access_key=${api_key}`;


class IpTracker {
  async getPositionStack(address) {
    const { data } = await axios.get(api_url + `&query=${address}`)
    console.log(data);
    return data;
  }
}

export default IpTracker;