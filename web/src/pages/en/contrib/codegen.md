---
title: Adding New Code
description: Understanding the code structure and its implications for future developments
layout: ../../../layouts/docs.astro
lang: en
---

In our pursuit to foster a flexible and scalable project environment, our code architecture is meticulously crafted to facilitate easy migration and replication across different languages. This documentation section elucidates the rationale behind our code structure and explains how one can contribute while maintaining coherence and functionality.

## Overview

The foundational philosophy behind our code architecture is grounded in a purely functional paradigm. This approach ensures easy testing and promotes active modification of the templates, allowing us to create a unique starting point for every project, as opposed to merely copying and pasting templates. Furthermore, this strategy potentially paves the way for seamless rebase into languages like Rust in the future.

## Understanding the Code Structure

### Adding New Project Author

The following snippet illustrates a function that prompts the user for the creator's name of a new project:

```typescript:cli/src/questions/frontend/index.ts
export const newProjectAuthor = async (): Promise<void> => {
    const { newProjectAuthor } = await inquirer.prompt<{ newProjectAuthor: string }>({
        name: 'newProjectAuthor',
        type: 'input',
        message: 'Who is the creator of your new project?',
        default: 'Dax the Dev', 
    });

    responseData.newProjectAuthor = newProjectAuthor;
    await handleResponseChange(responseData);
}
```

Here, an async function `newProjectAuthor` is exported, which uses the `inquirer` library to prompt the user for input. The response is then saved to a Redux store style pattern, facilitating state management.

### Generating Package.JSON

Next, we generate specific files based on the user's responses, as demonstrated in the `generatePackageJson` function:

```typescript:cli/src/actions/index.ts
export const generatePackageJson = async ( data: { [key: string]: any }, targetDirectory: string, ) => {
  if (typeof targetDirectory !== 'string') {
    console.log( 'Target directory must be a string!' );
    return;
  }

  try {
    // Use a relative path from the project root (assuming you execute the script from the project root)
    const templatePath = path.join( PKG_ROOT, './src/plopTemps/next-app/package.json.hbs' );
    const source = fs.readFileSync( templatePath, 'utf-8' );

    // Compile the template with Handlebars
    const template = handlebars.compile( source );

    // Populate the template with data
    const result = template( data );

    // Save the populated template to a file
    const outputPath = path.join( targetDirectory + `/${data.newProjectName}`, 'package.json' );
    fs.writeFileSync( outputPath, result );
    await sendAnalytics('Package.json', 'success', responseData.sessionID as string);
    console.log( 'package.json generated successfully!' );
  } catch ( error ) {
    console.error( 'Error generating package.json:', error );
  }

}
```

This function undertakes several critical steps:

1. Validates the `targetDirectory` parameter.
2. Reads a template file using the Node.js `fs` module.
3. Compiles the template with Handlebars, populating it with data passed as a parameter.
4. Writes the populated template to a new file in the specified target directory.
5. Sends analytics data and logs the status of the operation to the console.

The division of these operations adheres to a functional programming paradigm, enabling easy testing and the modification of templates to produce unique outputs for different projects.

## Benefits of Our Approach

1. **Testability**: The code is structured to follow a purely functional paradigm, making it easier to test individual components.
2. **Scalability**: Enables active modification of templates, offering a truly unique starting point for each project.
3. **Flexibility for Future Migrations**: The current structure is conducive to a potential rebase into more performance-centric languages like Rust in the future.
4. **User-Friendly**: Enhances the user experience by offering custom templates and code based on individual responses, rather than a one-size-fits-all template.

## Conclusion

Through our coherent and functional approach, we aim not only to facilitate ease of use but also to set a strong foundation for future developments and migrations. We encourage contributors to adhere to this structure, fostering a robust and flexible code base that can adapt and grow with evolving project needs.

Feel free to delve deeper and contribute to our project, and thank you for being an essential part of our innovative journey.
