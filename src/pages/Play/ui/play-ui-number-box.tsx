import React from 'react'
import { Button } from 'antd'

const PlayNumberBox = (props: any) => {
  return (
    <div className="number-input-box mbh-1">
      {
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, index) => {
          return (
            <Button key={'number-btn' + index} onClick={() => props.clickNumber(num)}>{num}</Button>
          )
        })
      }
    </div>
  )
}

export default PlayNumberBox
