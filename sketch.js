const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    
    ground = new Ground(600,height,1200,20);
  
}

function draw(){
    background("BLACK")
    strokeWeight(4);
 
   
}
