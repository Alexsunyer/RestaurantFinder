export interface Restaurant {
  id: number;
  name: string;
  address: string;
  tags: string[];
  status: "open" | "closed";
  creationDate: string;
  openCloseHours: string;
}
