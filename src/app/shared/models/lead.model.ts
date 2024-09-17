export interface Lead {
    id: number;
    username:string;
    name: string;
    email: string;
    phone: string;
    status: 'New' | 'Confirmed';
}
