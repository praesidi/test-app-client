import React from 'react';
import ReactDOM from 'react-dom/client';
import { Providers } from './providers';
import '@radix-ui/themes/styles.css';
import '@/app/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Providers />
	</React.StrictMode>
);
