class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.right = createButton('Right');
       this.left = createButton('Left');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        //this.right.hide();
        //this.left.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        
        this.right.position(400,660);
        this.right.style('width', '100px');
        this.right.style('height', '30px');
        this.right.style('background', 'lightblue');

        this.left.position(500,660);
        this.left.style('width', '100px');
        this.left.style('height', '30px');
        this.left.style('background', 'lightblue');
        

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });
        
        this.right.mousePressed(()=>{
            player.distance -= 10
            player.update();

          })

          this.left.mousePressed(()=>{
            player.distance += 10
            player.update();

          })

        this.reset.mousePressed(() => {
            //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
            player.updateCount(0);
            game.update(0);
            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();
            this.right.hide();
            this.left.hide();
        });

    }
}