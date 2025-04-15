
//#regionarrays

let notesTitles = [];
let notes = [];

let trashNoteTitles = [];
let trashNotes = [];

let archivNoteTitles = [];
let archivNotes = [];

// array zusammenfassen in einem object > arraynamen sind keys + arrays
// let allNotes = {
//     'notesTitles': ['xa', 'buuh'],
//     'notes': ['ax', 'yeeey'],
//     'trashNotesTitles': [],
//     'trashNotes': [],
//     'archivNotesTitles': [],
//     'archivNotes': []
// }
//#endregion arrays


// z.b funktions aufruf
// MoveNote(1, 'notes', 'trashNotes')

// eine function für mehrere functions
// no 1: was brauchen wir indexNote start array rausnehmen > in eine andere stelle einfügen
// function MoveNote(indexNote, startKey, destinationKey) {
//     //beliebiges array hinzufügen 
//     let note = allNotes[startKey].splice(indexNote, 1);
//     notes.push(note[0]);
//     let noteTitles = trashNoteTitles.splice(indexNote, 1);
//     notesTitles.push(noteTitles[0]);



//     renderNotes();
//     renderTrashNotes();
//     renderArchivNotes();
// }

//#region renderfunctions 
function renderNotes() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";
    //array ändern notes > allNotes + getnotetemplate ändern
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}
getFromLocalStorage();

renderNotes();
renderTrashNotes();
renderArchivNotes();
function renderTrashNotes() {
    let TrashContentRef = document.getElementById('trash_content')
    TrashContentRef.innerHTML = "";
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        TrashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}
function renderArchivNotes() {
    let archivContentRef = document.getElementById('archiv_content')
    archivContentRef.innerHTML = "";
    for (let indexArchivNote = 0; indexArchivNote < archivNotes.length; indexArchivNote++) {
        archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
    }
}
//#endregion renderfunctions

//ausgabe aus dem input feld onclick speichern > beide inputfelder müssen ausgefüllt sein
function addNote() {
    // input-felder holen
    let NoteinputTitleRef = document.getElementById('note_input_title');
    let NoteInputRef = document.getElementById('note_input');
    // inhalte prüfen
    let NoteinputTitle = NoteinputTitleRef.value;
    let noteInput = NoteInputRef.value;
    // prüfen ob beide felder nicht leer sind

    // NoteintputTitle > inhalt aus dem titel-inputfeld
    // noteInput > inhalt aus dem content-inputfeld
    // !== "" > bedeutet "ist nicht gleich leer"
    // && > "UND" beide bedingungen müssen stimmen
    if (NoteinputTitle !== "" && noteInput !== "") {
        notesTitles.push(NoteinputTitle);
        notes.push(noteInput);

        saveToLocalStorage();

        renderNotes();
        NoteinputTitleRef.value = "";
        NoteInputRef.value = "";
    }
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));

    localStorage.setItem("archivNoteTitles", JSON.stringify(archivNoteTitles));
    localStorage.setItem("archivNotes", JSON.stringify(archivNotes));

    localStorage.setItem("trashNoteTitles", JSON.stringify(trashNoteTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));

}

function getFromLocalStorage() {
    let notesTitlesData = JSON.parse(localStorage.getItem("notesTitles"));
    let notesData = JSON.parse(localStorage.getItem("notes"));

    if (notesTitlesData && notesData && notesTitlesData.length === notesData.length && notesData.length) {
        notesTitles = notesTitlesData;
        notes = notesData;
    } else {
        notesTitles = [];
        notes = [];
    }

    let archivNoteTitlesData = JSON.parse(localStorage.getItem('archivNoteTitles'));
    let archivNotesData = JSON.parse(localStorage.getItem('archivNotes'));

    if (archivNoteTitlesData && archivNotesData && archivNoteTitlesData.length === archivNotesData.length && archivNotesData.length) {
        archivNoteTitles = archivNoteTitlesData;
        archivNotes = archivNotesData;
    } else {
        archivNoteTitles = [];
        archivNotes = [];
    }

    let trashNoteTitlesData = JSON.parse(localStorage.getItem('trashNoteTitles'));
    let trashNotesData = JSON.parse(localStorage.getItem('trashNotes'));

    if (trashNoteTitlesData && trashNotesData && trashNoteTitlesData.length === trashNotesData.length && trashNotesData.length) {
        trashNoteTitles = trashNoteTitlesData;
        trashNotes = trashNotesData;
    } else {
        trashNoteTitles = [];
        trashNotes = [];
    }

    // if (archivNoteTitlesData && archivNoteTitlesData.length > 0) {
    //     archivNoteTitles = archivNoteTitlesData;
    // }

    // if (archivNotesData && archivNotesData.length > 0) {
    //     archivNotes = archivNotesData;
    // }

    // if (trashNoteTitlesData && trashNoteTitlesData.length > 0) {
    //     trashNoteTitles = trashNoteTitlesData;
    // }

    // if (trashNotesData && trashNotesData.length > 0) {
    //     trashNotes = trashNotesData;
    // }
}

