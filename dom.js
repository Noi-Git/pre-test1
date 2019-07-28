<html>

<body>
  Animals:
  <ol id="ol1">
    <li>Frog</li>
    <li>Dog</li>
    <li>Bunny</li>
  </ol>
  <div id="id1">
    <p>This is the text in div id1</p>
    <p>Hope you enjoy my HTML</p>
  </div>
  <p id="id2">Here's some text in a paragraph</p>
  <div class="myClass">I love learning about HTML and JavaScript</div>
  <p class="myClass">Coding is fun</p>
  <button id="button1" onclick="display_alert()">Button 1</button>
  <br />
  <br />
  <button id="button2">Button 2</button>
</body>

<script type="text/javascript">

  // Exercise 1: Select the element with id "id2" and change the text inside
  //it to "Here's some new text" 
  document.getElementById("id2").innerHTML = "Here's some new text";

  // Exercise 2: Select the element with id "id1"
  //and make the text inside it green. 
  document.getElementById("id1").style.color = "green";
  
  // Exercise 3: Select the elements that
  // have the class "myClass".console.log the output. 

  console.log(document.getElementsByClassName("myClass"))
  
  // Exercise 4: Select the
  // children of the element with id "id1".console.log the output. 
  console.log(document.querySelector("#id1 p").innerHTML)
  
  // Exercise 5: Select all list items on the page.console.log the output. 
  console.log(document.querySelectorAll('li'))
    
  // Exercise 6: Use JavaScript to find the * number * of list items on the page.console.log
  // the output. 
  console.log(document.querySelectorAll('li').length)
  
  // Exercise 7: Using JavaScript, create a list item and add it
  // to the end of the ordered list. 
  let node = document.createElement("li");                
  let textnode = document.createTextNode("tiger");        
  node.appendChild(textnode);   
  document.getElementById("ol1").appendChild(node);
  
  
  // Exercise 8: Using JavaScript, make it so
  // that when button1 is clicked, // an alert pops up saying "Hi from
  // Techtonica". 
  function display_alert() {
    alert("Hi from Techtonica");
  }
    
  // Exercise 9: In your own words, write a few sentences
  // explaining what the DOM is.Write your answer in a comment below: 
  // DOM is the space inside the web browser that allow developer to interact with by using programing language
  
  // The next two exercises combine the DOM with other JavaScript you've learned. Try
  // them for an extra challenge! 
  
  // Exercise 10: Select the elements with the
    // class "myClass" and update the text inside each of them to end with "!" //
    // Hint: To operate on multiple elements, you can use a loop. 
    // ---- not working ---
  const elements = document.getElementsByClassName(myClass).elements;

  for (let i = 0; i <= elements.lenght; i++) {
    document.getElementsByClassName(myClass).innerHTML = "!";
  }
    
    
  // Exercise 11:
  // Make it so when the button2 is clicked, // the children of the element with
    // id "id1" each have their text replaced with a random number 1 - 100 // How was
  // this exercise(easy, hard, fun, confusing) ? // What references did you use
    // to help ? // Please put your answers in a comment below: //
  
</script>

</html>;