#pragma strict

var camera1 : GameObject;
var camera2 : GameObject;
var camera3 : GameObject;
var region : Rect = Rect(10, 10, 100, 120);
var buttonNames : String[] = ["1", "2", "3"];

private var audioListener1 : AudioListener;
private var audioListener2 : AudioListener;
private var audioListener3 : AudioListener;

function Start() {
	audioListener1 = camera1.GetComponent(AudioListener) as AudioListener;
	audioListener2 = camera2.GetComponent(AudioListener) as AudioListener;
	audioListener3 = camera3.GetComponent(AudioListener) as AudioListener;
}

function OnGUI(){
	GUILayout.BeginArea(region);
	GUILayout.Label("Camera");
	
	if ( GUILayout.Button(buttonNames[0]) ) {
		camera1.camera.enabled = true;
		audioListener1.enabled = true;
		camera2.camera.enabled = false;
		audioListener2.enabled = false;
		camera3.camera.enabled = false;
		audioListener3.enabled = false;
	}

	if ( GUILayout.Button(buttonNames[1]) ) {
		camera1.camera.enabled = false;
		audioListener1.enabled = false;
        camera2.camera.enabled = true;
		audioListener2.enabled = true;
		camera3.camera.enabled = false;
		audioListener3.enabled = false;
	}
	
	if ( GUILayout.Button(buttonNames[2]) ) {
		camera1.camera.enabled = false;
		audioListener1.enabled = false;
        camera2.camera.enabled = false;
		audioListener2.enabled = false;
		camera3.camera.enabled = true;
		audioListener3.enabled = true;
	}
	
	GUILayout.EndArea();
}
