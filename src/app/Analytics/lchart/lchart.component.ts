import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lchart',
  templateUrl: './lchart.component.html',
  styleUrls: ['./lchart.component.css']
})
export class LchartComponent{

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Media'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Fashion'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Subscriptions'},
    {data: [38, 61, 55, 12, 100, 27, 40], label: 'Memorabilia'}
  ];
  public lineChartLabels:Array<any> =['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}


