#pragma strict

var region : Rect = Rect(230, 10, 100, 120);
var buttonNames : String[] = ["slow", "high", "kamikaze"];

private var ownerScript : GUIScript;
private var chariScript : ChariScript;
private var sliderRect : Rect = Rect(0, 25, 100, 30);

function Start(){
	ownerScript = GetComponent(GUIScript) as GUIScript;
	chariScript = ownerScript.chari.GetComponent(ChariScript) as ChariScript;
}

function OnGUI(){
	GUILayout.BeginArea(region);
	GUILayout.Label("Speed");
	chariScript.speed = GUI.HorizontalSlider(sliderRect, chariScript.speed, 0.0, 3.0);
	GUILayout.EndArea();
}
