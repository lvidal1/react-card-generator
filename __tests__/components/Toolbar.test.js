import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import Toolbar from "@components/Toolbar";

describe('Toolbar', () => {
    it('renders toolbar buttons', () => {
        render(<Toolbar />)

        const btnInformation = screen.getByTestId("Toolbar.Button.Information");
        expect(btnInformation).toBeInTheDocument()
        const btnCountry = screen.getByTestId("Toolbar.Button.Country");
        expect(btnCountry).toBeInTheDocument()
        const btnPhoto = screen.getByTestId("Toolbar.Button.Photo");
        expect(btnPhoto).toBeInTheDocument()
        const btnPosition = screen.getByTestId("Toolbar.Button.Position");
        expect(btnPosition).toBeInTheDocument()
        const btnTechnologies = screen.getByTestId("Toolbar.Button.Technologies");
        expect(btnTechnologies).toBeInTheDocument()
    })
})