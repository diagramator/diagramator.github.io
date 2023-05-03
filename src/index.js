import './css/main.css';
const { load } = require("js-yaml");
var selectedTemplate;

document.addEventListener("DOMContentLoaded", async function (event) {
    window["globalLibraries"] = {
        yamlLoad: load
    };

    const data = await fetch("/templates.yaml");
    const templatesText = await data.text();
    const templates = await load(templatesText);

    var selectTemplatesElement = document.getElementById('templates');
    for (var template of templates) {
        var opt = document.createElement('option');
        opt.value = template.id;
        opt.innerHTML = template.label;
        opt.setAttribute('resources_url', template.resourcesUrl);
        selectTemplatesElement.appendChild(opt);
    }


    selectTemplatesElement.addEventListener('change', onChangeTemplate);
    document.getElementById('refreshButton').addEventListener("click", onClickRefresh);
    document.getElementById('exportButton').addEventListener("click", onClickExport);
});


function onChangeTemplate() {
    console.log('You selected: ', this.options[this.selectedIndex]);
    selectedTemplate = this.options[this.selectedIndex];
    if(selectedTemplate.value=="-"){
        document.getElementById('yamlTextArea').value = "";
        document.getElementById("canvas").innerHTML = '';
        document.getElementById('refreshButton').style.display = 'none';
    }else{
        var resourcesUrl = selectedTemplate.getAttribute("resources_url");
        fetch(`${resourcesUrl}/dist/data.yaml?version=${generateUUID()}`)
            .then(function (response) {
                return response.text();
            })
            .then(function (rawYaml) {
                document.getElementById('yamlTextArea').value = rawYaml;
                document.getElementById('refreshButton').style.display = 'inline';
            });
    }

}

function onClickRefresh() {
    var imported = document.createElement('script');
    var resourcesUrl = selectedTemplate.getAttribute("resources_url");
    imported.src = `${resourcesUrl}/dist/render.js?version=${generateUUID()}`;
    document.head.appendChild(imported);
    document.getElementById('exportButton').style.display = 'inline';
}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    //after creating link you should delete dynamic link
    //clearDynamicLink(link); 
    document.body.appendChild(link);
    link.click();
    link.remove()
}

//Your modified code.
function onClickExport() {
    var fileName = selectedTemplate.innerHTML.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '_');
    html2canvas(document.getElementById('canvas')).then(canvas => {
        var myImage = canvas.toDataURL();
        downloadURI(myImage, `${fileName}-${getDateAsSimpleFormat()}.png`);
    });
}

function getDateAsSimpleFormat() {
    var d = new Date();
    return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
        d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds();
}
