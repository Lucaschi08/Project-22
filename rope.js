class rope{
	constructor(body1,body2, pointA, pointB)
	{

	//create rope constraint here
		this.pointA=pointA;
		this.pointB=pointB;

		var options={
			bodyA: body1,
			bodyB: body2,
			pointB:{x:this.pointA, y:this.pointB}
		}
	}

display()
    //create display() here 
{
 var pointA=this.rope.bodyA.position;
 var pointB=this.rope.body.position;

 strokeWeight(2);
 line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y);
 
}
}
