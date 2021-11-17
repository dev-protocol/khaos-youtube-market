import { FunctionAddresses } from '@devprotocol/khaos-core'

export const addresses: FunctionAddresses = async ({ network: net }) =>
	net === 'ropsten'
		? '0xEd456cE8c099ec4862435B7ec5F2367d40017040'
		: net === 'arbitrum-rinkeby'
		? '0x9bCb3F85b0b01968F5e0100652a53958c8558452'
		: undefined
