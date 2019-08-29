import React from 'react'
import { Button } from 'antd'

const PlayButtonBox = (props: any) => {
  return (
    <div className="number-tool-box mbh-2">
      <Button onClick={props.deleteNumber}>←</Button>
      <Button type="primary" onClick={props.clickGuess}>猜</Button>
    </div>
  )
}

export default PlayButtonBox
