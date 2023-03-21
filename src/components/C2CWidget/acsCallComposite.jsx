import "./acsCallComposite.css";
import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import {
  CallComposite,
  fromFlatCommunicationIdentifier,
  useAzureCommunicationCallAdapter
} from '@azure/communication-react';
import { initializeIcons } from '@fluentui/react';
import React, { useEffect, useRef, useState } from 'react';

const DISPLAY_NAME = 'Ilya Bukshteyn';
const ACS_USER_IDS = {participantIDs: ['8:orgid:c4cc1167-cb4b-4ce4-b621-73758d904d6a'] };

initializeIcons();

const AcsCallComposite = () => {	
	const [c2cOpen, setc2cOpen] = useState(false);
	const [widgetButtonText, setwidgetButtonText] = useState("Call Agent");
	const [widgetAreaClass, setwidgetAreaClass] = useState("widgetAreaCallNone");
	const [callAdapterArgs, setCallAdapterArgs] = useState({});
	const [credential, setCredential] = useState({});

	const activateC2CWidget = () => {
		setc2cOpen(!c2cOpen);
		if(c2cOpen) {
			setwidgetButtonText("Call Agent");
			setwidgetAreaClass("widgetAreaCallNone");
		}
		else {
			setwidgetButtonText("Close");
			setwidgetAreaClass("widgetAreaCallBlock");
		}
	};

	useEffect(() => {
		const getAzureCommunicationServiceArgs = async () => {
		  let response = await getChatContext();
		  const credential = new AzureCommunicationTokenCredential(response.token);
		  setCredential(credential);
		  const callAdapterArgs = {
			userId: fromFlatCommunicationIdentifier(response.user),
			displayName: DISPLAY_NAME,
			credential,
			locator: ACS_USER_IDS
		  };
		  setCallAdapterArgs(callAdapterArgs);
		}
	
		getAzureCommunicationServiceArgs();
	  }, []);

	  const callAdapter = useAzureCommunicationCallAdapter(callAdapterArgs, undefined, leaveCall);
	  if (callAdapter) {
		return (
		<div>
			<button className="widgetButton" onClick={activateC2CWidget}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.225 0-6.287-1.438q-3.063-1.437-5.425-3.8q-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637q-.063.288-.288.513L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.338q.362-.112.712-.062l3.45.7q.35.075.575.337q.225.263.225.613v4.05q0 .45-.3.75t-.75.3Z"/></svg>
				{widgetButtonText}
		    </button>
			<div className={widgetAreaClass}>
				<CallComposite adapter={callAdapter} />
			</div>
		</div>
		);
	}
	if (credential === undefined) {
		return <h3>Failed to construct credential. Provided token is malformed.</h3>;
	}

	return(
		<div>
			<button className="widgetButton" onClick={activateC2CWidget}>{widgetButtonText}</button>
			{/* <div className={widgetAreaClass}/> */}
		</div>
	);

	async function leaveCall() {
		await callAdapter.leaveCall().catch(e => {
			console.error('Failed to leave the call', e);
		});
	}
};

async function getChatContext(){
	let response = await fetch("https://funcappacsinteropdemo.azurewebsites.net/api/function");
	let data = await response.json();
	return data;
  }

export default AcsCallComposite;