import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MediaCardProps, CardsListProps } from '@/Types/MediaCard';
import {Chip} from "@mui/material";
import styles from './index.module.scss';
import Link from "next/link";
import GroupWorkRoundedIcon from "@mui/icons-material/GroupWorkRounded";
import GridViewIcon from "@mui/icons-material/GridView";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";

const MediaCard:React.FC<MediaCardProps> = ({ image, title, chips, type, network, twitterName,  heading, description }) => {

    const getIconForChip = (chip: string) => {
        switch (chip.toLowerCase()) {
            case 'wip':
                return <GroupWorkRoundedIcon />;
            case 'layer2':
                return <GridViewIcon />;
            case 'dao':
                return <GroupWorkRoundedIcon />;
            case 'social-fi':
                return <AlignHorizontalRightIcon />;
            case 'public goods':
                return <AccountBalanceIcon />;
            default:
                return <WorkspacesRoundedIcon />;
        }
    };

    return (
        <Link href={'/info'}>
            <Card className={styles.MediaCardItem} sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title={title}
                />
                <CardContent className={styles.CardContentContainer}>
                    {/*<Typography gutterBottom variant="h5" component="div">*/}
                    {/*    {heading}*/}
                    {/*</Typography>*/}
                    <div>
                        {chips.map((chipData, index) => (
                            <Chip
                                size="small"
                                key={index}
                                label={chipData}
                                variant="outlined"
                                style={{ marginRight: '8px' }}
                                icon={getIconForChip(chipData)}  // Add this line
                            />
                        ))}
                    </div>
                    {/*<Typography gutterBottom variant="body1" component="div">*/}
                    {/*    {type}*/}
                    {/*</Typography>*/}
                    {/*<Typography gutterBottom variant="body1" component="div">*/}
                    {/*    {network}*/}
                    {/*</Typography>*/}
                    {/*<Typography gutterBottom variant="body1" component="div">*/}
                    {/*    {twitterName}*/}
                    {/*</Typography>*/}
                    <Typography variant="body2" color="text.secondary" style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display:'-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3
                    }}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}

const CardsList:React.FC<CardsListProps> = ({ cardsData }) => {
    return (
        <div className={`flex ${styles.cardListContainer}`}>
            {cardsData.map((card, index) => (
                <MediaCard
                    key={index}
                    image={card.image}
                    chips={card.chips}
                    type={card.type}
                    twitterName={card.twitterName}
                    network={card.network}
                    title={card.title}
                    heading={card.heading}
                    description={card.description}
                />
            ))}
        </div>
    );
}

export default CardsList
