let url = new URL(window.location.href);
let params = url.searchParams;
window.location.href=decodeURIComponent(params.get('to'));


