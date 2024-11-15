import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const fromDistance = (date: Date) => {
  return formatDistance(date, new Date(), {
    addSuffix: true,
    locale: ptBR,
  })
}
