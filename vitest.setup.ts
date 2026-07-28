// Registers the jest-dom matchers (toBeInTheDocument, toHaveAttribute, ...)
// on Vitest's expect, including their TypeScript declarations.
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Testing Library only self-registers cleanup when Vitest globals are enabled;
// this config keeps globals off, so unmount between tests explicitly. Without
// it, renders pile up in the same document and queries match twice.
afterEach(cleanup)
