import { Component, ChangeDetectionStrategy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from , of} from 'rxjs';
import { map } from 'rxjs/operators'
import { CalendarEvent } from 'angular-calendar';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format
} from 'date-fns';
import { Observable } from 'rxjs';

interface Event {
  id: string;
  title: string;
  date: string;
}

export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

function getTimezoneOffsetString(date: Date): string {
  const timezoneOffset = date.getTimezoneOffset();
  const hoursOffset = String(
    Math.floor(Math.abs(timezoneOffset / 60))
  ).padStart(2, '0');
  const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
  const direction = timezoneOffset > 0 ? '-' : '+';
  return `T00:00:00${direction}${hoursOffset}${minutesOffset}`;
}

@Component({
  selector: 'calendar', changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  uidParam
  view: string = 'month';

  viewDate: Date = new Date();

  events$: Observable<Array<CalendarEvent<{ e: Event }>>> = null;

  activeDayIsOpen: boolean = false;

  constructor(private http: HttpClient,
              private _afStore: AngularFirestore,
              private _route: ActivatedRoute) {
    this.uidParam = this._route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.events$ = new Observable<Array<CalendarEvent<{e:Event}>>>();
    this.fetchEvents();
  }

  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];

    // const params = new HttpParams()
    //   .set(
    //     'primary_release_date.gte',
    //     format(getStart(this.viewDate), 'YYYY-MM-DD')
    //   )
    //   .set(
    //     'primary_release_date.lte',
    //     format(getEnd(this.viewDate), 'YYYY-MM-DD')
    //   )
    //   .set('api_key', '0ec33936a68018857d727958dca1424f');

    //where I need to make changes for individual events
    // this.events$ = this.http
    //   .get('https://api.themoviedb.org/3/discover/movie', { params })
    //   .pipe(
    //     map(({ results }: { results: Event[] }) => {
    //       return results.map((e: Event) => {
    //         //console.log(e)
    //         return {
    //           title: e.title,
    //           start: new Date(
    //             e.date + getTimezoneOffsetString(this.viewDate)
    //           ),
    //           color: colors.blue,
    //           allDay: true,
    //           meta: {
    //             e
    //           }
    //         };
    //       });
    //     })
    //   );



    let arr: Array<CalendarEvent<{e:Event}>> = new Array<CalendarEvent<{e:Event}>>();
    this._afStore.collection(`Users/${this.uidParam}/events`).snapshotChanges()
    .subscribe(col => {
      console.log(this.events$)
      col.map(doc => {
        console.log("HIT SUB")
        let docObj:{} = doc.payload.doc.data()
        let e:CalendarEvent = {
          
          title: docObj.title,
          start: new Date(
            docObj.date + getTimezoneOffsetString(this.viewDate)
          ),
          color: colors.blue,
          allDay: true,
          meta: {
            docObj
          }
        }
        arr.push(e)
      })
      this.events$ = of(arr);
      console.log(this.events$)
    });
  }

  dayClicked({
    date,
    events
  }: {
    date: Date;
    events: Array<CalendarEvent<{ e: Event }>>;
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventClicked(event: CalendarEvent<{ e: Event }>): void {
    // window.open(
    //   `https://www.themoviedb.org/movie/${event.meta.film.id}`,
    //   '_blank'
    // );
    
  }
}