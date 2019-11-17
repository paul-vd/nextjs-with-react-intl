import React from 'react'
import { FormattedRelativeTime } from 'react-intl'
import { selectUnit } from '@formatjs/intl-utils'

export default function TimeAgo() {
  const { value, unit } = selectUnit(Date.now())
  return (
    <strong>
      <FormattedRelativeTime numeric="auto" value={value} unit={unit} updateIntervalInSeconds={1} />
    </strong>
  )
}
