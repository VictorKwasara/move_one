'use client';
import React,{useState} from "react"
import Image from 'next/image';
import styles from './page.module.css';
import { useWalletKit } from '@mysten/wallet-kit';
import { TransactionBlock } from '@mysten/sui.js';


export default function Home() {
  const [value, useValue] = useState(0) ;
  const [counter, useCounter] = useState("")
  const { signAndExecuteTransactionBlock } = useWalletKit();

  const initialize = async () => {
    const tx = new TransactionBlock();
		tx.moveCall({
			target: '0x31e1046ef9a9f61e979af8f7dbd35ec730168f7fb0de60d4cc00ff9c143ca033::one_counter::initialize',
			arguments: [		
			],
		});
	 let tx_result = 	await signAndExecuteTransactionBlock({ transactionBlock: tx });

   console.log('result', tx_result);
   console.log('result.objectChanges', tx_result.objectChanges);
   console.log('result', tx_result.objectChanges?.filter(obj => obj.type == "created"));
  }
  
  const addOne = async () => {
    const tx = new TransactionBlock();
		tx.moveCall({
			target:
				'0x31e1046ef9a9f61e979af8f7dbd35ec730168f7fb0de60d4cc00ff9c143ca033::one_counter::add_one',
			arguments: [],
		});
		let tx_result = await signAndExecuteTransactionBlock({
			transactionBlock: tx,
		});
		console.log('result', tx_result);
  }

    
  const removeOne = async () => {
     const tx = new TransactionBlock();
			tx.moveCall({
				target:
					'0x31e1046ef9a9f61e979af8f7dbd35ec730168f7fb0de60d4cc00ff9c143ca033::sub_counter::add_one',
				arguments: [
        
        ],
			});
			let tx_result = await signAndExecuteTransactionBlock({
				transactionBlock: tx,
			});
			console.log('result', tx_result);
  }

	return (
		<main className={styles.main}>
			<h1>Hello there Sui Dev</h1>
			<br />
			<h4>Initialize the counter</h4>
			<button onClick={initialize}>Initialize Counter</button>
			<br />
			<h4>Plus one</h4>
			<button onClick={addOne}>Initialize Counter</button>
			<br />
			<h4>Minus one</h4>
			<button onClick={removeOne}>Initialize Counter</button>
			<br />
			<br />
			<h4>Current Value</h4>
			{value}
		</main>
	);
}
