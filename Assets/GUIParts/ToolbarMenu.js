#pragma strict

var selected : int = 0;

private var ownerScript : GUIScript;
private var chari : ChariScript;
private var cameraUI : CameraSelector;
private var lightUI : LightSelector;
private var speedUI : SpeedSelector;

private var toolbarRect : Rect = Rect (25, 25, 250, 30);
private var toolbarStrings : String[] = [
	"Camera",
	"Light",
	"Speed",
	"Reset"
];

function Start(){
	ownerScript = GetComponent(GUIScript) as GUIScript;
	chari = ownerScript.chari.GetComponent(ChariScript) as ChariScript;
	cameraUI = GetComponent(CameraSelector) as CameraSelector;
	lightUI = GetComponent(LightSelector) as LightSelector;
	speedUI = GetComponent(SpeedSelector) as SpeedSelector;
}

function OnGUI(){
	var _selected : int = GUILayout.Toolbar(selected, toolbarStrings);
	
	if( _selected == 0 ){
		cameraUI.showed = true;
		lightUI.showed = false;
		speedUI.showed = false;
		selected = _selected;
	}else if( _selected == 1 ){
		cameraUI.showed = false;
		lightUI.showed = true;
		speedUI.showed = false;
		selected = _selected;
	}else if( _selected == 2 ){
		cameraUI.showed = false;
		lightUI.showed = false;
		speedUI.showed = true;
		selected = _selected;
	}else if( _selected == 3 ){
		chari.Restart();
	}
}
