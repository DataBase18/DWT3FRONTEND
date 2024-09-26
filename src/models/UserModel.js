
export class UserModel {
  constructor(email, dpi, name) {
    this.email = email;
    this.dpi = dpi; 
    this.name = name; 
  }

  static fromJson(json){
    return new UserModel(
      json.email, 
      json.DPI, 
      json.name
    );
  }
}