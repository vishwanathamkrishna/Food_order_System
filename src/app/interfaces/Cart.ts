export class Cart {
    id: number;
    restaurent_name: string;
    description: string;
    name: string;
    cost: number;
    email: string;

  
    constructor(id, restaurent_name, description = '', name, cost, email) {
      this.restaurent_name = restaurent_name;
      this.id = id;
      this.description = description;
      this.name = name;
      this.cost = cost;
      this.email = email;
    }
  }