import React, { useEffect } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import { v4 as uuid } from 'uuid';

export default function Call(props) {
	const unique_id = uuid();
	let small_id = unique_id.slice(0,8)
	// useEffect(() => {
	// 	const items = JSON.parse(localStorage.getItem('data'));
	// 	if (items) {
	// 		if(items.meetingid)
	// 		{
	// 		small_id = items.meetingid;
	// 		console.log("meeting id ",items.meetingid)
	// 		if(items.count==1)
	// 		{
	// 			items.count = 2;
	// 			localStorage.setItem('data', JSON.stringify(items));
	// 		}
	// 		else if(items.count == 2)
	// 		{
	// 			small_id = items.meetingid;
	// 			localStorage.removeItem('data');
	// 		}
	// 		}
	// 	}
	//   }, []);
  useEffect(() => {
    const config = {
      name: "User",
      meetingId: "milkyway",
      apiKey: "88cf6ce7-8796-408c-a5c0-3175c7c5c2d6",

      containerId: null,

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,

      chatEnabled: true,
      screenShareEnabled: true,

	//   joinScreen: {
	// 	visible: true,
	// 	title: "Chatify",
	// 	meetingUrl: "mateehCute",
	//   },
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }, []);

  return <div></div>;
}
