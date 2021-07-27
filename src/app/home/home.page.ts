import { Component } from '@angular/core';
import { filter } from 'minimatch';

declare let cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private ymChat;
  private botId: String;

  constructor() {
    this.ymChat = cordova.plugins.ymchat;
    this.botId = "x1608615889375";
    cordova.plugins.ymchat.setBotId(this.botId);
  }

  startYmChatBot() {
    cordova.plugins.ymchat.startBot(success, failure);
  }
}
const success = (result) => {
  alert(result);
};
const failure = (result) => {
  alert(result);
};
