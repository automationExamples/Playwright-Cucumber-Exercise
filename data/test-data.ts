export const testData = {
  credentials: {
    password: 'secret_sauce',
    users: {
      standard: 'standard_user',
      locked: 'locked_out_user',
      problem: 'problem_user',
      performanceGlitch: 'performance_glitch_user'
    }
  },
  
  urls: {
    baseUrl: 'https://www.saucedemo.com/',
    cartPage: 'https://www.saucedemo.com/cart.html',
    checkoutPage: 'https://www.saucedemo.com/checkout-step-one.html'
  },
  
  errorMessages: {
    lockedUser: 'Epic sadface: Sorry, this user has been locked out.',
    invalidCredentials: 'Epic sadface: Username and password do not match any user in this service'
  },
  
  successMessages: {
    orderComplete: 'Thank you for your order!'
  },
  
  customerInfo: {
    firstName: 'John',
    lastName: 'Doe',
    postalCode: '12345'
  }
};
