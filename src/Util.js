function getQueryStringArgs() {
    var args = {};
    var qs = location.search.length > 0 ? location.search.substring(1) : "";

    var items = qs.length ? qs.split('&') : [];
    var item = null, name = null, value = null;

    for (var i = 0; i < items.length; i++) {
        item = items[i].split('=');
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);

        if (name.length) {
            args[name] = value;
        }
    }

    return args;
}

function addURLParam(url, name, value) {
    url += (url.indexOf('?') == -1 ? '?' : '&');
    url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
    return url;
}
