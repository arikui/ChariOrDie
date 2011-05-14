#pragma strict

var light1 : Light;
var light2 : Light;
var region : Rect = Rect(120, 10, 100, 120);
var buttonNames : String[] = ["on", "off", "flicker"];

private var on : boolean = true;
private var flickering : boolean = false;

function OnGUI(){
	GUILayout.BeginArea(region);
	GUILayout.Label("Light");
	
	if ( GUILayout.Button(buttonNames[0]) ) {
		flickering = false;
		light1.intensity = 8;
		light2.intensity = 1;
	}

	// Make the second button.
	if ( GUILayout.Button(buttonNames[1]) ) {
		light1.intensity = 0;
		light2.intensity = 0;
		flickering = false;
	}
	
	if ( GUILayout.Button(buttonNames[2]) ) {
		flickering = true;
	}
	
	GUILayout.EndArea();
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
