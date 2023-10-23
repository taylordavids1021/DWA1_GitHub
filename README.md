# DWA_GitHub
DWA

# DWA1
Knowledge Check
Now that you have worked through both pre-recorded lessons, (hopefully, replayed sections for better understanding, made notes, and come to grips with the concepts covered) take some time to work through the following questions:

1. Why is it important to manage complexity in Software?
2. What are the factors that create complexity in Software?
3. What are ways in which complexity can be managed in JavaScript?
4. Are there implications of not managing complexity on a small scale?
5. List a couple of codified style guide rules, and explain them in detail.
6. To date, what bug has taken you the longest to fix - why did it take so long?

# DWA2
To complete this Knowledge Check, ensure you have worked through all the lessons in Module 2: What is JavaScript? and complete the following questions to successfully complete the module:

1. What do ES5, ES6 and ES2015 mean - and what are the differences between them?
2. What are JScript, ActionScript and ECMAScript - and how do they relate to JavaScript?
3. What is an example of a JavaScript specification - and where can you find it?
4. What are v8, SpiderMonkey, Chakra and Tamarin? Do they run JavaScript differently?
5. Show a practical example using caniuse.com and the MDN compatibility table.

# DWA3
# DWA3.1
The DWA3.1 Submission requires you to respond to the following:

1. Please show how you applied a Markdown File to a piece of your code.
2. Please show how you applied JSDoc Comments to a piece of your code.
3. Please show how you applied the @ts-check annotation to a piece of your code.
4. As a BONUS, please show how you applied any other concept covered in the 'Documentation' module.

# DWA3.2
Using what you’ve learned about Gherkin Syntax, write user stories to describe the behaviour of the “+” and “-” buttons from that app.

1. User story(ies) in Gherkin syntax for the “+” button. 
2. User story(ies) in Gherkin syntax for the “-” button

# DWA4
Install @eslint
To complete this Knowledge Check, ensure you have worked through all the lessons in Module 4: Code Style and submit your responses to the following two items:

1. Select three rules from the Airbnb Style Guide that you find useful and explain why.
2. Select three rules from the Airbnb Style Guide that you find confusing and explain why.
# DWA5
This exercise provides user stories in the Gherkin syntax, covered in Documentation - Reading Material. Please make sure you understand the use and meaning of this syntax before continuing.

Below is the HTML and JavaScript code for a “Whole Number Divider”. At the moment it only meets two user stories (see below under “Resolved Stories”)

# DWA6
This exercise presents you with a working version of the “Book Connect” website you previously audited as your final challenge. However, you must use objects and functions as abstractions to make the code more maintainable, extendable and easier to change.

You might have already done this in your audit, but this is an opportunity to revisit your decisions and perhaps adjust, change, remove or add abstractions to improve the codebase. Also, please remember that you are encouraged to consider higher-level concepts discussed in the previous lessons, such as documentation, Styleguides and abstractions. Finally, you can start from scratch with the initially provided repository, merely using the script.js file below as a replacement or continue working on your version (if you created one) and updating the data.js file as listed below.

# DWA7 
In this challenge, you will revisit the previous abstractions you created in the “Book Connect” project and consider them through the lens of SOLID.
# DWA8 
In this Module, you will continue with your “Book Connect” codebase, and further iterate on your abstractions. You must create an encapsulated abstraction of the book preview using a single factory function. If you are up for it, you can also encapsulate other aspects of the app into their own abstractions.
# DWA9
This is an extension of the Book connect app/site. In this case I am converting certain aspects such as the book preview element to a web component.
# DWA10
In this module, I am required to use the Shoelace component library in a brand-new JavaScript project and build the original Tally App example from the very first lesson using only Shoelace components. I have been provided with three user stories that should be met at a minimum, however, I am encouraged to add additional functionality. I am free to choose the components I think are best suited to meet these user stories.

# User Stories (Gherkin syntax)
# SCENARIO 1: Increment the counter by one
 GIVEN the tally counter app is open
 AND the counter is at 0
 WHEN I click the "Add" button
 THEN the counter should display 1
# SCENARIO 2: Decrement the counter by one
 GIVEN the tally counter app is open
 AND the counter is at 1
 WHEN I click the "Subtract" button
 THEN the counter should display 0
# SCENARIO 3: Resetting the Tally Counter
 GIVEN the tally counter app is open
 AND the counter value is 10
 WHEN I click on the "Reset" button
 THEN the counter value should change to 0
 AND a confirmation message should be displayed that the counter has been reset# DWA

# DWA11

For this challenge, you will be required to use the two supplied video lessons as a reference to create your own implementation of a Redux-inspired store to manage the state of a basic counting Tally App. Note that you are not required to render any HTML to the screen, but instead should add subscriptions that merely log the new state to the console if it changes.