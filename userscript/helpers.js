



// https://gist.github.com/dataserver/7baa96ce14c170e66720c3ec7d57bfdf
/*
appendFilesToHead(['https://ireade.github.io/Toast.js/css/Toast.min.css']);
*/
function appendFilesToHead(arr = [], forceExt = false) {

    for (let i = 0; i < arr.length; i++) {
        let urlStr = arr[i];
        let ext = (forceExt) ? forceExt : urlStr.slice((Math.max(0, urlStr.lastIndexOf(".")) || Infinity) + 1);
        let ele = null;

        switch (ext) {
            case "js":
                ele = document.createElement("script");
                ele.type = "text/javascript";
                ele.src = urlStr;
                break;
            case "css":
                ele = document.createElement("link");
                ele.rel = "stylesheet";
                ele.type = "text/css";
                ele.href = urlStr;
                break;
            default:
                ele = document.createElement("script");
                ele.type = "text/javascript";
                ele.src = urlStr;
        }
        document.getElementsByTagName("head")[0].appendChild(ele);
    }
}



