import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import { getPosts } from '../actions/postActions';

// import connect for redux
import { connect } from 'react-redux';
import { Center } from '../Center';

const Posts = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();

    // eslint-disable-next-line
  }, []);

  // console.log('posts: ', posts);

  if (loading || posts == null)
    return (
      <Center>
        <ActivityIndicator size="large" color="#0000ff" />
      </Center>
    );

  return (
    <Center>
      <Text style={styles.heading}> POSTS FROM API </Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Text style={styles.itemsStyles}>{item.title}</Text>
        )}></FlatList>
      {/* <Text>Hi</Text> */}
    </Center>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  itemsStyles: {
    margin: 10,
  },
});

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
