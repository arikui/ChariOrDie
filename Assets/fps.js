var updateInterval = 0.5;
private var lastInterval : double; // Last interval end time
private var frames = 0; // Frames over current interval
private var fps : float; // Current FPS

function Start(){
	frames = 0;
	lastInterval = Time.realtimeSinceStartup;
}

function OnGUI() {
	GUILayout.Label("" + fps.ToString("f2"));
}

function Update(){
	++frames;
	var timeNow = Time.realtimeSinceStartup;
	
	if( timeNow > lastInterval + updateInterval ){
		fps = frames / (timeNow - lastInterval);
		frames = 0;
		lastInterval = timeNow;
	}
}