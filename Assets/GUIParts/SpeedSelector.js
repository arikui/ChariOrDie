#pragma strict

var region : Rect = Rect(230, 10, 100, 120);
var buttonNames : String[] = ["slow", "high", "kamikaze"];

private var ownerScript : GUIScript;
private var chariScript : ChariScript;

function Start(){
	ownerScript = GetComponent(GUIScript) as GUIScript;
	chariScript = ownerScript.chari.GetComponent(ChariScript) as ChariScript;
}

function OnGUI(){
	GUILayout.BeginArea(region);
	GUILayout.Label("Speed");
	
	if ( GUILayout.Button(buttonNames[0]) ) {
		chariScript.speed = 0.3;
	}

	if ( GUILayout.Button(buttonNames[1]) ) {
		chariScript.speed = 0.8;
	}
	
	if ( GUILayout.Button(buttonNames[2]) ) {
		chariScript.speed = 2;
	}
	
	GUILayout.EndArea();
	//print(chari.speed);
}
