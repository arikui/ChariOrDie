#pragma strict

var region : Rect;
var buttonNames : String[] = ["slow", "high", "kamikaze"];
var showed : boolean = false;

private var ownerScript : GUIScript;
private var chariScript : ChariScript;
private var sliderRect : Rect = Rect(0, 0, 100, 30);

function Start(){
	ownerScript = GetComponent(GUIScript) as GUIScript;
	chariScript = ownerScript.chari.GetComponent(ChariScript) as ChariScript;
	region = ownerScript.panelRegion;
}

function OnGUI(){
	if( !showed ) return;
	
	GUILayout.BeginArea(region);
	chariScript.speed = GUI.HorizontalSlider(sliderRect, chariScript.speed, 0.0, 3.0);
	GUILayout.EndArea();
	
	if( GUI.changed ) return;
}
