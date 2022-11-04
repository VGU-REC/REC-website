// Just for testing not implement
import sdasda, { k } from "./queryStatements";
async function postFakeData(num: number) {
  let data = {
    title: "this is a title ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus convallis porta. Aenean quis iaculis dolor. Integer viverra quam eu risus pellentesque malesuada. Integer nisl nisi, iaculis sit amet placerat sit amet, interdum et tellus. Etiam congue viverra bibendum. Donec lacus libero, euismod a nisl ut, pellentesque finibus est. Ut a massa bibendum, venenatis ante ac, semper metus. Morbi felis lacus, vestibulum vel mi eu, efficitur dapibus sapien.",
    imagePath: link1,
    date: new Date(),
  };
  data.title += num;
  const response = await fetch("http://localhost:3001/achievement", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const link1 =
  "https://lh3.googleusercontent.com/pw/AL9nZEUMEa8xnHQFu2NZmsWjtxyT4cpIRNUva6NS926-SzZ_6cwXTIsTarXolWH32hoCgw1JzCIdNhe5-O7uomiAYrMUzo-C4Cwhq-9lct9P83tk8aIXYE7kKmtIWJh977H7PcAkoHo9sFyvY5-VW_4cQbCP=w1425-h802-no?authuser=0";
const link2 =
  "https://lh3.googleusercontent.com/ZeqguZeIWEyDhNDfzi4ZYsqvSy5N7IC4GKHUb0-k3gS2-kduDsPc9NtEED3nlednp-s6wkvzDkElHGrhx2R_0Pyk3Zd_vd7X6AdJcWvBLZEiQ-5KCbtjSXjWjUMP61cjkzjfAN5NfZO2zqkN13ewfL7GsV_fQdptiSjIYwNr-aRtlY-YCf_4upQvc77-SeTKHxWENuLKC6EeU-t4Sm4nIIqk3v2WIFT8U5xXwLLac2U1ObS7CHF_waRj5hok9SKWMS9ItAG4vbagj_w3O7I8dHf3L3d0G1_bVas37BgQSKB7Y6rPjAYM_d1xn1nQjMrzLHV9E9AoF8U71P79vyyS7VGK6rTy08ji2klRxdD7jsgi0NCwQ-a0V93N9KY0Bkc0DCTw6CLWLbjPmlcEcL8FDX5QjGK4RFnn6RD-nNCdj4v5mV0_TQxhjPjzclfYQDZLw09xXX8VOjStagxT1RdDhAWglm_YUz1xDprzexyZu4BJW3txQugKa0qi8fYJ6Ppwr7fpMPm_ZG3h8iYDoS_U26i6Dd3fpyR-W0R5XOTFufRL795Tz_ML1gUNnRFDZ86tDI_0X60jfsN5SAYA-ZKxFvB9dp9oBc3T9SMUp6jEfmY6IqcNT555aFT9Aub1vUrBvxL0dfR7qFahE2tfYUQcyTTXbgYfz0KuyaR-u7J664UmIwgrBSCmJ_9mg7fvBtOy7I5ssFBCI2KuFB9lduc6iEoTP6gfOHIeIEPKaFzSDhjKraQNOD8eNuf9Ecy0aAFEP1fmOPnElycynD0Z4fetVaoG1sYDnxtJ40ROd2k6Sije49i6DnBvgrbmy2px4UrUrepG1rKKGLh6OMgCDK8B5jb2fHAV_IwyTtfXU77u=w559-h992-no?authuser=0";

async function setUp(num: number) {
  let promises = [];
  for (let i = 0; i < num; i++) {
    promises.push(postFakeData(i));
  }
  await Promise.all(promises);
  console.log("done");
}

setUp(50);
