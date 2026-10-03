# TypeScript Learning Roadmap

> Not explanations yet. This will become our master checklist, and then we study each concept one by one.

---

## 📋 Steps 1–12 Concept Map

---

### Step 1 — What is TypeScript

- **A.** What is TypeScript
- **B.** Why TypeScript exists
- **C.** TypeScript's relationship with JavaScript
- **D.** Static type checking
- **E.** Compile-time vs runtime
- **F.** TypeScript does not run directly in the browser/Node.js
- **G.** TypeScript → JavaScript compilation
- **H.** Benefits of TypeScript
- **I.** Limitations of TypeScript
- **J.** Where TypeScript is used professionally
- **K.** TypeScript in backend development

---

### Step 2 — TypeScript vs JavaScript

- **A.** Static typing vs dynamic typing
- **B.** Type checking
- **C.** Type inference
- **D.** Compile-time errors vs runtime errors
- **E.** Developer tooling
- **F.** Refactoring
- **G.** Maintainability
- **H.** TypeScript compatibility with JavaScript
- **I.** `.js` vs `.ts`
- **J.** When JavaScript is enough
- **K.** When TypeScript is beneficial

---

### Step 3 — Compiler / tsc

- **A.** What is the TypeScript compiler
- **B.** What `tsc` does
- **C.** `.ts` → `.js`
- **D.** Type checking
- **E.** Compilation
- **F.** Basic `tsc` command
- **G.** Compiling a specific file
- **H.** Compiler output
- **I.** Compilation errors
- **J.** `tsc --noEmit`
- **K.** Why backend projects compile TypeScript
- **L.** Basic compiler configuration introduction

---

### Step 4 — Type Annotations

- **A.** What is a type annotation
- **B.** Variable annotations
- **C.** `string` annotation
- **D.** `number` annotation
- **E.** `boolean` annotation
- **F.** Function parameter annotations
- **G.** Function return annotations
- **H.** Object annotations
- **I.** Array annotations
- **J.** Explicit annotation vs inference
- **K.** When annotation is useful
- **L.** When annotation is unnecessary
- **M.** `let` reassignment vs redeclaration

---

### Step 5 — Basic Types

- **A.** `string`
- **B.** `number`
- **C.** `boolean`
- **D.** `null`
- **E.** `undefined`
- **F.** `bigint`
- **G.** `symbol`
- **H.** `object`
- **I.** Primitive types vs object types
- **J.** Lowercase primitive types vs wrapper types
- **K.** `String` vs `string`
- **L.** `Number` vs `number`
- **M.** `Boolean` vs `boolean`

> **Professional priority:** A–E are the most important for your backend path.

---

### Step 6 — Type Inference

- **A.** What is type inference
- **B.** Variable inference
- **C.** `let` inference
- **D.** `const` inference
- **E.** Expression inference
- **F.** Function return inference
- **G.** Array inference
- **H.** Object inference
- **I.** Contextual typing
- **J.** Inference vs explicit annotation
- **K.** When to trust inference
- **L.** When explicit annotation is useful
- **M.** Avoiding unnecessary annotations

---

### Step 7 — Arrays

- **A.** What is a typed array
- **B.** `string[]`
- **C.** `number[]`
- **D.** `boolean[]`
- **E.** `Type[]`
- **F.** `Array<Type>`
- **G.** Arrays of objects
- **H.** Empty arrays and inference
- **I.** Union types in arrays
- **J.** Readonly arrays
- **K.** Nested arrays
- **L.** Array methods with TypeScript
- **M.** Typed callback parameters
- **N.** Avoiding `any[]`
- **O.** Arrays vs arrays of domain objects

---

### Step 8 — Objects

- **A.** Object type
- **B.** Object properties
- **C.** Property types
- **D.** Object inference
- **E.** Explicit object annotations
- **F.** Nested objects
- **G.** Arrays of objects
- **H.** Optional object properties
- **I.** Readonly properties
- **J.** Index signatures
- **K.** Object property access
- **L.** Dot notation vs bracket notation
- **M.** Object destructuring with types
- **N.** Excess property checking
- **O.** Structural typing
- **P.** Modeling real-world entities

---

### Step 9 — Type Aliases

- **A.** What is a type alias
- **B.** Basic type alias
- **C.** Object type alias
- **D.** Array type alias
- **E.** Primitive type alias
- **F.** Domain-specific aliases
- **G.** Reusing aliases
- **H.** Type aliases with functions
- **I.** Type aliases with unions
- **J.** Nested type aliases
- **K.** Type alias vs inline type
- **L.** Type aliases as domain models
- **M.** Type aliases and clean architecture

---

### Step 10 — Functions

