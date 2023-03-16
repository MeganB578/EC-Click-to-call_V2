import "./acsCallComposite.css";
import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import {
  CallComposite,
  fromFlatCommunicationIdentifier,
  useAzureCommunicationCallAdapter
} from '@azure/communication-react';
import { initializeIcons } from '@fluentui/react';
import React, { useEffect, useRef, useState } from 'react';

const DISPLAY_NAME = 'Demo User';
const ACS_USER_IDS = {participantIDs: ['8:orgid:c4cc1167-cb4b-4ce4-b621-73758d904d6a'] };

initializeIcons();

const AcsCallComposite = () => {	
	const [c2cOpen, setc2cOpen] = useState(false);
	const [widgetButtonText, setwidgetButtonText] = useState("Call");
	const [widgetAreaClass, setwidgetAreaClass] = useState("widgetAreaCallNone");
	const [callAdapterArgs, setCallAdapterArgs] = useState({});
	const [credential, setCredential] = useState({});

	const activateC2CWidget = () => {
		setc2cOpen(!c2cOpen);
		if(c2cOpen) {
			setwidgetButtonText("Call");
			setwidgetAreaClass("widgetAreaCallNone")
		}
		else {
			setwidgetButtonText("X");
			setwidgetAreaClass("widgetAreaCallBlock")
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

	  const callAdapter = useAzureCommunicationCallAdapter(callAdapterArgs);
	  if (callAdapter) {
		return (
		<div>
			<button className="widgetButton" onClick={activateC2CWidget}>{widgetButtonText}</button>
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

};

async function getChatContext(){
	let response = await fetch("https://funcappacsinteropdemo.azurewebsites.net/api/function");
	let data = await response.json();
	return data;
  }


  export default AcsCallComposite;