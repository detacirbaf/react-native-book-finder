import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { ReactiveBase, DataSearch, ReactiveList } from '@appbaseio/reactivesearch-native';
export default class App extends React.Component {
  render() {
    return (
      <ReactiveBase
        app="good-books-ds"
        credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d">
        <ScrollView>
          <View style={styles.container}>
            <DataSearch
              componentId="searchbox"
              dataField={[
                'original_title',
                'original_title.search',
                'authors',
                'authors.search',
              ]}
              placeholder="Search Title"
              autosuggest={true}
            />
            <ReactiveList
              componentId="results"
              dataField="original_title"
              size={7}
              showResultStats={false}
              pagination={true}
              react={{
                and: 'searchbox',
              }}
              onData={res => (
                <View style={styles.result}>
                  <Image source={{ uri: res.image }} style={styles.image} />
                  <View style={styles.item}>
                    <Text style={styles.title}>{res.original_title}</Text>
                    <Text style={{color: 'white'}}>{res.authors}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </ReactiveBase>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 25,
    backgroundColor: '#73503C',
},
  image: {
    width: 100,
    height: 100,
  },
  result: {
    flexDirection: 'row',
    width: '100%',
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#9b6749',
    
  },
  item: {
    flexDirection: 'column',
    paddingLeft: 10,
    backgroundColor: '#9b6749',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    
  },

});
