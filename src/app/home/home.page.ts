import { Component } from '@angular/core';
import { filter } from 'minimatch';
import { Platform } from '@ionic/angular';

declare let cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private isPlatformReady: Boolean = false;

  constructor(public platform: Platform) {
    platform.ready().then(
      () => {
        this.isPlatformReady = true;

        // setBotId
        /*
        cordova.plugins.ymchat.setBotId(botId: String");
        */
        cordova.plugins.ymchat.setBotId("x1597301712805");

        // setPayload
        /*
        cordova.plugins.ymchat.setPayload(payload: Object);
        */
        cordova.plugins.ymchat.setPayload({ "name": "Kartos", "designation": "God of war" })

        // onEventFromBot
        /*
        cordova.plugins.ymchat.onEventFromBot(eventCallback: (event: Object)=> void);
        */
        cordova.plugins.ymchat.onEventFromBot(
          (event) => {
            console.log(JSON.stringify(event));
          }
        );

        // onBotClose
        /*
        cordova.plugins.ymchat.onBotClose(botCloseEvent: ()=> void);
        */
        cordova.plugins.ymchat.onBotClose(
          () => {
            console.log("Bot closed")
          }
        )
      }
    )
  }

  startYmChatBot() {
    cordova.plugins.ymchat.setEnableSpeech(true);

    if (this.isPlatformReady) {

      // startBot
      /*
      cordova.plugins.ymchat.startBot(successCallback: ()=> void, failureCallback:(failureJSON: Object) => void);
      */
      cordova.plugins.ymchat.startChatbot(success, failure);
    }
    else {
      failure(`isPlatform ready : ${this.isPlatformReady}`);
    }
  }

  logout() {
    cordova.plugins.ymchat.unlinkDeviceToken("x1597301712805", "apiKey", "deviceToken", () => {
      alert("Removed device token successfully");
    }, (error) => {
      alert(`error ${error.message}`)
    })
  }

}
const success = (result) => {
  alert(result);
};
const failure = (result) => {
  alert(result);
};
