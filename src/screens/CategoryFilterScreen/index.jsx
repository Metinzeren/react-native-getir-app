import React, { useState } from 'react'
import { ScrollView,Text} from 'react-native'
import CategoryItemFiltering from '../../components/CategoryItemFiltering'
import TypeFiltering from '../../components/TypeFiltering'
const index = (props) => {
    const [category, setCategory] = useState(props.route.params.category)
  return (
    <ScrollView>
      <CategoryItemFiltering category={category}/>
      <TypeFiltering/>
    </ScrollView>
  )
}

export default index
