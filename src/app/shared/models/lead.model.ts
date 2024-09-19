export interface Lead {
    id: number;
    userId:string;
    name: string;
    email: string;
    phone: string;
    status: 'New' | 'Confirmed';
}
