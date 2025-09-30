// /public/ga4-init.js
// Replace MEASUREMENT_ID with your GA4 ID (format: G-XXXXXXXXXX)
var MEASUREMENT_ID = 'G-XXXXXXXXXX';

window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', MEASUREMENT_ID, { 'debug_mode': false });

// Optional: example custom events mapping
// aidvueTrack('roi_calculated', { revenueLost: 123, recovered: 45 })
// will already hit GA4 via the shim in Base.astro if window.gtag exists.
