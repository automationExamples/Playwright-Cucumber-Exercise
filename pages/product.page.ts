import { Page } from "@playwright/test"
import { click, getAllElements, selectElementFromDropDown } from "../webUtils";

export class Product {
    private readonly page: Page
    private readonly addToCartBackpack: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly addToCartBikeLight: string = 'button[id=add-to-cart-sauce-labs-bike-light]'
    private readonly addToCartBoltTShirt: string = 'button[id="add-to-cart-sauce-labs-bolt-t-shirt"]'
    private readonly addToCartFleeceJacket: string = 'button[id="add-to-cart-sauce-labs-fleece-jacket]'
    private readonly addToCartOnesie: string = 'button[id="add-to-cart-sauce-labs-onesie"]'
    private readonly addToCartTShirtRed: string = 'button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    private readonly shoppingCartLink: string = 'a[data-test="shopping-cart-link"]'
    private readonly inventoryItemName: string = 'div[data-test="inventory-item-name"]'
    private readonly inventoryItemPrice: string = 'div[data-test="inventory-item-price"]'
    private readonly sortSelect: string = 'select[data-test="product-sort-container"]'
    private readonly menuButton: string = 'button[id="react-burger-menu-btn"]'
    private readonly logoutLink: string = 'a[id="logout_sidebar_link"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await click(this.page, this.addToCartBackpack)
    }

    public async addBikeLightToCart() {
        await click(this.page, this.addToCartBikeLight)
    }

    public async addBoltTShirtToCart() {
        await click(this.page, this.addToCartBoltTShirt)
    }

    public async addFleeceJacketToCart() {
        await click(this.page, this.addToCartFleeceJacket)
    }

    public async addOnesieToCart() {
        await click(this.page, this.addToCartOnesie)
    }

    public async addTShirtRedToCart() {
        await click(this.page, this.addToCartTShirtRed)
    }

    public async navigateToShoppingCart() {
        await click(this.page, this.shoppingCartLink)
    }

    public async addItemToCart(item: string) {
        switch (item) {
            case 'backpack':
                await this.addBackPackToCart()
                break;
            case 'bike light':
                await this.addBikeLightToCart()
                break;
            case 'bolt t-shirt':
                await this.addBoltTShirtToCart()
                break;
            case 'fleece jacket':
                await this.addFleeceJacketToCart()
                break;
            case 'onesie':
                await this.addOnesieToCart()
                break;
            case 't-shirt red':
                await this.addTShirtRedToCart()
                break;
            default:
                console.log('Invalid item')
        }
    }

    public async sortItems(sortBy: string) {
        await selectElementFromDropDown(this.page, this.sortSelect, sortBy)
    }

    public async inventoryData() {
        const inventoryData: { name: string, price: number }[] = [];
        const inventoryItems = await getAllElements(this.page, this.inventoryItemName);
        const inventoryPrices = await getAllElements(this.page, this.inventoryItemPrice);
        
        for (let i = 0; i < inventoryItems.length; i++) {
            const itemName = await inventoryItems[i].innerText();
            console.log('Item Name:', itemName);
            let itemPriceText = await inventoryPrices[i].innerText();
            console.log('Item Price:', itemPriceText);
            // Remove all non-numeric characters from the price string
            itemPriceText = itemPriceText.replace(/[^0-9.-]+/g, '');
            const itemPrice = parseFloat(itemPriceText);
            inventoryData.push({ name: itemName, price: itemPrice });
        }
        return inventoryData;
    }

    public async openMenu() {
        await click(this.page, this.menuButton)
    }

    public async logout() {
        await this.openMenu()
        await click(this.page, this.logoutLink)
    }



}