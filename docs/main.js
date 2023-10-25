let url = new URL(window.location.href);
let params = url.searchParams;
if (params.get('to') ===  null){
    window.location.href="https://github.com/basashi-G/redirect";
}else{
    window.open(decodeURIComponent(params.get('to')));
    window.close();
}


