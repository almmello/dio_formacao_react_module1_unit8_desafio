# React Calculator


## Motivation for the project

This project was a challenge of DIO React Developer Training.
https://web.dio.me/track/formacao-react-developer

I recorded my development through commits so that you can follow along.

Please let me know if you find any issues with this project.


## Initial Code

This project was bootstrapped with Create React App (https://github.com/facebook/create-react-app), and I started with a working calculator with limited operations; only addition and subtraction were present in the startup code.

Here is the startup code:
https://github.com/digitalinnovationone/trilha-react-desafio01-calculadora


## Reference

During the development, I used the following references to build the React Calculator app:

https://styled-components.com/docs/basics
https://stackoverflow.com/questions/42395144/how-to-horizontally-invert-the-input-type-text-for-calculator
https://github.com/MikeMcl/bignumber.js


## URL location for the hosted Calculator

https://gmoo.com.br


## My Version

1. I changed the  "handleSumNumbers", "handleMinusNumber", and "handleEquals" methods.
- I did a new design with my color pallet and styles.
- The Calculator can hold the number when we press the operation symbol.
- The equal sign creates a continuous operation loop.
- After an operation, if we type another operation sign, the Calculator performs another calculation indefinitely.

2. Fixed the reaching zero on calculations issue.
- Because the program used the number zero on its code to perform calculations, there was an issue when the operation result was equal to zero.
- I created separate variables to control the initial state of variables and avoid this issue.

3. Refactored the "handleSum" and "handleMinus" to a unique "handleOperation" method.
- When I introduced the other operations, I redesigned the "handleSum" to a flexible method to perform any calculations and avoid duplicated code.
- I optimized the "handleEquals" method, removing the switch expression.
- I introduced a new method to calculate the percentage.

4. Used BigNumbers to fix decimal calculation.
- To fix the precision issue on decimal calculations, I used the "BigNumber" library.


## Key Dependencies

- Styled Components: https://styled-components.com/
Styled components are React components that allow you to style your components using CSS. You can define styled components inside your React component file or create a separate one.


# Installing Dependencies


## Styled Components

```
yarn add styled-components
```


## Running the server locally

In the project directory, you can run the following:

```
npm start
```

It runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.


## Authors

-Alexandre Monteiro de Mello


## Acknowledgments

-DIO - https://web.dio.me/