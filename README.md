### A CLI that gives opinion to React

`This library is only preview at the moment`
<br/><br/>

`npm i -g react-modelling`
<br>

What is the problem in React? Your projects quickly and easily can become a trash. Disorganization reigns because there is no a main pattern to React. And in a big team? Nobody can understand that structure. And what about writing boilerplates to create components or router all the time? React Modelling solves all of these organization problems using the CLI.

Here are the proposed structure: `under construction`

```
src
  - /domain // Non-reusable components
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
    - /Form
      - /Input
        - index.tsx
        - styles.ts
      - /Button
        - index.tsx
        - styles.ts
```

<br/>

### CLI Commands

You can use in your terminal, the commands `remod`, `react-modelling`, `react-m` or `r-m` to call the React Modelling.

#### Page

To create a new page

```
remod page <name>
```

or you can create inside a module

```
remod page <name> -m <module-name>
```

<br>

#### Components

To create a new component

```
remod component <name>
```

Use the flag `-r` to generate an reusable component and `-u` for a non-reusable component. By default non-usable component.

or you can create inside a module

```
remod component <name> -m <module-name>
```

<br>

#### Router

To create a new router

```
remod router --init
```
