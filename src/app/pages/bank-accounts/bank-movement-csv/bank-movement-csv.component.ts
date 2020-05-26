import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BankService } from 'src/app/services/bankservice/bank.service';


@Component({
  selector: 'app-bank-movement-csv',
  templateUrl: './bank-movement-csv.component.html',
  styleUrls: ['./bank-movement-csv.component.css']
})
export class BankMovementCsvComponent implements OnInit {

  bankMovementsCsv:any[] =[];
  movements: any[]=[];
  collapsed: boolean = false;


  constructor(private _bank: BankService,
              // public _modalPoliza: ModalPolizaService
               ) { }

  ngOnInit(): void {

    this._bank.getAllBankMovementCsv().subscribe(res => {
      console.log('BANK SERVICE ', res);
      this.bankMovementsCsv = res;

    })
  }


  isCollapsed(elem: HTMLElement){
    console.log(elem.className, 'before', this.collapsed);
    if(!this.collapsed){
      console.log('!iscollapsed');
      elem.className = 'ti-zoom-out';
      this.collapsed = true;
    } else {
      console.log('iscollapsed');
      elem.className = 'ti-zoom-in';
      this.collapsed = false;
    }

  }



  deleteBankMovement(index){

    console.log('EVENT ', index);
     let movement =  this.movements.find(res => res.id === index);

    if(!movement.enabled) {
      Swal.fire({
        icon: 'warning',
        title: 'El Movimiento no tiene Poliza!',
        text: 'Agrege una Poliza antes de borrar el movimiento!',
        // footer: '<a href>Why do I have this issue?</a>'
      });

    }else {

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {

        console.log('NO DELETED');

        if (result.value) {
          console.log('DELETED');
           this._bank.deleteBankMovement(index).subscribe( res=> {
            console.log('DELETE IS ', res);

        })

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
}

mostrarModalPoliza(movement:any){
  // this._modalPoliza.mostrarModal(movement,'');
  // this._modalPoliza.getSubAccounts();
  // this._modalPoliza.fillPolizaId();

}

}
