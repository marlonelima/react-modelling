### A CLI that gives opinion to React

`This library is only preview at the moment`
<br/><br/>
Next.js and Sass support will be available soon

<br/>

#### How to install?

`npm i -g react-modelling`

<br>

#### The problem

What is the problem in React? Your projects quickly and easily can become a trash. Disorganization reigns because there is no a main pattern to React. And in a big team? Nobody can understand that structure. And what about writing boilerplates to create components or router all the time? React Modelling solves all of these organization problems using the CLI.

Here are the proposed structure: `under construction`

```
src
└───domain - Non-reusable components
└───components - Reusable components
└───pages - Pages folder
└───routes - Routes folder
└───utils - Utilities. e.g.: validators and formatters
└───styles - Global styles

```

Going ahead...

```
src
└───components
│   └───Header
│       │   index.tsx
│       │   styles.ts
```

or using modularization

```
src
└───components
│   └───Layout
│         └───Header
|             |   index.tsx
|             |   style.ts
|
|   └───Form
│         └───Input
|             |   index.tsx
|             |   style.ts
│         └───Button
|             |   index.tsx
|             |   style.ts
```

<br/>

### CLI Commands

You can use in your terminal, the aliases `remod`, `react-modelling`, `react-m` or `r-m` to call the React Modelling.

<br/>

#### Configure project

To configure the project

```
remod init
```

After this you should execute `yarn` or `npm install`

<br>

#### Page

To create a new page

```
remod page <name>
```

or you can create inside a module

```
remod page <name> <module-directory>
```

Example:

```
remod page Login users/authentication
```

<br>

#### Components

To create a new component

```
remod component <name>
```

Use the flag `-r` to generate an reusable component and `-u` for a non-reusable component. By default reusable component will be created.

or you can create inside a module

```
remod component <name> <module-name>
```

Example:

```
remod component LoginError users/messages
```

<br>

#### Router

To create a new router

```
remod router --init
```
