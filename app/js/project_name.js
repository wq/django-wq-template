import wq from './wq.js';
import config from './data/config.js';
import version from './data/version.js';

wq.use({
    context() {
        return { version };
    }
});

wq.init({
    ...config,
    router: {
        'base_url': ''
    },
    store: {
	'service': '',
	'defaults': {'format': 'json'}
    },
    material: {
        theme: {
            primary: '#550099',
            secondary: '#0dccb1'
        }
    },
    map: {
	bounds: [[44.7, -93.6], [45.2, -92.8]]
    }
}).then(() => {
    wq.prefetchAll();
});

if (config.debug) {
    window.wq = wq;
}

navigator.serviceWorker.register('/service-worker.js');
