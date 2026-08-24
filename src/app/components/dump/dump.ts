import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Common } from '../../services/common';

@Component({
  selector: 'app-dump',
  imports: [CommonModule],
  templateUrl: './dump.html',
  styleUrl: './dump.css',
})
export class Dump {

  @Input() data:any;
  @Output() emaildata = new EventEmitter<any>();

  ngOnChanges(){
    console.log('smart data', this.data)
  }

  constructor(private commonService:Common) {
    this.commonService.smartData$.subscribe((res:any)=>{
      this.data = res;
      console.log('hhhhh',res)
    })
  }

  ngOnInit(){

  }

  view(data:any){
    this.emaildata.emit(data);
  }
}
