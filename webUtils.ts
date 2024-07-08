import { ElementHandle, Locator, Page } from "playwright";
import Log from "./Log";

export async function goToUrl(page: Page, url: string) {
    Log.info(`Navigating to the url : ${url}`);
    await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
    Log.info(`Navigated to the url : ${url} successfully`);
}

export async function waitForSelector(page: Page, selector: string): Promise<Locator> {
    Log.info(`Waiting for the element with selector : ${selector}`);
    try {
        await page.waitForSelector(selector, { state: "visible", timeout: 30000 });
        Log.info(`Element with selector : ${selector} is visible`);
        return page.locator(selector);
    } catch (error) {
        Log.error(`Element with selector : ${selector} is not visible`);
        throw error;
    }
}

export async function click(page: Page, selector: string) {
    Log.info(`Clicking on the element with selector : ${selector}`);
    try {
        const element = await waitForSelector(page, selector);
        await element.click();
        Log.info(`Clicked on the element with selector : ${selector} successfully`);
    } catch (error) {
        Log.error(`Error while clicking on the element with selector : ${selector}`);
        throw error;
    }
}

export async function fillText(page: Page, selector: string, text: string) {
    Log.info(`Typing the text : ${text} in the element with selector : ${selector}`);
    try {
        const element = await waitForSelector(page, selector);
        await element.fill(text);
        Log.info(`Typed the text : ${text} in the element with selector : ${selector} successfully`);
    } catch (error) {
        Log.error(`Error while typing the text : ${text} in the element with selector : ${selector}`);
        throw error;
    }
}

export async function getText(page: Page, selector: string): Promise<string> {
    Log.info(`Getting the text of the element with selector : ${selector}`);
    try {
        const element = await waitForSelector(page, selector);
        const text = await element.innerText();
        Log.info(`Text of the element with selector : ${selector} is : ${text}`);
        return text;
    } catch (error) {
        Log.error(`Error while getting the text of the element with selector : ${selector}`);
        throw error;
    }
}

export async function getTitle(page: Page): Promise<string> {
    Log.info(`Getting the title of the page`);
    const title = await page.title();
    Log.info(`Title of the page is : ${title}`);
    return title;
}

export async function getAllElements(page: Page, selector: string): Promise<ElementHandle<SVGElement | HTMLElement>[]> {
    Log.info(`Getting all the elements with selector : ${selector}`);
    try {
        const elements = await page.$$(selector);
        Log.info(`Got all the elements with selector : ${selector}`);
        return elements;
    } catch (error) {
        Log.error(`Error while getting all the elements with selector : ${selector}`);
        throw error;
    }
}

export async function selectElementFromDropDown(page: Page, selector: string, value: string) {
    Log.info(`Selecting the value : ${value} from the dropdown with selector : ${selector}`);
    try {
        const element = await waitForSelector(page, selector);
        await element.selectOption({ label: value });
        Log.info(`Selected the value : ${value} from the dropdown with selector : ${selector}`);
    } catch (error) {
        Log.error(`Error while selecting the value : ${value} from the dropdown with selector : ${selector}`);
        throw error;
    }
}

export async function sortInventoryByPriceLowToHigh(inventoryData: { name: string, price: number }[]) {
    const sortedInventory = inventoryData.sort((a, b) => a.price - b.price);
    Log.info(`Sorted the inventory by price low to high : ${JSON.stringify(sortedInventory)}`);
    return sortedInventory;
}

export async function sortInventoryByPriceHighToLow(inventoryData: { name: string, price: number }[]) {
    const sortedInventory = inventoryData.sort((a, b) => b.price - a.price);
    Log.info(`Sorted the inventory by price high to low : ${JSON.stringify(sortedInventory)}`);
    return sortedInventory;
}

export async function sortInventoryByNameAtoZ(inventoryData: { name: string, price: number }[]) {
    const sortedInventory = inventoryData.sort((a, b) => a.name.localeCompare(b.name));
    Log.info(`Sorted the inventory by name A to Z : ${JSON.stringify(sortedInventory)}`);
    return sortedInventory;
}

export async function sortInventoryByNameZtoA(inventoryData: { name: string, price: number }[]) {
    const sortedInventory = inventoryData.sort((a, b) => b.name.localeCompare(a.name));
    Log.info(`Sorted the inventory by name Z to A : ${JSON.stringify(sortedInventory)}`);
    return sortedInventory;
}







