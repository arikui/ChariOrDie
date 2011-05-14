#pragma strict

var region : Rect = Rect(230, 10, 100, 120);

var buttonNames : String[] = ["slow", "high", "kamikaze"];

private var ownerScript : GUIScript;

function Start(){
	ownerScript = GetComponent(GUIScript) as GUIScript;
}

function OnGUI(){
	GUILayout.BeginArea(region);
	GUILayout.Label("Speed");
	
	if ( GUILayout.Button(buttonNames[0]) ) {
		ownerScript.speed = 0.3;
	}

	// Make the second button.
	if ( GUILayout.Button(buttonNames[1]) ) {
		ownerScript.speed = 0.8;
	}
	
	if ( GUILayout.Button(buttonNames[2]) ) {
		ownerScript.speed = 2;
	}
	
	GUILayout.EndArea();
}
