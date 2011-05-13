var light1 : Light;
var light2 : Light;

var region : Rect = Rect(120, 10, 100, 120);

var buttonRect1 : Rect = Rect(130, 40, 80, 20);
var buttonRect2 : Rect = Rect(130, 70, 80, 20);
var buttonRect3 : Rect = Rect(130, 100, 80, 20);

var buttonName1 : String = "on";
var buttonName2 : String = "off";
var buttonName3 : String = "flicker";

private var on : boolean = true;
private var flickering : boolean = false;

function OnGUI(){
	GUI.Box(region, "Light");
	
	if (GUI.Button (buttonRect1, buttonName1)) {
		flickering = false;
		light1.intensity = 8;
		light2.intensity = 1;
	}

	// Make the second button.
	if (GUI.Button (buttonRect2, buttonName2)) {
		light1.intensity = 0;
		light2.intensity = 0;
		flickering = false;
	}
	
	if (GUI.Button (buttonRect3, buttonName3)) {
		flickering = true;
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
