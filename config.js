// ============================================================================
//  Managers' Monthly Report — settings
//  This is the ONLY file you need to edit. See README.md, steps 3 and 4.
// ============================================================================
window.MMR_CONFIG = {

  // 1) Paste your Firebase web app settings here (Firebase console ->
  //    Project settings -> Your apps -> SDK setup and configuration -> Config).
  firebase: {
    apiKey: "AIzaSyCqyxSY06KstYZx5psoH7WeLs4D9a8xXAg",
    authDomain: "management-console-5f0f4.firebaseapp.com",
    databaseURL: "https://management-console-5f0f4-default-rtdb.firebaseio.com",
    projectId: "management-console-5f0f4",
    storageBucket: "management-console-5f0f4.firebasestorage.app",
    messagingSenderId: "875757739994",
    appId: "1:875757739994:web:6be8e963f80e000d716ae3"
  },

  // 2) Your email address (all lowercase). This account can open Setup,
  //    add managers and change departments. Use the SAME email in the
  //    database rules (database.rules.json).
  adminEmail: "ron@owenscomfortsolution.com",

  // 3) Optional: your company name, shown at the top and on printouts.
  //    (You can also change it later in the app under Setup.)
  companyName: "Owens Companies"
};
