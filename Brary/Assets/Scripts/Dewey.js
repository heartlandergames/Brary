#pragma strict
import UnityEngine.UI;

var ret : Text;
var cam : Transform;

function Start () {

}

function Update () {
    AimQuery();
}

function AimQuery()
{
    var hit : RaycastHit;
    if(Physics.Raycast(cam.position,cam.forward, hit, 10))
    {
        if(hit.collider.gameObject.tag == "BOOK")
        {
            ret.text = hit.collider.gameObject.name;
            if(Input.GetButtonDown("Fire1"))
            {
                Debug.Log(hit.collider.gameObject.GetComponent(Book).file.Name);
            }
        }
        else
        {
            ret.text = " ";
        }
    }
    else
    {
        ret.text = " ";
    }
}