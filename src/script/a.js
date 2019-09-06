class G
{
    constructor()
    {
        this.a = 1;
        this.b = 2;
    }

    con() {
        console.log(this.a);
    }

}
function a()
{
    alert("this is a");
}



var A = {
    Bar:function()
    {
        console.log(2);

    }
}

function Bar(x = 2,y = x)
{
    console.log(x);
}


module.exports= function ()
{
    
    var g = new G();
    G.prototype.gg = ()=>{console.log('dfdf')};
    g.con();
    g.gg();
    var promis1 = new Promise(function(resolve,reject){

        setTimeout(() => {
            resolve("resolve");
        }, 2000);

       
    })
    var promis2 = new Promise(function(resolve,reject){

        setTimeout(() => {
            reject(promis1);
        }, 1000);

       
    })
    
    promis2.then(reject=>{

    }).catch(error => {
        console.log(error);
    });

    

}