- **A.** Function parameter types
- **B.** Function return types
- **C.** Function inference
- **D.** Optional parameters
- **E.** Default parameters
- **F.** Rest parameters
- **G.** Callback functions
- **H.** Callback parameter types
- **I.** Function types
- **J.** Function type aliases
- **K.** Contextual typing
- **L.** Anonymous functions
- **M.** Arrow functions
- **N.** `void` return type
- **O.** Functions returning objects
- **P.** Functions accepting objects
- **Q.** Functions accepting arrays
- **R.** Functions as values
- **S.** Higher-order functions
- **T.** Function contracts

> **Professional priority:** A–J are especially important for backend development.

---

### Step 11 — Optional / Default Parameters

- **A.** Optional parameters `?`
- **B.** Optional parameter behavior
- **C.** `undefined` and optional parameters
- **D.** Required vs optional parameters
- **E.** Parameter ordering rules
- **F.** Default parameters
- **G.** Default parameter behavior
- **H.** Default value type inference
- **I.** Optional vs default parameters
- **J.** Optional parameters in real APIs
- **K.** Default parameters in services/functions
- **L.** Best practices for optional parameters

---

### Step 12 — Union Types

- **A.** What is a union type
- **B.** Union operator `|`
- **C.** Primitive unions
- **D.** Union type aliases
- **E.** Unions in variables
- **F.** Unions in function parameters
- **G.** Union type return types
- **H.** Unions in object properties
- **I.** Unions in arrays
- **J.** Unions of object types
- **K.** Common properties of union members
- **L.** `null` unions
- **M.** `undefined` unions
- **N.** Union types and `strictNullChecks`
- **O.** Discriminated unions
- **P.** Union type narrowing *(preview only; detailed in Step 14)*
- **Q.** When to use unions
- **R.** When not to use unions
- **S.** Union types vs `any`
- **T.** Real-world API response unions

---

## 🔥 What is most important for your backend path?

From Steps 1–12, these are the concepts to know very well:

1. TypeScript fundamentals
2. TS vs JS
3. `tsc` / compilation
4. Type annotations
5. Basic types
6. Type inference
7. Arrays
8. Objects
9. Type aliases
10. Functions
11. Optional / default parameters
12. Union types

**Highest-value backend foundation path:**

```
Types → Inference → Objects → Type Aliases → Functions → Optional Parameters → Union Types
```

---

### Step 13 — Literal Types

- **A.** What is a literal type
- **B.** String literal types
- **C.** Number literal types
- **D.** Boolean literal types
- **E.** Literal types with unions
- **F.** Literal types in object properties
- **G.** Literal types for allowed values/statuses
- **H.** Literal types in backend/API models
- **I.** Literal types vs `string` / `number`
- **J.** `const` and literal inference
- **K.** `let` and widening
- **L.** Professional best practices

**Most important for backend:**

```ts
type PropertyStatus = "available" | "sold" | "rented";
```

Extremely useful for: API status, property status, user role, order status, payment status, request method.

---

### Step 14 — Type Narrowing

- **A.** What is type narrowing
- **B.** Why narrowing is needed
- **C.** `typeof` narrowing
- **D.** Equality narrowing
- **E.** `if` statements and narrowing
- **F.** Truthiness narrowing
- **G.** `in` operator narrowing
- **H.** `instanceof` narrowing
- **I.** Discriminated union narrowing
- **J.** Type predicates / `is`
- **K.** Narrowing function parameters
- **L.** Narrowing object unions
- **M.** Narrowing API results
- **N.** `null` / `undefined` narrowing
- **O.** Exhaustiveness checking
- **P.** Professional best practices

**Most important for backend:** `typeof`, `if (value === null)`, `in`, discriminated unions.

Useful when processing: HTTP request data, API responses, database results, different object shapes, success/error results.

---

## 📍 Full 32-Step Roadmap (unchanged)

| # | Topic |
|---|-------|
| 1 | What is TypeScript |
| 2 | TypeScript vs JavaScript |
| 3 | Compiler / tsc |
| 4 | Type Annotations |
| 5 | Basic Types |
| 6 | Type Inference |
| 7 | Arrays |
| 8 | Objects |
| 9 | Type Aliases |
| 10 | Functions |
| 11 | Optional / Default Parameters |
| 12 | Union Types |
| 13 | Literal Types |
| 14 | Type Narrowing |
| 15 | Interfaces |
| 16 | Type vs Interface |
| 17 | Tuples |
| 18 | Intersection Types |
| 19 | any / unknown / never / void |
| 20 | Generics |
| 21 | Utility Types |
| 22 | Type Assertions |
| 23 | Classes |
| 24 | Modules |
| 25 | tsconfig |
| 26 | Async / Promise Types |
| 27 | Advanced Type Manipulation |
| 28 | Real TypeScript Project |
| 29 | TypeScript + React |
| 30 | TypeScript + Node/Express |
| 31 | TypeScript + Prisma |
| 32 | TypeScript + NestJS |
