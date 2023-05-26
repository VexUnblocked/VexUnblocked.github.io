/**
{
  "name": "SDK_GDPR_TRACKING",
  "message": "Not set",
  "status": "warning"
}

{
    "name": "SDK_GDPR_TARGETING",
    "message": "Not set",
    "status": "warning"
}

{
    "name": "SDK_GDPR_THIRD_PARTY",
    "message": "Not set",
    "status": "warning"
}

{
    "name": "SDK_READY",
    "message": "Everything is ready.",
    "status": "success"
}

{
    "name": "SDK_ERROR",
    "message": "Blocked:1: patch/js/null.js?https://www.google-analytics.com/analytics.js",
    "status": "error"
}

*/

gdsdk= new function () {
  this.cancelAd= function () {

  };

  this.getSession= function () {

  };

  this.showAd= function (adType) {
    console.log("--gdsdk--showAd--", adType, arguments);
    if (adType== "interstitial") {
      window.GD_OPTIONS.onEvent({
        name: "SDK_GAME_START",
        message: "No Message",
      });  
    } else if (adType== "rewarded") {
      window.open("https://ads.games235.com/", "ads_games235");
      window.GD_OPTIONS.onEvent({
        name: "SDK_REWARDED_WATCH_COMPLETE",
        message: "No Message",
      });
    }
    
    return new Promise((resolve, reject)=> {
      resolve("OK");
    });
  };

  this.showBanner= function () {
    console.log("--gdsdk--showBanner--", arguments);
  };

  this.openConsole= function () {
    console.log("--gdsdk--openConsole--", arguments);
  };

  this.Interstitial= function () {
    console.log("--gdsdk--Interstitial--", arguments);
  };

  this.AdType= {
    "Rewarded": "rewarded",
    "Interstitial": "interstitial",
    "Preroll": "interstitial",
    "Midroll": "interstitial",
    "Display": "display"
  };

  this.leaderboard= {
    "addScore": function () {

    },
    "show": function () {

    }
  };

  this.preloadAd= function () {
    console.log("--gdsdk--preloadAd--");
    window.GD_OPTIONS.onEvent({
      "name": "SDK_READY",
      "message": "Everything is ready.",
      "status": "success"
    });
    return new Promise((resolve, reject)=> {
      resolve("OK");
    });
  }
};
