import { configure } from '@storybook/react'

const req = require.context('./', true, /\.story\.(ts|tsx)$/)

configure(() => {
    req.keys().forEach(filename => req(filename))
}, module);
