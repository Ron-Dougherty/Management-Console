# Managers' Monthly Report — setup guide

A phone app (installs from a web link, no app store) where each manager enters their monthly numbers, and everyone sees one shared summary on their phone, on paper, or on the wall TV.

- **Data lives in your own free Firebase database.** Nobody needs a Claude account.
- **Only people you add can see anything.** Each manager can only save their own department's report. Only you can change departments and who has access.
- **The app is hosted free on GitHub Pages**, the same way as your Dots and Boxes game.

Plan on about 30 minutes for steps 1–6. You only do this once.

---

## 1. Create a new Firebase project

Use a **new** project. Don't reuse the Dots and Boxes one, because step 2 replaces the database rules.

1. Go to <https://console.firebase.google.com> and click **Create a project**.
   - Tip: if your company has a Google account, signing in with it means the company owns the data.
2. Name it something like `managers-report`. You can turn Google Analytics off. Click **Create project**.
3. Stay on the free **Spark** plan. Don't add billing.

## 2. Turn on the database and paste in the rules

1. In the left menu: **Build → Realtime Database → Create Database**.
2. Pick a location (United States), choose **Start in locked mode**, then click **Enable**.
3. Open the **Rules** tab and delete everything in the box.
4. Open `database.rules.json` from this folder in Notepad and copy all of it into the box.
5. Your email (ron@owenscomfortsolution.com) is already filled in all 4 places, so there's nothing to change.
6. Click **Publish**.

## 3. Turn on email sign-in

1. In the left menu: **Build → Authentication → Get started**.
2. On the **Sign-in method** tab, click **Email/Password**, switch on the first toggle (leave "Email link" off), and click **Save**.

## 4. Connect the app to your project (`config.js`) — already done

`config.js` already has your Firebase settings, your admin email and "Owens Companies". Only redo this step if you ever start a different Firebase project.

1. Click the gear next to **Project Overview → Project settings**.
2. Under **Your apps**, click the **web** icon `</>`. Use the nickname `Managers Report`, leave Hosting unchecked, and click **Register app**.
3. Firebase shows a block of code with a `firebaseConfig` section. Copy each value into the matching line in `config.js`:
   `apiKey`, `authDomain`, `databaseURL`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`.
   - If `databaseURL` isn't in the block, copy it from the top of the Realtime Database **Data** tab. It looks like `https://managers-report-default-rtdb.firebaseio.com`.
4. In `config.js`, set `adminEmail` to the **same email** you used in step 2, all lowercase.
5. Optional: put your company name in `companyName`.
6. Save the file.

## 5. Put it on GitHub Pages

1. On <https://github.com>, create a **new repository**, for example `managers-report`. It must be **Public** for free Pages.
   - Public means the app's *code* is public. Your *data* stays protected by sign-in and the database rules.
2. Click **Add file → Upload files** and upload **everything in this folder**. Click **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment," choose **Deploy from a branch**, then **main** and **/(root)**, and click **Save**.
4. After a minute or two, your link appears at the top of that page, like `https://YOUR-USERNAME.github.io/managers-report/`.

## 6. Tell Firebase about your web address

In Firebase: **Authentication → Settings → Authorized domains → Add domain**, then enter `YOUR-USERNAME.github.io`. This keeps password-reset emails working smoothly.

## 7. Set up the app (you, the administrator)

1. Open your link and tap **First time here? Set up your password**. Use your admin email.
2. You'll see sample numbers and a **Finish setup** banner. Open **Setup**.
3. Check the departments. These seven are filled in to start:
   - Plumbing
   - Plumbing - New Construction
   - HVAC
   - HVAC - New Construction
   - Electrical
   - Septic
   - Sales
4. Type each manager's **name and email**. If one person runs two departments, list their email on both. If two people share a department, separate their emails with a comma.
5. Under **Others who can view**, add anyone who should only look: owners, office staff, and an account for the wall TV.
6. Tap **Save setup**.

## 8. Invite the managers

Setup has a **Copy link** button. Send the link to each manager with these steps:

1. Open the link and tap **First time here? Set up your password**.
2. Use the email you were given and choose a password.
3. Install it:
   - **iPhone:** open the link in **Safari**, tap **Share**, then **Add to Home Screen**.
   - **Android:** in **Chrome**, tap the **⋮** menu, then **Install app** (or **Add to Home screen**).
4. Each month, open the app, tap **Enter report**, fill it in, and tap **Save report**. The month at the top starts on last month.

## 9. The wall TV

On the computer or smart TV browser that drives the monitor:

1. Open the link and sign in with the viewer email you added for the TV.
2. Tap **TV mode**. The slides rotate every 20 seconds and update live as managers save.
   - You can also add `#tv` to the end of the link so it opens straight into TV mode.

---

## Day-to-day

- **Printing:** On the Summary, tap **Print / Save PDF**. It prints landscape. On a phone, choose "Save as PDF" or a printer.
- **Excel / Google Sheets:** **Download for Excel** saves a spreadsheet file of the month that opens in either one.
- **Someone leaves:** remove their email in Setup and save. Their access stops right away. You can also delete their account under Firebase → Authentication → Users.
- **Forgot password:** on the sign-in screen, type your email and tap **Forgot password?**.
- **Backups:** each month's **Download for Excel** is a good record. For a full copy, go to Firebase → Realtime Database → **Data** tab → **⋮** menu → **Export JSON**.
- **Changes to the app:** upload the new files to the same GitHub repository. Phones pick up the change the next time the app opens.

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | The app |
| `config.js` | **Your settings**, the only file you edit |
| `database.rules.json` | Who can see and change what (pasted into Firebase in step 2) |
| `manifest.webmanifest`, `sw.js` | Let phones install the app to the home screen |
| `icon-*.png`, `apple-touch-icon.png` | Home-screen icons |
