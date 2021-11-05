import { FunctionAddresses } from '@devprotocol/khaos-core'

export const addresses: FunctionAddresses = async ({ network: net }) =>
	net === 'ropsten'
		? '0xA3CB10662F26d80b4F62E7893C6aD6df07987476'
		: net === 'arbitrum-rinkeby'
		? '0x9bCb3F85b0b01968F5e0100652a53958c8558452'
		: undefined
