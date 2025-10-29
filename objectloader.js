async function loadObject(container, object) {
    const res= await fetch(object);
    document.getElementById(container).innerHTML= await res.text();
}
loadObject("mainheader", "objects/header.html");
loadObject("mainfooter", "objects/footer.html");