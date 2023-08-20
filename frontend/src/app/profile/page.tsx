"use client"

import React, { useState } from 'react';
import styles from './index.module.scss'
import Typography from "@mui/material/Typography";
import ProfilePanel from "@/components/ProfilePanel/ProfilePanel";
import partnersData from "@/data/partner";
import Partnership from "@/components/PartnerPanel/PartnerPanel";
import needs from "@/data/needs";
import NeedsPanel from "@/components/NeedsPanel/NeedsPanel";

const InfoPage: React.FC = () => {
    const [selectedMenu, setSelectedMenu] = useState<string>('Profile');

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}  style={{ width: '20%' }}>
                <img className={styles.InfoAvatar} src="https://bafkreidikblyoq2ygzrlc24hql3swlruicc5o6nj7ce4n2hizgleocjjau.ipfs.nftstorage.link/" alt="Avatar"/>
                <Typography variant="h4">BD3</Typography>
                <div className={styles.menuButton} onClick={() => setSelectedMenu('Profile')} style={{ fontWeight: selectedMenu === 'Profile' ? 'bold' : 'normal' }}>
                    Profile
                </div>
                <div className={styles.menuButton} onClick={() => setSelectedMenu('Partnership')} style={{ fontWeight: selectedMenu === 'Partnership' ? 'bold' : 'normal' }}>
                    Partnership
                </div>
                <div className={styles.menuButton} onClick={() => setSelectedMenu('Activities')} style={{ fontWeight: selectedMenu === 'Activities' ? 'bold' : 'normal' }}>
                    Activities
                </div>

            </div>
            <div style={{ width: '80%', padding: '20px' }}>
                {selectedMenu === 'Profile' && <ProfilePanel
                    title={'Img3'}
                    isEditable={true}
                    chips={['WIP', 'NFT']}
                    projectName={'Img3'}
                    address={'0x111'}
                    websiteURL={'https://github.com/lxdao-official/img3'}
                    twitterName={'https://twitter.com/Francis_404'}
                    projectDescription={'Img3 is an essential infrastructure in the Web3 storage field. It provides the easiest way for you to implement images rendering, uploading, etc. based on Web3 storage like IPFS.'}
                    videoTitle={'Show time'}
                    videoContent={'https://media.w3.org/2010/05/sintel/trailer.mp4'}
                    partnerImpression={'partner impression'}
                    path={'profile'}
                />}
                {selectedMenu === 'Partnership' && <Partnership partnerNum={100} partners={partnersData} />}
                {selectedMenu === 'Activities' && <NeedsPanel needs={needs} currentPage={'info'}/>}
            </div>
        </div>
    );
};

export default InfoPage;
