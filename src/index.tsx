import * as ReactDOM from 'react-dom'
import * as React from 'react'
import App from './layout'

ReactDOM.render(<App />, document.getElementById('root'))

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
        .then(regsitration => console.log('Registration successful', regsitration))
        .catch(err => console.log('Registration failed', err))
    })
}