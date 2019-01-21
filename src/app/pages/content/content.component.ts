import { Component, OnInit, ViewChild } from '@angular/core';
import { Note } from './post';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  htmlele: HTMLElement;
  notes: any;
  batch = 20;
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;

  snapshot;
  noteDoc: AngularFirestoreDocument<Note>;

  notesCollection: AngularFirestoreCollection<Note>;

  newContent = "type note here";

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.notesCollection = this.db.collection('notes', ref => ref.orderBy('stickydate', 'desc'));
    this.notes = this.notesCollection.valueChanges();
    this.snapshot = this.notesCollection.snapshotChanges().subscribe(res => {
      this.snapshot = res;
      console.log(this.snapshot);
    });
  }

  subscribe() {
    this.hide;
  }

  hide(id) {
    this.htmlele = document.getElementById(id) as HTMLElement;
    this.htmlele.parentNode.removeChild(this.htmlele);
  }

  trackByIdx(i) {
    return i;
  }

  addNote() {
    let date = new Date();
    let noteToAdd: Note = new Note("", this.newContent, date.toISOString(), 'incomplete', 'yellow')
    this.notesCollection.add({ ...noteToAdd });
    // this.notesCollection.get()
  }

  displayId(x) {
    console.log(x);
  }

  changeColor(index, color) {
    // get noteRef at this id
    let id = this.snapshot[index].payload.doc.id;
    this.noteDoc = this.db.doc('notes/' + id);
    // subscribe to this note, cast it as a new one, and update it
    let newNote: Note;
    this.notesCollection.doc(id).get().subscribe(res => {
      newNote = res.data() as Note;
      newNote.color = color;
      this.noteDoc.set(newNote);
    });
  }
  deleteNote(index) {
    // get noteRef at this id
    let id = this.snapshot[index].payload.doc.id;
    this.notesCollection.doc(id).delete();
  }

  updateNote(index, note: Note) {
    console.log('inside updateNote');
    let id = this.snapshot[index].payload.doc.id;
    this.noteDoc = this.db.doc('notes/' + id);
    this.notesCollection.doc(id).get().subscribe(res => {
      this.noteDoc.set(note);
    });
  }
}
