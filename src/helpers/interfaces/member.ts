export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  experience: number;
  colleagues: Member[];
  pic?: any;
}
