import { resolve } from "path";

async function orderingIngredient (): Promise <string> {
    return  new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Ingredients ordered and delivered');
        }, 3000);
    }); 
}
async function prepareBakingTray (): Promise <string> {
    return new Promise((resolve)=>{
        setTimeout(() => {
           resolve('Baking tray prepared') 
        }, 1000);
    });
}
async function backBrownies (): Promise <string> {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve('Browny back to perfection')
        }, 4000);
    });
}
async function makeBrowniesWithOrderedIngredients(){
    try {
        console.log('start the brownies_Making process.......');
        const orderResult = await orderingIngredient();
        console.log(orderResult);
        const trayResult = await prepareBakingTray();
        console.log(trayResult);
        const backResult = await backBrownies();
        console.log(backResult);
        console.log('Brownies are ready to Enjoy!');
    } catch (error){
        console.error('An error occurred:,', error);
    }
}
makeBrowniesWithOrderedIngredients()



















