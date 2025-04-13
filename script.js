// }
//#region arrays
let notesTitles = ["ewrwer", "23232"];
let notes = ["32424", " 224222"];

let trashNoteTitles = [];
let trashNotes = [];

let archivNoteTitles = [];
let archivNotes = [];
//#endregion arrays

function init() {
    getFromLocalStorage();
    renderNotes();
}

//#region renderfunctions 
function renderNotes() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}
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

    // localStorage.setItem("archivNoteTitles", JSON.stringify(archivNoteTitles));
    // localStorage.setItem("archivNotes", JSON.stringify(archivNotes));

    // localStorage.setItem("trashNoteTitles", JSON.stringify(trashNoteTitles));
    // localStorage.setItem("trashNotes", JSON.stringify(trashNotes));

}

function getFromLocalStorage() {
    let notesTitlesData = JSON.parse(localStorage.getItem("notesTitles"));
    let notesData = JSON.parse(localStorage.getItem("notes"));
    console.log(notesTitlesData);
    console.log(notesData);



    // let archivNoteTitlesData = JSON.parse(localStorage.getItem('archivNoteTitles'));
    // let archivNotesData = JSON.parse(localStorage.getItem('archivNotes'));

    // let trashNoteTitlesData = JSON.parse(localStorage.getItem('trashNoteTitles'));
    // let trashNotesData = JSON.parse(localStorage.getItem('trashNotes'));

    if (notesTitlesData && notesData && notesTitlesData.length === notesData.length && notesData.length > 0) {
        notesTitles = notesTitlesData;
        notes = notesData;
    } else {
        notesTitles = [];
        notes = [];
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
function getNoteTemplate(indexNote) {
    return /*html*/  `
    <div>
        <p><strong>Titel </strong>${notesTitles[indexNote]}</p>
        <p>${notes[indexNote]}</p>
        <button onclick="AddNoteToTrash(${indexNote})">x</button>
        <button onclick="AddNoteToArchiv(${indexNote})">a</button>
    </div >
    `;

}

function getArchivNoteTemplate(indexArchivNote) {
    return /*html*/  `
    <div>
        <p><strong>Titel </strong>${archivNoteTitles[indexArchivNote]}</p>
        <p>${archivNotes[indexArchivNote]}</p>
        <button onclick="AddNoteToTrash(${indexArchivNote})">x</button>
        <button onclick="AddNoteToArchiv(${indexArchivNote})">a</button>
    </div >
    `;

}
function getTrashNoteTemplate(indexTrashNote) {
    return /*html*/  `
    <div>
        <p><strong>Titel </strong>${trashNoteTitles[indexTrashNote]}</p>
        <p>${trashNotes[indexTrashNote]}</p>
        <button onclick="AddNoteToTrash(${indexTrashNote})">x</button>
        <button onclick="deleteNote(${indexTrashNote})">a</button>
    </div >
    `;

}


function AddNoteToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNoteTitles.push(trashNoteTitle[0]);

    renderNotes();
    renderTrashNotes();
}
function AddNoteToArchiv(indexArchivNote) {
    let archivNote = notes.splice(indexArchivNote, 1);
    archivNotes.push(archivNote[0]);
    let archivNoteTitle = notesTitles.splice(indexArchivNote, 1);
    archivNoteTitles.push(archivNoteTitle[0]);

    renderNotes();
    renderArchivNotes();
}
function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    trashNoteTitles.splice(indexTrashNote, 1);
    renderNotes();
    renderTrashNotes();
}


