import React from "react"
import { Image, ImageProps, Text, View } from "react-native";
import { CommentIcon, FavoriteIcon, MessengerIcon, ProfileIcon, SaveIcon } from "../../../global/styles/icons";
import { styles } from '../../../pages/Feed/styles';

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

export const Post = ({ description, cover, lastLiked, likes }: Props) => (
  <View style={styles.post}>
    <View style={styles.postHeader}>
      <Image source={ProfileIcon} style={styles.postAvatar} />
      <View>
        <Text style={styles.postUsername}>Rodrigo Gonçalves</Text>
        <Text style={styles.postLocation}>Somewhere</Text>
      </View>
    </View>

    <Image source={cover} style={styles.cover} />

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