import React, { useState } from 'react';
import {localbiz} from '../data/localbiz'
import Details from './Details'

const List = () => {
  const [list, setList] = useState(localbiz);
  console.log(list)

  return (
    <div>
      {list.map( (biz, index)=> {
        return <Details biz={biz} key={index} />
      })}
    </div>
  );
}

export default List;