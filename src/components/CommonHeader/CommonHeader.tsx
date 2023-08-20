"use client";

import React from 'react';
import { useWallet } from '@/contexts/WalletContext';
import Link from 'next/link';
import {Button, IconButton, ListItemIcon, Menu, MenuItem} from '@mui/material';
import { Mail as MailIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
import InputIcon from '@mui/icons-material/Input';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Person from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import WalletIcon from '@mui/icons-material/Wallet';
import Brightness1Icon from '@mui/icons-material/Brightness1';

import styles from './index.module.scss'

export default function Header() {
    const { walletAddress, setWalletAddress, setNetwork, network } = useWallet();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const disconnect = () => {
        setWalletAddress("")
        handleClose();
    }

    const handleConnectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // 请求用户账户地址
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const currentAccount = accounts[0];
                setWalletAddress(currentAccount);

                // 获取当前网络
                const networkId = await window.ethereum.request({ method: 'net_version' });
                setNetwork(networkId);
            } catch (error) {
                console.error("User denied account access");
            }
        } else {
            console.error("Ethereum object doesn't exist!");
        }
    };

    return (
        <header className="flex justify-between items-center p-4">
            <Link legacyBehavior href="/">
                <p className={styles.logoText}>

                </p>
            </Link>
            {!walletAddress && (
                <Button className={styles.connectBtn} color="primary" onClick={handleConnectWallet}>
                    Connect Wallet
                </Button>
            )}
            {walletAddress && (
                <div className="flex items-center" style={{gap: 20}}>
                    <Link href={'/postneeds'}>
                        <Button className={styles.PostProjectButton} variant="contained">
                            Post Project
                        </Button>
                    </Link>

                    <IconButton onClick={handleClick}>
                        <Brightness1Icon />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            {`${walletAddress.substr(0, 8)}****${walletAddress.substr(walletAddress.length - 8, walletAddress.length - 1)}`}
                        </MenuItem>
                        <Link href={'/profile'}>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                Profile
                            </MenuItem>
                        </Link>
                        <MenuItem onClick={disconnect}>
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>

                            Disconnect
                        </MenuItem>
                    </Menu>

                    <IconButton>
                        <MailIcon />
                    </IconButton>
                </div>
            )}
        </header>
    );
}
