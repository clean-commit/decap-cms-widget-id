CMS.registerWidget('id', window.IdControl)//, window.IdPreview);
// Relies on the admin HTML file using `window.CMS_MANUAL_INIT = true;`
// This ensures the init always happens after the widget is registered.
CMS.init();