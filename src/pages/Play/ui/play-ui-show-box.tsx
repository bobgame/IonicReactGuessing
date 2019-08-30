import React from 'react'
import { Button } from 'antd'

const PlayShowBox = (props: any) => {
  return (
    <Button disabled={true} block={true} className='number-show-box mbh-2'>
      {
        props.inputValue.map((item: string, index: number) => {
          return (
            <div key={'show-item-' + index} className='show-box-item'>{item}</div>
          )
        })
      }
    </Button>
  )
}

export default PlayShowBox
