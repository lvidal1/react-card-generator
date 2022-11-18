import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import Area from "@components/Area";

describe('Area', () => {
    it('renders area layer', () => {
        render(<Area />)

        const layer = screen.getByTestId("Area.layer");
        expect(layer).toBeInTheDocument()
    })
})