// function getNoteTemplate(indexNote) {
//     return /*html*/  `
//     <div>
//         <p>+ title:${notesTitles[indexNote]} -> ${notes[indexNote]}</p><button onclick="AddNoteToTrash(${indexNote})">x</button>
//         <p>+ title:${notesTitles[indexNote]} -> ${notes[indexNote]}</p><button onclick="AddNoteToArchiv(${indexNote})">a</button>
//     </div >
//     `;

// }
//#region template
function getNoteTemplate(indexNote) {
    // allNotes. hinzufügen (änderung auf ein anderes array)
    return /*html*/  `
    <div class="noteStyle">
        <p><strong>Titel </strong>${notesTitles[indexNote]}</p>
        <p>${notes[indexNote]}</p>
        <button onclick="AddNoteToTrash(${indexNote})">X</button>
        <button onclick="AddNoteToArchiv(${indexNote})">A</button>
    </div >
    `;

}

function getArchivNoteTemplate(indexArchivNote) {
    return /*html*/  `
    <div class="noteStyle">
        <p><strong>Titel </strong>${archivNoteTitles[indexArchivNote]}</p>
        <p>${archivNotes[indexArchivNote]}</p>
        <button onclick="AddNoteToTrash(${indexArchivNote})">X</button>
        <button onclick="AddNoteFromArchivToNote(${indexArchivNote})">N</button>
    </div >
    `;

}
function getTrashNoteTemplate(indexTrashNote) {
    return /*html*/  `
    <div class="noteStyle">
        <p><strong>Titel </strong>${trashNoteTitles[indexTrashNote]}</p>
        <p>${trashNotes[indexTrashNote]}</p>
        <button onclick="AddNoteFromTrashToNotes(${indexTrashNote})">N</button>
        <button onclick="deleteNote(${indexTrashNote})">Delete</button>
    </div >
    `;

}
//#endregion template


function AddNoteToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNoteTitles.push(trashNoteTitle[0]);

    renderNotes();
    renderTrashNotes();
    renderArchivNotes();
    saveToLocalStorage();
}
function AddNoteToArchiv(indexArchivNote) {
    let archivNote = notes.splice(indexArchivNote, 1);
    archivNotes.push(archivNote[0]);
    let archivNoteTitle = notesTitles.splice(indexArchivNote, 1);
    archivNoteTitles.push(archivNoteTitle[0]);

    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
    saveToLocalStorage();

}

function AddNoteFromArchivToNote(indexArchivNote) {
    let note = archivNotes.splice(indexArchivNote, 1);
    notes.push(note[0]);
    let noteTitle = archivNoteTitles.splice(indexArchivNote, 1);
    notesTitles.push(noteTitle[0]);

    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
    saveToLocalStorage();

}

function AddNoteFromTrashToNotes(indexTrashNote) {
    let note = trashNotes.splice(indexTrashNote, 1);
    notes.push(note[0]);
    let noteTitle = trashNoteTitles.splice(indexTrashNote, 1);
    notesTitles.push(noteTitle[0]);

    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
    saveToLocalStorage();

}

function AddNoteFromNotesToTrash(indexNote) {
    let trashNote = archivNotes.splice(indexNote, 1);
    notes.push(trashNote[0]);
    let trashNoteTitle = archivNoteTitles.splice(indexNote, 1);
    notesTitles.push(trashNoteTitle[0]);

    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
    saveToLocalStorage();

}

function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    trashNoteTitles.splice(indexTrashNote, 1);
    renderNotes();
    renderTrashNotes();
    renderArchivNotes();

}


