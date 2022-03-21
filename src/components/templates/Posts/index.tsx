import React from 'react';

import { FlatList } from 'react-native';
import { styles } from '../../../pages/Feed/styles';
import { posts } from '../../../utils/posts';
import { Post } from '../../organisms/Post';

export const Posts = () => (
  <FlatList
    data={posts}
    style={styles.posts}
    showsVerticalScrollIndicator={false}
    keyExtractor={post => post.id}
    renderItem={({ item }) => (
      <Post {...item} />
    )}
  />
)
