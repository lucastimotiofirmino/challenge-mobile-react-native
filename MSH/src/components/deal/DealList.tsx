import React, { useState, useEffect } from 'react'
import { FlatList} from 'react-native'
import DealItem from './DealItem'
import InfiniteScroll from 'react-native-infinite-scrolling'

const Deallist = (props) => {
  const { deals } = props
  const [data, setData] = useState([])
  useEffect(() => {
    loadMore()
  }, [])

  const renderData = () => {
    return (
      <FlatList
        data={deals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <DealItem key={item.id} deal={item} onPress={() => { alert(item.id) }} />
        )}
      />
    )
  }
  const loadMore = () => {
    let updatedData = data.concat(Object.assign({}, deals))
    setData(updatedData)
  }
  return (
    <InfiniteScroll
      renderData={renderData}
      data={deals}
      loadMore={loadMore}
    />
  )
}
export default Deallist