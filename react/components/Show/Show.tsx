import { FC } from 'react'

interface ShowProps {
  condition: boolean,
  children: any
}

const Show: FC<ShowProps> = ({ condition, children }) => {
  if (condition) {
    return <>{children}</>
  }

  return null
}

export default Show
