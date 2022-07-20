import axios from "axios";

const { REACT_APP_PS } = process.env
const api_url = `http://api.positionstack.com/v1/forward?access_key=${REACT_APP_PS}`;


class IpTracker {
  async getPositionStack(address) {
    const { data } = await axios.get(api_url + `&query=${address}&limit=1`)
    return data;
  }
}

export default new IpTracker();
