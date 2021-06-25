# VUE Router

## Server-Side vs Client-Side Routing

##### Server-side Routing

the client is making a request to the server on every URL change.

##### client-side routing 

- often usen in vue
-  the routing happens in the browser itself using JavaScript.
- the webpage is loaded from a single index.html page and  client-side routing to dynamically presents different views, depending on which link is clicked

**Single Page Application** (SPA) is defined as a web app that loads from a single page and dynamically updates that page as the user interacts with the app. For a single page application we need a way to navigate between content (client-side routing).



## Vue Router-Setup

https://router.vuejs.org/

vue2

```js
import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router

```

 `routes` contains an array of objects. 

`path` indicates the actual route, in terms of the URL, 

`'``/``'`, meaning this is the root,

`name` allows us to give this route a name so we can use that name throughout our application to refer to this route.

`component` allows us to specify which component to render at that route. Note that these are the same components that were imported at the top of the file

When the browser’s URL ends with `/about`, the `About` component will be rendered.

⚠️ **Question: Are About and Home “components” or “views”?**

✅ **Answer: They are components.**

 it’s a best practice to put the components (AKA pages) that get loaded by Vue Router in the `/views` directory. You then keep the modular (reusable) components in your `/components` directory.

### main.js

The Router is loaded in `main.js`:

```javascript
 import router from './router'
```

And in **main.js** you’ll notice that we tell our Vue instance to use the router we’ve imported:

```javascript
    new Vue({
      router,
    ...
```

Since we’re using ES6, this is the same as writing:

```javascript
    new Vue({
      router: router,
    ...
```

### App.vue

```vue
<div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
</div>
```

------

## Routing

### `<router-link>`

is a component (from the vue-router library) whose job is to link to a specific route.

### `<router-view/>` 

is a placeholder where the contents of the component will be rendered onto the page.

## special-css-class

```css
#nav a.router-link-exact-active {
  color: #42b983;
}
```





## Using Named Routes

 `router.js` each of our routes has a `name`

instead of:

```html
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
```

We can write:

```html
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
```

If the URL changes later,  we’d only have to change that path in one place instead of everywhere in our app.



------

## Changing Routes

If we need to change their paths. Like from `/about` to `/about-us` . How might we deal with this?

### 1: Redirect

```js
    const router = new VueRouter({
      routes: [
        ...
        {
          path: '/about-us',
          name: 'about',
          component: About
        },
         { 
          path: '/about', 
          redirect: { name: "about" }
        }
      ]
    })
```

If we’re using named routes then we don’t need to change our `router-link`s at all.

### 2: Alias

nstead of redirecting the old path we might just want to alias it, meaning just provide a duplicate path to the same content.

```js
 const router = new VueRouter({
      routes: [
        ...
        {
          path: '/about-us',
          name: 'about',
          component: About,
          alias: '/about' // <-----
        }
      ]
    })
```

------

## History Mode

```
history: createWebHistory(process.env.BASE_URL),
```

no # for navigation

------

## Router-api

```
this.$router.push({ name: 'Profile', params: { char_id } });
```

---

router also für security - blocking...

------

# Neue Notes...



### Dynamic Routing 

```js
routes: [
        ...
        {
          path: '/user/:username',
          name: 'user',
          component: User
        }
      ]
```

 `:username` is called a dynamic segment. This tells Vue that anything after `/user/` is to be treated as a dynamic route. When we create the simple template, we can access this parameter like so:

**/pages/user.vue**

```html
<template>
	<div class="user">
		<h1>This is a page for {{ $route.params.username }}</h1>
	</div>
</template>
```

A $route object represents the state of the current active route. It contains data about the route including the params.

https://router.vuejs.org/api/#the-route-object

Also we can link to dynamic routes by placing parameters in our links:

```html
    <router-link :to="{ name: 'user', params: { username: 'Joe' }  }">Joe</router-link>
```

## Using Props for Routes

Using `$route.params` in your component limits its flexibility. A more modular way to create your dynamic components is to set `props: true` in your route configuration.

**router.js**

```javascript
    ...
    export default new Router({
      routes: [
        {
          path: "/user/:username",
          name: "user",
          component: User,
          props: true
        }
      ]
    });
```

This will cause the `$route.params` to be sent into your component as a normal prop. Inside our component, we’ll then need to receive this prop:

**User.vue**

```html
    <template>
      <div class="user">
        <h1>{{ username }}</h1>
      </div>
    </template>
    
    <script>
    export default {
      props: ["username"]
    };
    </script>
```

Everything will now work the same, except that our component can now be reused as a child component elsewhere, passing in username as a prop.

```js
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">

```

> direct access in template:
>
> ```vue
> <span>Event #{{ $route.params.id }}</span>
> ```



prevent error, if asyc data is not yet loaded:

add `  <div v-if="event">` to the  parent-element



------



## History Mode

## The Hash

“Hash mode” is the default mode for Vue2 Router and it uses the URL hash to simulate a full URL so the page isn’t reloaded every time the URL changes.

In order to remove it we need to add some configuration to our **router.js** :

`mode: 'history'`

```javascript
    ...
    export default new Router({
      mode: 'history', // <----
      routes: [
       ...
      ]
    })
```

This tells Vue to use the browser `history.pushState` API to change the URL without reloading the page.

Normally when you load up `/about-us` on a server it would look for an `about-us.html` file. On our application no matter what URL is called up, we must load up `index.html` which is where our application is loaded, and then our router will take over and load up the proper page.

This is already the default functionality on our development server, but if we go to deploy our application we’ll need to ensure our server has the proper configuration to serve up our index.html no matter what route is navigated to. The Vue Router documentation has a bunch of [example configurations](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations) showing how to do this.



## Handling 404s

 you should be aware of is that when we go to an invalid URL, we are no longer given the proper 404 file not found error.

 There are different ways to combat this, one of which is by creating a `/views/FileNotFound.vue` component, which gets loaded if none of the existing paths match. To do this we would place this catch-all route at the bottom of our `routes.js`:

```javascript
    ...
    const router = new VueRouter({
      mode: 'history',
      routes: [
        ...
        { path: '*', component: NotFoundComponent }
      ]
```

https://router.vuejs.org/



------

vue3...

------
