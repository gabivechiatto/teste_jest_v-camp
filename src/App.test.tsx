import { render } from '@testing-library/react'
import App from './App'

test('Should match with the text content', () => {
  const { getByText } = render(<App/>)

  expect(getByText('Valtech - V_Camp')).toBeTruthy()
})
