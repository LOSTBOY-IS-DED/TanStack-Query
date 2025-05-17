# 🚀 Project Setup

1. 🛠️ **New React project setup using CRA**

2. 🔌 **Set up an API endpoint that serves mock data for use in our application**

3. 🧭 **Set up React Router and a few routes in the application**

4. 📦 **Fetch data the traditional way using `useEffect` and `useState`**

# TanStack Query - Data Fetching Guide

## 📦 Installation

First, install the TanStack Query package using npm:

```bash
npm i @tanstack/react-query
```
Wrap your root React component with the QueryClientProvider to enable TanStack Query throughout your app:

```bash
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
```

## Fetching Data with useQuery

Use the useQuery hook inside your React components to fetch data. Here's an example fetching posts from a local API:

```bash
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const { data, isLoading, isError, error } = useQuery({
  queryKey: ["posts"],
  queryFn: async () => {
    return axios.get("http://localhost:4000/posts");
  },
});
```

## 🧠 Understanding queryKey

The queryKey helps TanStack Query uniquely identify queries and cache them properly:

// Examples of query keys:

// Fetch all posts
["posts"]

// Fetch post with id 2
["posts", 2]

// Fetch comments for post with id 2
["posts", 2, "comments"]

## 📊 Handling Query States

The useQuery hook returns an object that provides key states and data handling:

```bash 
// The returned object includes:
// data: The fetched data from the query
// isLoading: true when the query is loading
// isError: true if an error occurred
// error: the error object if any
```
