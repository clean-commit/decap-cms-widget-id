import Control from './Control.jsx'
//import Preview from './Preview.jsx'

if (typeof window !== 'undefined') {
    window.IdControl = Control
    //window.IdPreview = Preview
}

export { Control as IdControl} //, Preview as IdPreview }

if (!import.meta.env.PROD) {
    console.log('[decap-cms-widget-starter] Running in development mode...')
    import("./dev.js")
}