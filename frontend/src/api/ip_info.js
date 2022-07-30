import axios from "axios";

const api_url = `http://api.positionstack.com/v1/forward?access_key=049dc082c2271a296faf375a9619d8d7`;


class IpTracker {
  async getPositionStack(address) {
    const { data } = await axios.get(api_url + `&query=${address}&limit=1`)
    return data;
  }
}

export default new IpTracker();
