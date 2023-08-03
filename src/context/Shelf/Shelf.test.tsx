import React from 'react'
import config from '../../assets/myConfig'

import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Shelf from './Shelf' // Change this to your actual path
import ShelfContext from './Shelf.Context'

const { shelf } = config || {}
describe('Shelf', () => {
  // Check if the Shelf opens correctly
  it('should open when openButton is clicked', async () => {
    render(
      <Shelf {...shelf}>
        <OpenShelfFromTheLeftButton />
      </Shelf>,
    )

    const openButton = screen.getByTestId('openButton')
    fireEvent.click(openButton)

    const testContent = screen.getByText('Test content')
    expect(testContent).toBeVisible()
  })
})

function OpenShelfFromTheLeftButton() {
  const {
    actions: { openShelf },
  } = React.useContext(ShelfContext) || { actions: {} }
  if (!openShelf) {
    return
  }
  return (
    <button
      data-testid="openButton"
      onClick={() => openShelf(<div>Test content</div>, 'left', 70, false)}
    >
      Open Shelf
    </button>
  )
}
