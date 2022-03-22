import React from "react"
import { Image, ImageProps, Text, View } from "react-native";
import { CommentIcon, FavoriteIcon, MessengerIcon, SaveIcon } from "../../../global/styles/icons";
import { styles } from '../../../pages/Feed/styles';

import { Photo } from "../../atoms/Photo";
import { Header } from "../../molecules/Header";

type Props = {
  cover: ImageProps;
  likes: string;
  description: string;
  id: string,
  username: string,
  location: string,
  lastLiked: {
    id: string,
    name: string,
    avatar: ImageProps
  };
}

export const Post = ({
    description,
    cover,
    lastLiked,
    likes,
    ...userData
  }: Props) => (
    <View style={styles.post}>
      <Header {...userData} />

      <Photo source={cover} style={styles.cover} />

      <View style={styles.postFooter}>
        <View style={styles.postOptions}>
          <View style={styles.postOptionsSide}>
            <FavoriteIcon style={styles.postOptionsIcon} />
            <CommentIcon style={styles.postOptionsIcon} />
            <MessengerIcon style={styles.postOptionsIcon} />
          </View>

          <SaveIcon />
        </View>

        <View style={styles.postAbout}>
          <Image source={lastLiked.avatar} style={styles.lastLiked} />
          <Text style={styles.likes}>{likes}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
);