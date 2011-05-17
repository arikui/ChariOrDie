#pragma strict

var other : GUIScript;
var startPosition : Vector3 ;
var friction = 0;
var speed : double = 0.8;

private var myTransform : Transform;

function Start () {
	myTransform = transform;
    // Find the OtherScript which is attached to any game object in the scene.
    other = FindObjectOfType(GUIScript) as GUIScript;
	startPosition = myTransform.position;
}

function Update() {
    myTransform.Rotate(0, -speed, 0);
    myTransform.Translate(speed, 0, 0);
	
}

function Restart() {
	myTransform.position = startPosition;
	myTransform.rotation = Quaternion(0, 180, 0, 0);
}
