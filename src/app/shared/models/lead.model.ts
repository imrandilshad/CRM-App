export interface Lead {
    id: number;
    name: string;
    email: string;
    phone: string;
    status: 'New' | 'Confirmed';
}