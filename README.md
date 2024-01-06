# nonso-dev

> lately, i have been unable to have a solid portfolio, due to serveral reasons.
> that's why i have made the choice to not just build my portfolio page from my previous repo `portfolio-v3` but also to bui my own blog from scratch.

> so i will dwfinitely need to implement every aspect of this project with the highest care and planning.
> i need to get `really serious` deapite my current working env.

## libs in use

- React
- React router dom
- R3F
- eruda (mobile devtool)
- threejs
- dotenv

- mongoDb Atlas ( planning on this)
- emailjs ( planning on this )

#### started on 11/2023

### Basic editing with nvim

> `nvim` is the best editor for me rn, so below are basic editing commands

```vim
:%s/\(word-to-search\)/replace-with/gca
```

- g (global search/replace)
- c (ask before doing)
- i (case insensitive)

#### MutationObserver API

> this API is actually new to me and fun working with.

```js
const test = useEffect(() => {
  const t = document.querySelector(".nav");

  const callback = (mutationList, ob) => {
    mutationList.forEach((m) => {
      if (m.type === "childList") {
        if (m.addedNodes[0]) log("added Node");
        else {
          const r = m.removedNodes[0];
          log("removed Node");
          r.classList.add("leave");
        }
      }
    });
  };

  const o = new MutationObserver(callback);
  try {
    o.observe(t, { childList: true, attributes: true, subtree: true });
  } catch (e) {
    console.warn(e);
  }
}, []);
```

### Transition Component

> Today being (6/1/24), i tried creating a transition component, similar to what i have been using in Vuejs.
> well i made use of the following functons

```jsx
React.useRef;
React.useFragment;
React.forwardRef;
```

> and as well some css , for the animation, i will try making use of just native css transitions rather than animations.
