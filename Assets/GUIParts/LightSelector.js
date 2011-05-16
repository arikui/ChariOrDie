#pragma strict

var light1 : Light;
var light2 : Light;
var buttonNames : String[] = ["on", "off", "flicker"];
var selected : int = 0;
var showed : boolean = false;

private var region : Rect;
private var on : boolean = true;
private var flickering : boolean = false;

function Start(){
	var ownerScript : GUIScript = GetComponent(GUIScript) as GUIScript;
	region = ownerScript.panelRegion;
}

function OnGUI(){
	if( !showed ) return;
	
	GUILayout.BeginArea(region);
	selected = GUILayout.SelectionGrid(selected, buttonNames, 1);
	GUILayout.EndArea();
	
	if( !GUI.changed ) return;

switch( selected ){
	case 0:
		flickering = false;
		light1.intensity = 8;
		light2.intensity = 1;
		break;

	case 1:
		light1.intensity = 0;
		light2.intensity = 0;
		flickering = false;
		break;

	case 2:
		flickering = true;
		break;
	}
}

function Update(){
	if ( flickering ){
		if ( Time.frameCount % 5 == 0 ){
			on = !on;
			
			if ( on ){
				light1.intensity = 8;
				light2.intensity = 1;
			}else{
				light1.intensity = 0;
				light2.intensity = 0;
			}
		}
	}
}
