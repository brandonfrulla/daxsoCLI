---
title: Frequently Asked Questions
description: Frequently Asked Questions
layout: ../../layouts/docs.astro
lang: en
---

Welcome to the Frequently Asked Questions section, where we aspire to address all your curiosities and concerns regarding the DAXSO project! Embarking on a journey into the realm of smart contract organizations can sometimes bring forth a multitude of questions - and it's absolutely natural to seek answers.

Whether you're pondering the intricacies of setting up your environment or curious about our contribution guidelines, we've got you covered. Here, we've gathered a compendium of the most common queries from our vibrant and growing community. Our aim is to facilitate a smoother navigation through the vibrant ecosystem we are building together.

As you peruse through these questions, remember, no query is too small or insignificant. Each question you have may very well resonate with others in the community. So, delve in and let your quest for knowledge flourish. After all, the continual exchange of information is what nurtures innovation and collaboration.

In case you don't find the answer you're seeking, feel free to reach out to us through our official channels. We're here to assist you in every step of your DAXSO journey. Happy exploring!

### Utilizing Your New Project

Congratulations on building your first project using our tool! Naturally, the next steps involve editing and deploying your code to bring your vision to life. Here's how you can proceed:

First, ensure you are situated at the root directory where the individual modules reside - this includes both blockchain components and the frontend interface. From here, you can access and modify each segment of your project seamlessly.

Subsequently, initiate the necessary commands that correspond with the framework of each segment. For instance, execute `npm build` to prepare your Next.js application for deployment, or utilize the `truffle config` for blockchain configurations, among others.

By adhering to the framework-specific protocols, you can effectively streamline the development process, fostering a smooth transition from development to deployment. Remember, each framework has its unique set of commands designed to optimize performance and security, so ensure to familiarize yourself with these to make the most of your project development experience.

### What is the core philosophy behind the DAXSO project’s code structure?

The core philosophy is grounded in the principles of functional programming. This approach not only facilitates easy testing but also promotes the active modification of templates to create a truly unique starting point for every project. Additionally, it sets a strong foundation for potential migration to other languages such as Rust in the future.

### How does the `generatePackageJson` function work?

The `generatePackageJson` function operates by taking user responses and a target directory as inputs, validating the inputs, and then reading a template file. It subsequently compiles the template with Handlebars, populating it with the input data, and writes the populated template to a new file in the specified target directory. It ensures a seamless and error-free generation of package.json files based on user preferences.

### Can I contribute to the project? If yes, how?

Absolutely! We encourage contributions that align with our project philosophy. You can start by understanding the existing code structure and guidelines detailed in our documentation. Then, fork the repository, set up your environment (either locally or via Codesandbox), and begin implementing your changes. Don’t forget to adhere to our naming conventions and style guidelines to maintain coherence and functionality.

### What benefits does the current code structure offer?

The current code structure offers a range of benefits including easy testability of individual components, scalability to create unique outputs for different projects, and flexibility for potential future migrations to performance-centric languages. Moreover, it enhances the user experience by offering custom templates and code based on individual user responses.

### Are there any plans to rebase the project into other languages in the future?

Yes, the current code structure is designed to be conducive to potential rebasing into languages like Rust in the future, allowing for greater performance and optimization.

### Where can I find more information about contributing to translations?

For contributing to translations, please reach out to use on twitter or open a pull request as we are still organizing the open source contribution guides.
.
