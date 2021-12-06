export interface CustomerAddress {
    zip: string;
    city: string;
    phone: string;
    country: string;
    address1: string;
    province: string;
    last_name: string;
    first_name: string;
}

export interface Customer {
    first_name: string;
    last_name: string;
    default_address: CustomerAddress;
}

export function getSampleAddress(): CustomerAddress {
    return {
        zip: '10001',
        city: 'New York',
        phone: '777-777-7777',
        country: 'United States',
        address1: '20 W 34th St',
        province: 'New York',
        last_name: 'Testingson',
        first_name: 'Umamitest Client'
    }
}

export function getSampleCustomer(): Partial<Customer> {
    return {
        first_name: 'Umamitest Client',
        last_name: 'Testingson',
        default_address: getSampleAddress(),
    };
}