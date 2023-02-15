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
        cordova.plugins.ymchat.setBotId("x1645602443989");

        // setBotId
        /*
        cordova.plugins.ymchat.setVersion(version: int");
        */
        cordova.plugins.ymchat.setVersion(2);

        // setDeviceToken
        /*
        cordova.plugins.ymchat.setDeviceToken(token: String");
        */
        cordova.plugins.ymchat.setDeviceToken("deviceToken");

       // setAuthenticationToken
        /*
        cordova.plugins.ymchat.setAuthenticationToken(token: String");
        */
        cordova.plugins.ymchat.setAuthenticationToken("test345");

        // setPayload
        /*
        cordova.plugins.ymchat.setPayload(payload: Object);
        */
        cordova.plugins.ymchat.setPayload({ "name": "Kartos", "designation": "God of war" })

        /*
        cordova.plugins.ymchat.useLiteVersion(shouldUseLiteVersion: Boolean");
        */
        cordova.plugins.ymchat.useLiteVersion(true);

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

  unlinkDeviceToken() {
    cordova.plugins.ymchat.unlinkDeviceToken("Rs3tSLQF9tWS9lvZFOUyjPBwoiu4naOb7mueI44d", () => {
      alert("Removed device token successfully");
    }, (error) => {
      alert("ERROR");
    })
  }

  registerDevice() {
    cordova.plugins.ymchat.registerDevice("Rs3tSLQF9tWS9lvZFOUyjPBwoiu4naOb7mueI44d", () => {
      alert("Registered Device successfully");
    }, (error) => {
      alert("ERROR");
    })
  }

  getUnreadMessagesCount() {
    cordova.plugins.ymchat.getUnreadMessagesCount((count) => {
      alert(`Unread Message Count: ${count}`);
    }, (error) => {
      alert("ERROR");
    })
  }

}
const success = (result) => {
  alert(result);
};
const failure = (result) => {
  alert(result);
};
