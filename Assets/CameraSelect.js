var camera1 : GameObject;
var camera2 : GameObject;
var camera3 : GameObject;

var region : Rect = Rect(10, 10, 100, 120);

var buttonRect1 : Rect = Rect(20, 40, 80, 20);
var buttonRect2 : Rect = Rect(20, 70, 80, 20);
var buttonRect3 : Rect = Rect(20, 100, 80, 20);

var buttonName1 : String = "1";
var buttonName2 : String = "2";
var buttonName3 : String = "3";

private var audioListener1 : AudioListener;
private var audioListener2 : AudioListener;
private var audioListener3 : AudioListener;

function Start() {
	audioListener1 = camera1.GetComponent(AudioListener);
	audioListener2 = camera2.GetComponent(AudioListener);
	audioListener3 = camera3.GetComponent(AudioListener);
}

function OnGUI(){
	// Make a background box
	GUI.Box(region, "Camera");

	if (GUI.Button(buttonRect1, buttonName1)) {
		camera1.camera.enabled = true;
		audioListener1.enabled = true;
		camera2.camera.enabled = false;
		audioListener2.enabled = false;
		camera3.camera.enabled = false;
		audioListener3.enabled = false;
	}

	if (GUI.Button(buttonRect2, buttonName2)) {
		camera1.camera.enabled = false;
		audioListener1.enabled = false;
        camera2.camera.enabled = true;
		audioListener2.enabled = true;
		camera3.camera.enabled = false;
		audioListener3.enabled = false;
	}
	
	if (GUI.Button(buttonRect3, buttonName3)) {
		camera1.camera.enabled = false;
		audioListener1.enabled = false;
        camera2.camera.enabled = false;
		audioListener2.enabled = false;
		camera3.camera.enabled = true;
		audioListener3.enabled = true;
	}	
}
