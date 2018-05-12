a = $('#unicode tbody tr')
result = {}
for(i=1;i<a.length;i++) {
key = (jQuery('td:first-child',a[i]).text())
val = (jQuery('td:last-child',a[i]).text())
result[key] = val; 
}
result = JSON.stringify(result)
function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
lang = window.location.pathname.split('/')[3].split('.')[0]
download(result, lang+'.json', 'text/plain');
