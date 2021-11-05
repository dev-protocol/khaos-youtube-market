import test from 'ava'
import { addresses } from './addresses'

test('Returns mainnet address when the passed network is mainnet', async (t) => {
	const res = await addresses({ network: 'mainnet' })
	t.is(res, undefined)
})

test('Returns ropsten address when the passed network is ropsten', async (t) => {
	const res = await addresses({ network: 'ropsten' })
	t.is(res, '0xA3CB10662F26d80b4F62E7893C6aD6df07987476')
})

test('Returns arbitrum rinkeby address when the passed network is arbitrum-rinkeby', async (t) => {
	const res = await addresses({ network: 'arbitrum-rinkeby' })
	t.is(res, '0x9bCb3F85b0b01968F5e0100652a53958c8558452')
})

test('Returns undefined when the passed network is arbitrum-one', async (t) => {
	const res = await addresses({ network: 'arbitrum-one' })
	t.is(res, undefined)
})
