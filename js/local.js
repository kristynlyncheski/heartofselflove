if (!window.location.hostname || window.location.origin === 'file://') {
    var links = document.querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {
        var url = links[i].href;
        var pattern = /^((http|https|ftp|mailto):)/;

        if (!!url && !pattern.test(url)) {
            if (url.includes('#')) {
                var anchor = url.split('#')[1];

                if (url.includes('file:///#')) {
                    var page = window.location.href;
                    var string = page.substring(0, page.lastIndexOf("/") + 1);

                    links[i].href = string + "index.html#" + anchor;
                } else {
                    links[i].href = url.split('#').join('.html#');
                }

            } else if (url === 'file:///') {
                var page = window.location.href;
                var string = page.substring(0, page.lastIndexOf("/") + 1);

                links[i].href = string + "index.html";
            } else {
                links[i].href = url + ".html"
            }
        }
    }
}
