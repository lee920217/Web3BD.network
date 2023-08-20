// components/Profile.tsx
import React, {useEffect, useState} from 'react';
import {Button, Divider, Typography, Chip, IconButton, TextField} from '@mui/material';
import { Edit } from '@mui/icons-material';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import WalletIcon from '@mui/icons-material/Wallet';
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss'

type ProfileProps = {
    title: string;
    isEditable: boolean; // 根据全局钱包地址和profile的地址判断
    projectName: string;
    chips: string[];
    address: string;
    websiteURL: string;
    twitterName: string;
    projectDescription: string;
    videoTitle: string;
    videoContent: string; // 这可以是一个视频URL或其他内容
    partnerImpression: string;
    path: string;
};

const ProfilePanel: React.FC<ProfileProps> = ({
     title,
     isEditable,
     projectName,
     chips,
     address,
     websiteURL,
     twitterName,
     projectDescription,
     videoTitle,
     videoContent,
     partnerImpression,
    path
 }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentData, setCurrentData] = useState({
        title,
        isEditable,
        projectName,
        chips,
        address,
        websiteURL,
        twitterName,
        projectDescription,
        videoTitle,
        videoContent,
        partnerImpression,
    });
    const [newChip, setNewChip] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCurrentData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAddChip = () => {
        if (newChip) {
            setCurrentData(currentData => ({
                ...currentData,
                chips: [...currentData.chips, newChip]
            }));
            setNewChip('');
        }
    };

    useEffect(() => {
        if (path === 'profile') {
           setIsEditing(false)
        }
    }, [])

    return (
        <div className={styles.profilePanelContainer}>
            <Typography variant="h4">
                {title}
                {isEditable && (
                    <IconButton onClick={() => {setIsEditing(true)}}>
                        <Edit />
                    </IconButton>
                )}
            </Typography>
            <Divider />
            {isEditing ? (
                <>
                    <TextField
                        value={currentData.projectName}
                        name={'projectName'}
                        onChange={handleInputChange}
                        variant="standard"
                        fullWidth
                        InputProps={{ disableUnderline: true }}
                    />
                    <div>
                        {currentData.chips.map((chip, index) => (
                            <Chip className={styles.chips} key={index} label={chip} variant="outlined" />
                        ))}
                    </div>
                    <TextField
                        value={currentData.address}
                        name={'address'}
                        onChange={handleInputChange}
                        variant="standard"
                        fullWidth
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        value={currentData.websiteURL}
                        name={'websiteURL'}
                        onChange={handleInputChange}
                        variant="standard"
                        fullWidth
                        InputProps={{ disableUnderline: true }}
                    />
                    <TextField
                        value={currentData.twitterName}
                        name={'twitterName'}
                        onChange={handleInputChange}
                        variant="standard"
                        fullWidth
                        InputProps={{ disableUnderline: true }}
                    />
                    <Divider />
                    <TextField
                        value={currentData.projectDescription}
                        name={'projectDescriptions'}
                        onChange={handleInputChange}
                        variant="standard"
                        fullWidth
                        InputProps={{ disableUnderline: true }}
                    />
                    <Divider />
                    <TextField
                        value={currentData.videoTitle}
                        name={'videoTitle'}
                        onChange={handleInputChange}
                        variant="standard"
                        fullWidth
                        InputProps={{ disableUnderline: true }}
                    />
                    <video src={'https://assets.mixkit.co/videos/preview/mixkit-a-young-influencer-rides-a-giant-rubber-duck-in-a-50475-large.mp4'}></video>
                    <div>
                        <Button>Confirm</Button>
                        <Button>Cancel</Button>
                    </div>
                </>
            ) : (
                <>
                    <Typography variant="h6">{currentData.projectName}</Typography>
                    <div>
                        {currentData.chips.map((chip, index) => (
                            <Chip className={styles.chips} key={index} label={chip} variant="outlined" />
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <WalletIcon />
                        <Typography variant="body2">{currentData.address}</Typography>
                    </div>

                    <div className="flex items-center gap-2">
                        <LanguageRoundedIcon />
                        <Typography>{currentData.websiteURL}</Typography>
                    </div>

                    <div className="flex items-center gap-2">
                        <TwitterIcon />
                        <Typography>{currentData.twitterName}</Typography>
                    </div>
                    <Typography>{currentData.projectDescription}</Typography>
                    <Divider />
                    <Typography variant="h6">{currentData.videoTitle}</Typography>
                    <video src={currentData.videoContent}></video> {/* 这里可以根据需要替换为视频组件 */}
                </>
            )}
            <Divider />
            <Typography variant="h6">{currentData.partnerImpression}</Typography>
            <div>
                {currentData.chips.map((chip, index) => (
                    <Chip className={styles.chips} key={index} label={chip} variant="outlined" />
                ))}
            </div>
        </div>
    );
};

export default ProfilePanel;
