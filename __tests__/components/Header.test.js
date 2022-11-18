import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import Header from "@components/Header";

describe('Header', () => {
    it('renders home link', () => {
        render(<Header />)

        const homeLink = screen.getByTestId("home.link");
        expect(homeLink).toBeInTheDocument()
    })
})