export interface User {
    Id: number;
    SiteId: number;
    SiteName: string;
    SiteDomain: string;
    Parent: number;
    Active: boolean;
    Name: string;
    Username: string;
    Email: string;
    Currency: string;
    Language: string;
    Credit: number;
    Balance: number;
    LastLogin: Date;
    LastLoginIp: string;
}