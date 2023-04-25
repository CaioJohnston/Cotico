import React from 'react';
import { Dimensions, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CaptureButton from './CaptureButton.js'

export default class Scanner extends React.Component {

	constructor(props){
		super(props);
        this.state = { 
			identifedAs: '',
			loading: false
		}
    }

    takePicture = async function(){
		
		if (this.camera) {

			this.camera.pausePreview();
            
			this.setState((previousState, props) => ({
				loading: true
			}));
			
			const options = {
                base64: true
            };
			
			const data = await this.camera.takePictureAsync(options)
			
			this.identifyImage(data.base64);
		}
	}

	identifyImage(imageData){

		const Clarifai = require('clarifai');

		const app = new Clarifai.App({
			apiKey: 'Your API key'
		});

		app.models.predict(Clarifai.GENERAL_MODEL, {base64: imageData})
			.then((response) => this.displayAnswer(response.outputs[0].data.concepts[0].name)
			.catch((err) => alert(err))
		);
	}

	displayAnswer(identifiedImage){

		this.setState((prevState, props) => ({
			identifedAs:identifiedImage,
			loading:false
		}));

		Alert.alert(
			this.state.identifedAs,
			'',
			{ cancelable: false }
		  )

		this.camera.resumePreview();
	}
    
	render() {
		return (
            <RNCamera ref={ref => {this.camera = ref;}} style={styles.preview}>
            <ActivityIndicator size="large" style={styles.loadingIndicator} color="#fff" animating={this.state.loading}/>
                <CaptureButton buttonDisabled={this.state.loading} onClick={this.takePicture.bind(this)}/>
            </RNCamera>
		);
	}
}

const styles = StyleSheet.create({
    preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
	},
	loadingIndicator: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});