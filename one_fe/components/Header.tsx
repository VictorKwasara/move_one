'use client';
import React from 'react';
import { ConnectButton } from '@mysten/wallet-kit';
const Header = () => {

  const styles = {
    width: "100vw",
    height: "100px",
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
  }
  const button = {
    backgroundColor: '#101827',
	};

	return (
		<div style={styles}>
			<ConnectButton
				style={button}
			/>
		</div>
	);
};

export default Header;
