import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from './context/context'

ReactDOM.render(
	<SpeechProvider appId='4157741b-42a1-4c80-b1ab-b4281e391f52' language='en-US'>
		<Provider>
			<App />
		</Provider>
	</SpeechProvider>,
	document.getElementById('root'),
)

reportWebVitals()
