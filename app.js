"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function orderingIngredient() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Ingredients ordered and delivered');
            }, 3000);
        });
    });
}
function prepareBakingTray() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Baking tray prepared');
            }, 1000);
        });
    });
}
function backBrownies() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Browny back to perfection');
            }, 4000);
        });
    });
}
function makeBrowniesWithOrderedIngredients() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('start the brownies_Making process.......');
            const orderResult = yield orderingIngredient();
            console.log(orderResult);
            const trayResult = yield prepareBakingTray();
            console.log(trayResult);
            const backResult = yield backBrownies();
            console.log(backResult);
            console.log('Brownies are ready to Enjoy!');
        }
        catch (error) {
            console.error('An error occurred:,', error);
        }
    });
}
makeBrowniesWithOrderedIngredients();
