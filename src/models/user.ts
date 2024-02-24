interface UserData {
  id: string;
  roomId?: string;
  x?: number;
  y?: number;
}

export class User {
  public id: string;

  public x?: number;

  public y?: number;

  public roomId?: string;

  public constructor(data: UserData) {
    this.id = data.id;
    this.x = data.x;
    this.y = data.y;
    this.roomId = data.roomId;
  }
}
