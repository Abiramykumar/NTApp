import { CustomerModel } from "../../../_model/Customer";

export const customerState: CustomerModel = {
    list: [],
    errormessage: '',
    editdata:{
        Id: "",
        Name: "",
        Email: "",
        PhoneNumber: "",
        Address:""
    }
}