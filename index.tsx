import * as React from 'react'
import { useIntl, FormattedMessage } from 'react-intl'

const AboutPage = () => {
  const { formatMessage } = useIntl()

  const title = formatMessage({ id: 'a.a' })

  return <FormattedMessage id="a.b" />
}

export default AboutPage

