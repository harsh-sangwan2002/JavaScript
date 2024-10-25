let ladder = {
    step:0,
    up:function(){
        this.step++;
        return this;
    },
    down:function(){
        this.step--;
        return this;
    },
    showStep:function(){ // shows your current step
        console.log(this.step);
        return this;
    }
}

ladder.up().up().up().down().showStep().up().up().showStep();