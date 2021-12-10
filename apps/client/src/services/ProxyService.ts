import axios, { AxiosResponse } from 'axios';

interface SerializedXMLContent {
	contents: string;
}

class ProxyService {
	static baseUrl = 'https://hexlet-allorigins.herokuapp.com/';

	static getXML(
		url: string,
		timeout = 30000
	): Promise<AxiosResponse<SerializedXMLContent>> {
		const { href: endpointUrl } = new URL(
			`get?disableCache=true&url=${encodeURIComponent(url)}`,
			this.baseUrl
		);

		return axios.get(endpointUrl, { timeout });
	}
}

export default ProxyService;
