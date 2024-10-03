import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Platform } from '@ionic/angular';

declare var cordova: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private isPlatformReady: Boolean = false;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      this.isPlatformReady = true;

      /* setBotId*/
      cordova.plugins.ymchat.setBotId('x1657623696077');

      /* setVersion*/
      cordova.plugins.ymchat.setVersion(2);

      /* useLiteVersion */
      // cordova.plugins.ymchat.useLiteVersion(true);

      /* setAuthenticationToken */
      // cordova.plugins.ymchat.setAuthenticationToken('authToken');

      /* setDeviceToken for Push Notifications */
      // cordova.plugins.ymchat.setDeviceToken('deviceToken');

      /* Use Secure YM Auth */
      // cordova.plugins.ymchat.useSecureYmAuth(true);

      /* setPayload */
      cordova.plugins.ymchat.setPayload({
        name: 'Integration',
        type: 'cordova',
      });

      /* Trigger journey */
      // cordova.plugins.ymchat.setPayload({ JourneySlug: 'checkout-cart' });

      /* On-Premise / Region Specific deployments */
      // cordova.plugins.ymchat.setCustomURL('https://your-on-prem-url.com');
      // cordova.plugins.ymchat.setCustomURL('https://rx.cloud.yellow.ai');

      /* Custom loader */
      // cordova.plugins.ymchat.setCustomLoaderURL(
      //   'https://example.com/your/custom/image.gif'
      // );

      /* Enable Speech to Text */
      cordova.plugins.ymchat.setEnableSpeech(true);

      /* Mic Icon Color */
      cordova.plugins.ymchat.setMicIconColor('#ffffff');

      /* Mic Background Color */
      cordova.plugins.ymchat.setMicBackgroundColor('#ff0000');

      /* Hide Input Bar while bot is loading */
      cordova.plugins.ymchat.setDisableActionsOnLoad(true);

      /*  Enabling UI close button */
      cordova.plugins.ymchat.showCloseButton(true);

      /* Close button color */
      cordova.plugins.ymchat.setCloseButtonColor('#000000');

      /* Status bar color */
      cordova.plugins.ymchat.setStatusBarColor('#FFFFFF');

      /* Set bot name */
      cordova.plugins.ymchat.setThemeBotName('Demo Bot Name');

      /* Set bot description */
      cordova.plugins.ymchat.setThemeBotDescription('Demo Bot Description');

      /* Set bot primary color */
      cordova.plugins.ymchat.setThemePrimaryColor('#ff0000');

      /* Set bot secondary color */
      cordova.plugins.ymchat.setThemeSecondaryColor('#00b4d8');

      /* Set bot bubble background color */
      cordova.plugins.ymchat.setThemeBotBubbleBackgroundColor('#e9ecef');

      /* Set bot icon */
      cordova.plugins.ymchat.setThemeBotIcon(
        'https://cdn.yellowmessenger.com/XJFcMhLpN6L91684914460598.png'
      );

      /* Set bot click icon */
      cordova.plugins.ymchat.setThemeBotClickIcon(
        'https://cdn.yellowmessenger.com/XJFcMhLpN6L91684914460598.png'
      );

      /* Set chat container theme */
      cordova.plugins.ymchat.setChatContainerTheme('light');

      /* Bot Events */
      cordova.plugins.ymchat.onEventFromBot((event: any) => {
        console.log(JSON.stringify(event));
      });

      /* Bot close event */
      cordova.plugins.ymchat.onBotClose(() => {
        // cordova.plugins.ymchat.closeBot();
        console.log('Bot closed');
      });
    });
  }

  startYmChatBot() {
    if (this.isPlatformReady) {
      // Present chatbot
      /*
      cordova.plugins.ymchat.startBot(successCallback: ()=> void, failureCallback:(error: Object) => void);
      */
      cordova.plugins.ymchat.startChatbot(this.success, this.failure);
    } else {
      this.failure(`isPlatform ready : ${this.isPlatformReady}`);
    }
  }

  /* Unlink Device Token */
  unlinkDeviceToken() {
    cordova.plugins.ymchat.unlinkDeviceToken(
      'apiKey',
      () => {
        alert('Removed device token successfully');
      },
      (error: { message: any }) => {
        alert(`ERROR: ${error.message}`);
      }
    );
  }

  /* Register Device */
  registerDevice() {
    cordova.plugins.ymchat.registerDevice(
      'apiKey',
      () => {
        alert('Registered Device successfully');
      },
      (error: { message: any }) => {
        alert(`ERROR: ${error.message}`);
      }
    );
  }

  /* Unread Message Count */
  getUnreadMessagesCount() {
    cordova.plugins.ymchat.getUnreadMessagesCount(
      (count: any) => {
        alert(`Unread Message Count: ${count}`);
      },
      (error: { message: any }) => {
        alert(`ERROR: ${error.message}`);
      }
    );
  }

  private success(result: any) {
    alert(result);
  }
  private failure(error: string) {
    alert(error);
  }
}
