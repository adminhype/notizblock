// auf notizen zugreifen & css stylen
function getNoteTemplate(indexNote) {
    // wann muss die notziz gelöscht werden ?
    // wenn wir auf den button klicken
    // notestitle array hinzufügt um titel auch in trash anzeigen zulassen
    return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]}<button onclick="AddTrashNote(${indexNote})">x</button> </p>`;
}


function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">löschen</button> </p>`;
}