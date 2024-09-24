export interface Customer{
    Id:string;
    Name:string;
    Email:string;
    PhoneNumber:string;
    Address:string;
}

export interface CustomerModel{
    list:Customer[],
    errormessage:string,
    editdata:Customer
}