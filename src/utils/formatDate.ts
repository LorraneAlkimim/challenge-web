export function formatDate(isoDate: string) {
  const date = new Date(isoDate)

  const formattedDate = date
    .toLocaleDateString('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
    })
    .replace(',', ' -')

  return formattedDate
}
