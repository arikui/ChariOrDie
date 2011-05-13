var ownerScript : GUIScript;
var region : Rect = Rect(230, 10, 100, 120);

var buttonRect1 : Rect = Rect(240, 40, 80, 20);
var buttonRect2 : Rect = Rect(240, 70, 80, 20);
var buttonRect3 : Rect = Rect(240, 100, 80, 20);

var buttonName1 : String = "slow";
var buttonName2 : String = "high";
var buttonName3 : String = "kamikaze";

function OnGUI(){
	GUI.Box(region, "Speed");
	
	if (GUI.Button (buttonRect1, buttonName1)) {
		ownerScript.speed = 0.3;
	}

	// Make the second button.
	if (GUI.Button (buttonRect2, buttonName2)) {
		ownerScript.speed = 0.8;
	}
	
	if (GUI.Button (buttonRect3, buttonName3)) {
		ownerScript.speed = 2;
	}
}
