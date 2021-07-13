### A CLI that gives opinion

`This library is only preview at the moment`
<br/><br/>

What is the problem in React? Your projects quickly and easily can become a trash. Disorganization reigns because there is no a main pattern to React. And in a big team? Nobody can understand that structure. And what about writing boilerplates to create components or router all the time? React Modelling solves all of these organization problems using the CLI.

Here are the proposed structure:

```
src
  - /domains // Not resusable components
  - /components // Reusable components
  - /routes // Routes folder
```

Going ahead...

```
src
  - /components
    - /Header
      - index.tsx
      - styles.ts

or using modularization

  - /components
    - /Layout
      - /Header
        - index.tsx
        - styles.ts
      - /Footer
        - index.tsx
        - styles.ts

  - /components
    - /Form
      - /Input
        - index.tsx
        - styles.ts
      - /Button
        - index.tsx
        - styles.ts
```

### CLI Commands

You can use in your terminal, the commands `r--` or `r-m` to call the React modulling.

#### Page

To create a new page

```
r-m page <name>
```

or you can create inside a module

```
r-m page <name> -m <module-name>
```

#### Components

To create a new component

```
r-m component <name>
```

Use the flag `-r` to generate an reusable component and `-u` for a non-reusable component. By default non-usable component.

or you can create inside a module

```
r-m component <name> -m <module-name>
```

#### Router

To create a new router

```
r-m router --init
```
