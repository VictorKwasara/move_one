'use client';
import { type JsonRpcProvider } from '@mysten/sui.js';
import { createContext, useContext } from 'react';

export const RpcClientContext = createContext<JsonRpcProvider | undefined>(
	undefined
);

export function useRpc() {
	const rpcClient = useContext(RpcClientContext);
	if (!rpcClient) {
		throw new Error('useRpcClient must be within RpcClientContext');
	}
	return rpcClient;
}
