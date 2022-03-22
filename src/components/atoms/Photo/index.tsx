import React from "react";
import { Image, ImageProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

export const Photo = ({ ...props }: ImageProps) => (
  <Image style={styles.cover} {...props} />
);
