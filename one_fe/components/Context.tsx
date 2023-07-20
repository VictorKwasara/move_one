'use client';
import React from 'react';
// import { RpcClientContext } from './context/RpcClientContext';
import { JsonRpcProvider, testnetConnection } from '@mysten/sui.js';
import { WalletKitProvider } from '@mysten/wallet-kit';
import { RpcClientContext } from '../hooks/RpcClientContext';

const rpcProvider = new JsonRpcProvider(testnetConnection);

const Context = ({ children }: { children: React.ReactNode }) => {
	return (
		<WalletKitProvider>
			<RpcClientContext.Provider value={rpcProvider}>
				{children}
			</RpcClientContext.Provider>
		</WalletKitProvider>
	);
};

export default Context;
