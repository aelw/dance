document.write("\
<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9733039422277496\"\n\
     crossorigin=\"anonymous\"></","script>");

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var id = getParameterByName('img');

document.write("<div style='white-space: nowrap;width:100%;overflow-x:scroll'><span style='color:#fafafa'><a href='http://stock.1002.pw/dance?img="+id+"'>KPOP</a> / <a href='http://stock.1002.pw/dance/bts?img="+id+"'>BTS</a> / <a href='http://stock.1002.pw/dance/bp?img="+id+"'>Blackpink</a> / <a href='http://stock.1002.pw/dance/itzy?img="+id+"'>Itzy</a> / <a href='http://stock.1002.pw/dance/txt?img="+id+"'>TXT</a></span></div>");
