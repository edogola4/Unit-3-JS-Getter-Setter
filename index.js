// Add your Circle class here

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter for diameter
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Getter for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Setter for circumference
    set circumference(circumference) {
      this.radius = circumference / (2 * Math.PI);
    }
  
    // Getter for area
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    // Setter for area
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  // Example usage:
  const circle = new Circle(5);
  
  console.log(circle.diameter);       
  console.log(circle.circumference);  
  console.log(circle.area);           
  
  circle.diameter = 20;
  console.log(circle.radius);         
  
  circle.circumference = 31.4159;
  console.log(circle.radius);         
  
  circle.area = 78.5398;
  console.log(circle.radius);         
  

/**
 *        Explanation:
 * 
 * Constructor: Initializes the circle with a radius value.
 * 
 * Diameter:
            Getter: Calculates diameter as radius * 2.
            Setter: Sets the radius based on diameter / 2.

   Circumference: 
                  Getter: Uses the formula circumference = 𝜋 × diameter.
                  Setter : Recalculates radius using radius= circumference / 2𝜋

​ Area: 
            Getter: Uses the formula area = 𝜋 × radius^2.
            Setter: Recalculates radius using area = 𝜋 × radius^2.  
 .
 */