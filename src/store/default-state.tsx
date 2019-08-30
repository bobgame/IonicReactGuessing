export const defalutState: DefaultState = {
  inputValue: ['-', '-', '-', '-'],
  times: 8,
  useTime: {
    mm: '00',
    ss: '00',
  },
  rightNumber: '3629',
  gameover: {
    isOver: false,
    title: '',
    desc: '',
  },
  list: [
    // { numbers: '0842', result: '0A2B' },
    // { numbers: '0843', result: '1A2B' },
  ]
}

export interface DefaultState {
  inputValue: string[]
  times: number
  useTime: {
    mm: string
    ss: string
  },
  rightNumber: string
  gameover: {
    isOver: boolean
    title: string
    desc: string
  },
  list: Array<{ numbers: string, result: string }>
}
