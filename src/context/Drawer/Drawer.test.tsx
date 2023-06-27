// src/context/Drawer/Drawer.tset.ts:

import '@testing-library/jest-dom'
import React from 'react'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import DrawerContext from './Context'
import Drawer from './Drawer' // Change this to your actual path

describe('Drawer', () => {
  // Initialization test

  describe('Drawer', () => {
    // Check if the drawer opens correctly
    it('should open when openButton is clicked', () => {
      render(
        <Drawer>
          <TestComponent />
        </Drawer>,
      )

      const openButton = screen.getByTestId('openButton')
      fireEvent.click(openButton)

      const testContent = screen.getByText('Test content')
      expect(testContent).toBeVisible()
    })

    // Check if the drawer has the correct width when open
    it('should have correct width when open', () => {
      render(
        <Drawer>
          <TestComponent />
        </Drawer>,
      )

      const openButton = screen.getByTestId('openButton')
      fireEvent.click(openButton)

      const drawer = screen.getByTestId('drawer-paper')

      expect(drawer).toHaveStyle(`width: ${70}%`)
    })

    // Check if the drawer closes correctly when the backdrop is clicked
    it('should close when backdrop is clicked', async () => {
      render(
        <Drawer>
          <TestComponent />
        </Drawer>,
      )

      const openButton = screen.getByTestId('openButton')
      fireEvent.click(openButton)

      const testContent = screen.getByText('Test content')
      expect(testContent).toBeVisible()

      const backdrop = screen.getByTestId('backdrop')

      fireEvent.click(backdrop)
      await waitFor(() => {
        expect(testContent).not.toBeVisible()
      })
    })

    // Check if the drawer closes correctly when the close button is clicked
    it('should close when closeButton is clicked', async () => {
      render(
        <Drawer>
          <TestComponent />
        </Drawer>,
      )

      const openButton = screen.getByTestId('openButton')
      fireEvent.click(openButton)

      const testContent = screen.getByText('Test content')
      expect(testContent).toBeVisible()

      const closeButton = screen.getByTestId('closeButton')
      fireEvent.click(closeButton)

      await waitFor(() => {
        expect(testContent).not.toBeVisible()
      })
    })
  })
})

function TestComponent() {
  const { openDrawer } = React.useContext(DrawerContext) || {}
  if (!openDrawer) {
    return
  }
  return (
    <button
      data-testid="openButton"
      onClick={() => openDrawer(<div>Test content</div>, 'left', 70, false)}
    >
      Open Drawer
    </button>
  )
}
