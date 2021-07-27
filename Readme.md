# ymchat

This demo app demonstrates how `ymchat` can be integrated in a ionic app

`ymchat` can be found at [https://github.com/PurushYM/YMChatIonic](https://github.com/PurushYM/YMChatIonic)

## Steps to run

1. Clone this `YMChatIonicDemo` app
2. clone the `YMChatIonic` from [https://github.com/PurushYM/YMChatIonic](https://github.com/PurushYM/YMAgentSdk)
3. keep both projects at same folder level

   ```
   exampleFolder
   |
   |- YMChatIonic
   |- YMChatIonicDemo

   ```

4. Open terminal and navigate to `YMChatIonicDemo` folder
5. Run the following command to activate android platform
   ```
   $ ionic cordova platform add android
   $ ionic cordova platform add ios
   ```
6. Run following command to install YMAgentSdk to demo project
   ```
   $ ionic cordova add ../YMChatIonic
   ```
7. Run following command to run application on android
   ```
    $ ionic cordova run android
   ```
