import { Page, expect } from "@playwright/test";

export class Product {
  private readonly page: Page;
  private readonly sortDropdown: string =
    '[data-test="product-sort-container"]';
  constructor(page: Page) {
    this.page = page;
  }
  // Method to sort the items
  public async sortItemsBy(methodValue: string) {
    await this.page.locator(this.sortDropdown).waitFor(); // Wait for the dropdown to be available
    await this.page
      .locator(this.sortDropdown)
      .selectOption({ value: methodValue });
  }

  public async validateItemsSorted(sortValue: string) {
    // Selector for the items you're validating
    const itemsSelector = '[data-test="inventory-item-name"]';

    const isSortedCorrectly = await this.page.$$eval(
      itemsSelector,
      (items, value) => {
        const elements = Array.from(items); // Convert NodeList to array to enable array operations
        const texts = Array.from(elements).map((el) => el.textContent?.trim()); // Create an array of text content from elements, trimming any leading or trailing whitespace
        // Define a comparison function based on 'value' (sortValue)
        let compareFunction;
        switch (value) {
          case "az":
            compareFunction = (a: string, b: string) => a.localeCompare(b); // Compare strings in alphabetical order
            break;
          case "za":
            compareFunction = (a: string, b: string) => b.localeCompare(a); // Compare strings in reverse alphabetical order
            break;
          case "lohi":
            compareFunction = (a: string, b: string) => parseFloat(a) - parseFloat(b); // Compare numbers in ascending order
            break;
          case "hilo":
            compareFunction = (a: string, b: string) => parseFloat(b) - parseFloat(a); // Compare numbers in descending order
            break;
          default:
            throw new Error(`Unsupported sort value: ${value}`); // Throw an error if an unsupported sort value is provided
        }

        // Check if the array is sorted according to the compareFunction
        // Return false if any element is out of order
        for (let i = 0; i < texts.length - 1; i++) {
          if (compareFunction(texts[i] ?? "", texts[i + 1] ?? "") > 0) {
            return false; // Found an element that is out of order
          }
        }
        return true; // All elements are in the correct order
      },
      sortValue
    );

    if (!isSortedCorrectly) {
      throw new Error(`Items are not sorted correctly by ${sortValue}.`); // Throw an error if the items are not sorted correctly
    }
  }
}
