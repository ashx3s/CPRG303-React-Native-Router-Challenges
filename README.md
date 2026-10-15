# CPRG 303 React Native Router Practice

## Introduction

This activity focuses on practicing routing in React Native applications using Expo Router. Students will work with dynamic routes, navigation parameters, and screen options to create a functional navigation structure.

## Router Structure

## Important Screens

- `app/(tabs)/week/[id].tsx`: 1 fill-in-the-blank or complete-the-code challenge
- `app/docs/[id].tsx`: 1 fill-in-the-blank or complete-the-code challenge
- `app/(tabs)/week/_layout.tsx`: 1 fill-in-the-blank or complete-the-code challenge

## Challenges

### Part 1: Routing Implementation

1. Implement dynamic routing for week details
2. Handle missing documents in the documentation screen
3. Customize screen options for the week layout

Each screen contains specific challenges marked with comments that guide students through completing the routing implementation.

### Part 2: Navigation UI Refactor

#### Option A: Navigation Consistency (Easier Challenge)

- **File to modify**: `app/(tabs)/_layout.tsx`
- **Focus**: Fix navigation consistency between Docs and AppName
- **Tasks**:
  - Ensure tab navigation remains visible when navigating through Docs
  - Make Docs and AppName follow a consistent navigation structure

#### Option B: Reusable Tab Configuration (Difficult Challenge)

- **File to modify**: `app/(tabs)/_layout.tsx`
- **Focus**: Refactor tab setup into a reusable component
- **Tasks**:
  - Identify and extract repeated tab configuration
  - Create a reusable component that accepts tab options through props
  - Refactor the tabs to use the new component
  - Ensure different tabs can still provide their own option values

#### Starting Point

- Standardize on the current Home tab setup
- Use the Home tab configuration as the basis for the reusable component

## File Locations

- **Main Layout File**: `app/(tabs)/_layout.tsx` - Contains the tab navigation configuration
- **Week Layout File**: `app/(tabs)/week/_layout.tsx` - Contains the week-specific routing configuration
- **Documentation Screen**: `app/docs/[id].tsx` - Handles document display and routing
- **Week Detail Screen**: `app/(tabs)/week/[id].tsx` - Displays week-specific details

Each file contains specific challenges marked with comments that guide students through completing the implementation.
