import bent from 'bent'
import fetch from 'node-fetch';
import { FunctionAuthorizer } from '@devprotocol/khaos-core'

export const authorize: FunctionAuthorizer = async ({ message, secret }) => {
	return postViewerPermission(message, secret)
}

type YoutubeAPIResponse = {
	readonly items: readonly [{ readonly id: string }]
}

async function postViewerPermission(
	channelId: string,
	token: string
): Promise<boolean> {
	const res = await post(token)
	return res instanceof Error
		? false
		: res.items
			? res.items[0].id === channelId
				? true
				: false
			: false
}

async function post(
	token: string
): Promise<YoutubeAPIResponse | Error> {
	const youtubeDataApiUrl = `https://www.googleapis.com/youtube/v3/channels?part=id&mine=true&access_token=${token}`
	return bent(youtubeDataApiUrl, 'json')('')
		.then((res) => res as unknown as YoutubeAPIResponse)
		.catch((err: Error) => err)
	// return fetch(youtubeDataApiUrl)
	// 	.then(response => response.json())
	// 	.then(data => console.log(data));
}
