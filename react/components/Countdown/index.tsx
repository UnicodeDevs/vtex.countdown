import { useState, useEffect } from 'react'
import getDiff from './getDiff'
import styles from './styles.css'
import Show from '../Show/Show'

interface CountdownBFProps {
  activation: boolean
  initialMessage: string
  initialDateBF: string
  finishDateBF: string
  diffDays: string
  diffHours: string
  diffMinutes: string
}

const CountdownBF = ({
  initialMessage,
  initialDateBF,
  finishDateBF,
  activation,
}: CountdownBFProps) => {
  const [days, setDays] = useState('00')
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')

  const date = new Date().toISOString()
  const countdownDate = date > initialDateBF ? finishDateBF : initialDateBF

  useEffect(() => {
    setInterval(() => {
      const [diffDays, diffHours, diffMinutes, diffSeconds] =
        getDiff(countdownDate)
      setDays(diffDays)
      setHours(diffHours)
      setMinutes(diffMinutes)
      setSeconds(diffSeconds)
    }, 1000)
  }, [initialDateBF])

  return (
    <Show condition={activation}>
      <div className={styles.numericDateWrapper}>
        <div className={styles.numericDateLeft}>
          <span>{initialMessage}</span>
        </div>
        <div className={styles.numericDateRight}>
          <div className={styles.numericDate}>
            <div className={styles.diffNumber}>{days}</div>
            <span>Dias</span>
          </div>
          <div className={styles.numericDate}>
            <div className={styles.diffNumber}>{hours}</div>
            <span>Horas</span>
          </div>
          <div className={styles.numericDate}>
            <div className={styles.diffNumber}>{minutes}</div>
            <span>Minutos</span>
          </div>
          <div className={styles.numericDate}>
            <div className={styles.diffNumber}>{seconds}</div>
            <span>Segundos</span>
          </div>
        </div>
      </div>
    </Show>
  )
}

export default CountdownBF

CountdownBF.schema = {
  title: 'Contador',
  type: 'object',
  properties: {
    activation: {
      title: 'Ativar componente',
      type: 'boolean',
      default: false,
    },
    initialMessage: {
      title: 'Mensagem principal',
      description: 'Ex: Restam apenas:',
      type: 'string',
      default: 'Restam Apenas:',
    },
    initialDateBF: {
      title: 'Data Inicial do aquecimento',
      description: 'Data Inicial do aquecimento (Ex.: 11/19/2023 11:59 PM)',
      type: 'string',
      format: 'date-time',
    },
    finishDateBF: {
      title: 'Data final da campanha',
      description:
        'Data para a finalização da campanha (Ex.: 11/26/2023 11:59 PM)',
      type: 'string',
      format: 'date-time',
    },
  },
}
