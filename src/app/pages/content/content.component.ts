import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from './post';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import * as faker from '../../../app/faker.js';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  htmlele: HTMLElement;
  posts: any;
  batch = 20;
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  faker = faker;

  snapshot;
  postDoc: AngularFirestoreDocument<Post>;

  postsCollection: AngularFirestoreCollection<Post>;

  newContent = "type note here";

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.postsCollection = this.db.collection('posts', ref => ref.orderBy('date', 'desc'));
    this.posts = this.postsCollection.valueChanges();
    this.snapshot = this.postsCollection.snapshotChanges().subscribe(res => {
      this.snapshot = res;
      console.log(this.snapshot);
    });
    // this.faker.personas();
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

  addPost() {
    let randomName = faker.name.findName();
    let paragraph = faker.lorem.paragraph();
    let profileUrl = faker.random.number() % 5 === 0 ?  'https://i.imgur.com/y45bKaJl.jpg' : faker.internet.avatar();
    let postType = faker.random.number() % 2 === 0 ? 'text' : 'img';
    console.log(profileUrl);
    console.log(randomName);
    console.log(paragraph);
    let date = new Date();
    let postToAdd: Post = new Post(randomName, profileUrl, date.toISOString(), paragraph, faker.random.image(), postType, '');
    // "", this.newContent, , 'incomplete', 'yellow');


    this.postsCollection.add({ ...postToAdd });
    // this.notesCollection.get()
  }

  displayId(x) {
    console.log(x);
  }

  changeColor(index, color) {
    // get noteRef at this id
    let id = this.snapshot[index].payload.doc.id;
    this.postDoc = this.db.doc('notes/' + id);
    // subscribe to this note, cast it as a new one, and update it
    let newNote: Post;
    this.postsCollection.doc(id).get().subscribe(res => {
      newNote = res.data() as Post;
      newNote.color = color;
      this.postDoc.set(newNote);
    });
  }
  deleteNote(index) {
    // get noteRef at this id
    let id = this.snapshot[index].payload.doc.id;
    this.postsCollection.doc(id).delete();
  }

  updateNote(index, note: Post) {
    console.log('inside updateNote');
    let id = this.snapshot[index].payload.doc.id;
    this.postDoc = this.db.doc('posts/' + id);
    this.postsCollection.doc(id).get().subscribe(res => {
      this.postDoc.set(note);
    });
  }
}
