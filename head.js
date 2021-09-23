function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var id = getParameterByName('img');

document.write("<span style='color:#fafafa'><a href='http://stock.1002.pw/dance?img="+id+"'>KPOP</a> / <a href='http://stock.1002.pw/dance/bts?img="+id+"'>BTS</a> / <a href='http://stock.1002.pw/dance/bp?img="+id+"'>Blackpink</a> / <a href='/1/bts?img="+id+"'>BTS</a> / <a href='http://stock.1002.pw/dance/itzy?img="+id+"'>Itzy</a> / <a href='http://stock.1002.pw/dance/twice?img="+id+"'>Twice</a></span><br>");
