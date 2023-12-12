function openZoekvenster() {
    // Toon het zoekvenster
    document.getElementById('zoekvenster').style.display = 'block';
}

function sluitZoekvenster() {
    // Verberg het zoekvenster
    document.getElementById('zoekvenster').style.display = 'none';
}

function voerZoekopdrachtUit() {
    // Hier kun je de logica toevoegen om de zoekopdracht uit te voeren
    // In dit voorbeeld wordt eenvoudigweg het venster gesloten
    sluitZoekvenster();
}