const navIds = ['Home', 'Files', 'Recent', 'Photos', 'Bin', 'Shared'];
const addSelection = (link) => {
    for (let Id in navIds) {
        document.getElementById(navIds[Id]).classList.remove("selected");
    }
    document.getElementById(link).classList.add('selected');
}

function headerCloseMobile() {
    document.getElementById('header').classList.add('closed');
}
function headerOpenMobile() {
    document.getElementById('header').classList.remove('closed');
}