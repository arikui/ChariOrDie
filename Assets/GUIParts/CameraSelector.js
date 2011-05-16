#pragma strict

var camera1 : GameObject;
var camera2 : GameObject;
var camera3 : GameObject;
var region : Rect;
var buttonNames : String[] = ["1", "2", "3"];
var selected : int = 0;
var showed : boolean = false;

private var audioListener1 : AudioListener;
private var audioListener2 : AudioListener;
private var audioListener3 : AudioListener;

function Start() {
	var ownerScript : GUIScript = GetComponent(GUIScript) as GUIScript;
	region = ownerScript.panelRegion;
	audioListener1 = camera1.GetComponent(AudioListener) as AudioListener;
	audioListener2 = camera2.GetComponent(AudioListener) as AudioListener;
	audioListener3 = camera3.GetComponent(AudioListener) as AudioListener;
}

function OnGUI(){
	if( !showed ) return;
	
	GUILayout.BeginArea(region);
	selected = GUILayout.SelectionGrid(selected, buttonNames, 1);
	GUILayout.EndArea();
	
	if( !GUI.changed ) return;
	
	switch( selected ){
	case 0:
		camera1.camera.enabled = true;
		audioListener1.enabled = true;
		camera2.camera.enabled = false;
		audioListener2.enabled = false;
		camera3.camera.enabled = false;
		audioListener3.enabled = false;
		break;
		
	case 1:
		camera1.camera.enabled = false;
		audioListener1.enabled = false;
		camera2.camera.enabled = true;
		audioListener2.enabled = true;
		camera3.camera.enabled = false;
		audioListener3.enabled = false;
		break;
	
	case 2:
		camera1.camera.enabled = false;
		audioListener1.enabled = false;
		camera2.camera.enabled = false;
		audioListener2.enabled = false;
		camera3.camera.enabled = true;
		audioListener3.enabled = true;
		break;
	}
}
