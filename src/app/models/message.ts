export class Message {
  content: string;
  timestamp: Date;
  avatar: string;
  sentBy: string;

  constructor(content: string, sentBy: string, avatar: string, timestamp?: Date) {
    this.content = content;
    this.sentBy = sentBy;
    this.timestamp = timestamp;
    this.avatar = avatar;
  }
}
