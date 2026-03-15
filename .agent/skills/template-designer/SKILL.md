---
name: template-designer
description: Create simple, aesthetic, and production-ready frontend templates by combining high-level design constraints with strict shadcn component usage. Use this skill when the user wants to build a beautiful template, landing page, or dashboard without writing complex custom CSS, relying entirely on the composition of shadcn components.
---

# Template Designer

This skill bridges the gap between high-level aesthetic design (`frontend-design`) and strict component-based execution (`shadcn`). The goal is to produce extremely polished, beautiful, yet simple and maintainable frontend templates. 

Instead of writing custom CSS, using raw Tailwind values, or creating bespoke components, you must rely entirely on the `shadcn` library to execute the design vision set by `frontend-design`.

## 1. Aesthetic Vision (The Design Phase)
Before implementing, establish a clear and concise aesthetic direction:
- **Tone & Purpose**: Determine the tone (e.g., refined minimalism, industrial, soft elegance). Keep the design conceptually simple but visually striking.
- **Typography**: Choose high-quality, distinctive fonts (one for display, one for body) rather than generic defaults.
- **Color Palette & Theme**: Define a cohesive palette using semantic variables. Map your design's colors strictly to standard frontend semantic CSS variables (`background`, `primary`, `muted`, `accent`, etc.) so `shadcn` components automatically inherit the theme.
- **Composition**: Plan for generous spacing, clear hierarchy, and balanced proportions. 

## 2. Component Execution (The Implementation Phase)
All designs must be realized using standard `shadcn` components. **Do not create custom layouts or complex CSS integrations where a shadcn component can be used.**
- **Strict Composition**: Build the UI by composing `shadcn` blocks (e.g., Cards, Tables, Sidebars, Alerts).
- **No Bespoke Overrides**: Use built-in component variants (`variant="outline"`, `size="lg"`) instead of brute-forcing custom Tailwind classes. 
- **Tailwind for Layout Only**: Use Tailwind classes *only* for structural layout (`flex`, `grid`, `gap-*`, `p-*`, `m-*`) and semantic colors (`text-muted-foreground`). Never use it for custom shadows, complex borders, or raw colors (like `bg-blue-500`).
- **Use Standard Spacing**: Always use `gap-*` with `flex` or `grid`. Never use `space-y-*` or `space-x-*`.

## 3. Core Philosophy
- **Simplicity over Customization**: A beautiful, simple design built with 100% standard shadcn components is vastly superior to a complex design requiring custom HTML/CSS wrappers.
- **Maintainability**: By avoiding "crazy integrations" and custom designs, the resulting codebase remains heavily standardized, easy to maintain, and universally understandable.
- **Elegance**: Elegance comes from how components are arranged, the whitespace between them, and precise typography, not from adding custom code.
