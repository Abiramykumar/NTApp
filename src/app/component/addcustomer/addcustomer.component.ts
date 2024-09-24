import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../_module/Material.Module';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../../_model/Customer';
import { Store } from '@ngrx/store';
import { addCustomer, getCustomer, updateCustomer } from '../../_store/Customer/Customer.Actions';
import { getEditdata } from '../../_store/Customer/Customer.Selector';

@Component({
  selector: 'app-addcustomer',
  standalone: true,
  imports: [MaterialModule, RouterLink, ReactiveFormsModule],
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.css'
})
export class AddcustomerComponent implements OnInit {
  editcode = 'id';
  pagetitle = 'Add Contact';
  constructor(private  builder: FormBuilder, private store: Store, private actroute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.editcode = this.actroute.snapshot.paramMap.get('id') as string;
    console.log("editcode",this.editcode)
    if (this.editcode != null && this.editcode != '') {
      this.pagetitle = 'Edit contact';
      this.myform.controls.id.disable();
      this.store.dispatch(getCustomer({id:this.editcode}))
      this.store.select(getEditdata).subscribe((item:any) => {
        console.log("sdf", item);
        this.myform.setValue({ id: item.id, name: item.name, email: item.email, phoneNumber: item.phoneNumber, address: item.address });
      });
    }
  }

  myform = this.builder.group({
    id: this.builder.control('', Validators.required),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    phoneNumber: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required)
  })

  Savecustomer() {
    if (this.myform.valid) {
      const _obj: Customer = {
        Id: this.myform.value.id as string,
        Name: this.myform.value.name as string,
        Email: this.myform.value.email as string,
        PhoneNumber: this.myform.value.phoneNumber as string,
        Address: this.myform.value.address as string,
      }
      console.log(_obj);
      if(this.editcode!=null && this.editcode!=''){
        _obj.Id=this.editcode;
        this.store.dispatch(updateCustomer({ inputdata: _obj }));
      }else{
        this.store.dispatch(addCustomer({ inputdata: _obj }));
      }
    }

  }
}

// Savecustomer() {
//   if (this.myform.valid) {
//     // Create a base object without the Id
//     const _obj: Partial<Customer> = {
//       Name: this.myform.value.name as string,
//       Email: this.myform.value.email as string,
//       PhoneNumber: this.myform.value.phoneNumber as string,
//       Address: this.myform.value.address as string,
//     };

//     console.log('Payload before adding ID (if necessary):', _obj);

//     // If you're editing (not adding), include the Id in the payload
//     if (this.editcode != null && this.editcode !== '') {
//       _obj.Id = this.editcode;
//       this.store.dispatch(updateCustomer({ inputdata: _obj as Customer })); // Cast it to Customer since Id is added
//     } else {
//       // Dispatch action without Id for adding a new customer
//       this.store.dispatch(addCustomer({ inputdata: _obj as Customer }));
//     }
//   } else {
//     console.log('Form is invalid:', this.myform.errors);
//   }
// }
// }