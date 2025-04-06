// notizen anzeigen lassen

let notesTitles = ['ba', 'aufgabe'];
let notes = ['notiz', 'neee'];

let trashNotesTitles = [];
let trashNotes = [];

function renderNotes() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

// vorhandene funktion kopieren ändern um gelösche array inhalte anzuzeigen
function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content')
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}


// notizen hinzufügen

function addNote() {
    // eingabe anzeigen lassen
    let NoteInputRef = document.getElementById('note_input')
    // eingabe auslesen
    let noteInput = NoteInputRef.value;
    // eingabe den notzien hinzufügen  
    notes.push(noteInput)


    // function anzeigen lassen
    renderNotes();

    //werte zurück auf leeren string setzen
    NoteInputRef.value = "";
}

// welche notiz muss gelöscht werden (indexNote)

//notizen löschen
function AddTrashNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);

    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    // anzeige updaten 
    // rendern = anzeigen lassen
    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);

    renderNotes();
    renderTrashNotes();
}


// notiz archivieren