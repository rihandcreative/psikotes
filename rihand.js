setTimeout(function() {
    document.getElementById('soalcontainer').setAttribute('oncontextmenu', 'return false');
    document.getElementById('soalcontainer').setAttribute('onselectstart', 'return false');
    document.getElementById('soalcontainer').setAttribute('onCopy', 'return false');
    document.getElementById('soalcontainer').setAttribute('onCut', 'return false');
    document.getElementById('soalcontainer').setAttribute('onDrag', 'return false');
    document.getElementById('soalcontainer').setAttribute('onDrop', 'return false');
}, 1000);