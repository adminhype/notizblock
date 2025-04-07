// auf notizen zugreifen & css stylen
function getNoteTemplate(indexNote) {
    // wann muss die notziz gelöscht werden ?
    // wenn wir auf den button klicken
    // notestitle array hinzufügt um titel auch in trash anzeigen zulassen
    return /*html*/`
    <div class="note">
        <h3>${notesTitles[indexNote]}</h3>
        <p>${notes[indexNote]}</p>
        <div>
            <button class="btn" onclick="noteToTrash(${indexNote})">X</button>
            <button class="btn" onclick="noteToArchiv(${indexNote})">A</button>
        </div>
    </div>
    `;
}
function getArchivNoteTemplate(indexArchivNote) {
    // wann muss die notziz gelöscht werden ?
    // wenn wir auf den button klicken
    // notestitle array hinzufügt um titel auch in trash anzeigen zulassen
    return /*html*/`
    <div class="note">
        <h3>${archivNotesTitles[indexArchivNote]}</h3>
        <p>${archivNotes[indexArchivNote]}</p>
        <div>
            <button class="btn" onclick="noteToTrash(${indexArchivNote})">X</button>
            <button class="btn" onclick="noteToArchiv(${indexArchivNote})">A</button>
        </div>
    </div>
    `;
}
function getTrashNoteTemplate(indexTrashNote) {
    // wann muss die notziz gelöscht werden ?
    // wenn wir auf den button klicken
    // notestitle array hinzufügt um titel auch in trash anzeigen zulassen
    return /*html*/`
    <div class="note">
        <h3>${trashNotesTitles[indexTrashNote]}</h3>
        <p>${trashNotes[indexTrashNote]}</p>
        <div>
            <button class="btn" onclick="noteToTrash(${indexTrashNote})">X</button>
            <button class="btn" onclick="noteToArchiv(${indexTrashNote})">A</button>
        </div>
    </div>
    `;
}


