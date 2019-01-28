import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ChatMessage } from './chatMessage';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ChatComponent implements OnInit, AfterViewChecked {
  userId = 'Anonymous';
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  messages: any;
  messagesCollection: AngularFirestoreCollection<ChatMessage>;

  @ViewChild('sendMessageInput')
  sendMessageInput: ElementRef;

  @ViewChild('messageChatArea')
  messageChatArea: CdkVirtualScrollViewport;

  constructor(private db: AngularFirestore) {
  }

  ngOnInit() {

    this.messagesCollection = this.db.collection('chatMessages', ref => ref.orderBy('date'));
    this.messages = this.messagesCollection.valueChanges();
    this.messageChatArea.setRenderedContentOffset(0, 'to-end');
    // this.messageChatArea.nativeElement.scrollToIndex(this.messages.length);

    try {
    } catch (e) {
      // IE Sucks
      console.log(e);
      // window.scrollTo(0, top);
    }


    // this.snapshot = this.postsCollection.snapshotChanges().subscribe(res => {
    //   this.snapshot = res;
    //   console.log(this.snapshot);
    // });
  }

  ngAfterViewChecked() {
    console.log('view checked');
    this.messageChatArea.scrollToOffset(10000);

  }

  trackByIdx(i) {
    return i;
  }

  sendMessage(event) {
    // this.messages.push(event.target.value);
    const date = new Date();
    const chatMessageToAdd: ChatMessage = new ChatMessage(event.target.value + '', date.toISOString(), this.userId);
    console.log('id: ' + this.userId);
    // "", this.newContent, , 'incomplete', 'yellow');
    this.messagesCollection.add({ ...chatMessageToAdd });
    this.sendMessageInput.nativeElement.value = '';
    // this.messageChatArea.setRenderedContentOffset(0);
  }
}
