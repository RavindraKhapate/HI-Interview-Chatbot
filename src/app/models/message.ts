export class Message {
  content: string;
  timestamp: Date;
  avatar: string;
  sentBy: string;

  constructor(sentBy: string = 'user') { 
    this.sentBy = sentBy;
    this.timestamp = new Date();
    if (sentBy == 'user') {
      this.avatar = '../../assets/images/user.png';
    } else {
      this.avatar = '../../assets/images/chatbot.png';
    }
  }
}
