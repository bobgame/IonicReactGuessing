import React from 'react'

const PlayResultBox = (props: any) => {
  return (
    <div className='number-result-box mbh-2'>
      {
        props.list.map((item: any, index: number) => {
          if (item.numbers !== '') {
            return <div className='result-item' key={'number-result' + index}>{item.numbers}: {item.result}</div>
          } else {
            return <div className='empty-item' key={'number-result' + index} />
          }
        })
      }
    </div>
  )
}

export default PlayResultBox
