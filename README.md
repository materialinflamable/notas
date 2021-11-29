# Notas, una página con recursos simples

Notas es una página simple con recursos sobre matemáticas y programación en español. Es un proyecto open-source. Para colaborar, puedes escribir pequeñas notas en documentos `.mdx` y ponerlos en `./src/pages/notas`. Éstos `.mdx` compilarán el código TeX que escribas. En el futuro también aceptarán snippets de código.

## Un ejemplo de una contribución simple

```
---
title: Determinante de una matriz 2x2
date: "2021-11-29"
summary: "Cómo computar el determinante de una matriz 2x2"
categories:
    - Álgebra Lineal
show: true
---

# Determinante de una matrix 2x2

Para computar el determinante de una matriz de tamaño $2\times 2$,
puedes seguir esta fórmula:
$$
\det\left(\begin{bmatrix}a,b\\c,d\end{bmatrix}\right) = ad - bc
$$
```

## Compilando la página localmente

Esta página fue construida con [gatsby.js](https://www.gatsbyjs.com/docs/tutorial/part-0/). Instala la herramienta `gatsby-cli` y corre `gatsby develop` en la terminal.
