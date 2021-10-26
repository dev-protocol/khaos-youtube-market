import test from 'ava'
import sinon from 'sinon'
import { authorize } from './authorize'

require('dotenv').config();

test('Successful authentication.', async (t) => {
	const res = await authorize({
		message: process.env.CHANNEL_ID,
		secret: process.env.ACCESS_TOKEN,
	} as any)
	t.true(res)
})

test('If the user does not send his channel id, the authentication fails.', async (t) => {
	const res = await authorize({
		message: 'wrong-channel-id',
		secret: process.env.ACCESS_TOKEN,
	} as any)
	t.false(res)
})

test('If the access token does not exist, the authentication fails', async (t) => {
	const res = await authorize({
		message: process.env.CHANNEL_ID,
		secret: 'wrong-access-token',
	} as any)
	t.false(res)
})
