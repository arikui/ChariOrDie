#pragma strict

var chari : GameObject ;
var speed : float = 0.8;

private var chariScript : ChariScript;

private var toolbarInt : int;
private var toolbarRect : Rect = Rect (25, 25, 250, 30);
private var toolbarStrings : String[] = [
	"Camera",
	"Light",
	"Speed",
	"Reset"
];

function Start() {
	chariScript = chari.GetComponent(ChariScript) as ChariScript;
}

private function showReset(){
	GUI.Box (Rect (340, 10, 100, 60), "wow crash!");
	
	if (GUI.Button (Rect (350, 40, 80, 20), "Reset")) {
		chariScript.Restart();
	}
}
