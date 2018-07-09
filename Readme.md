<p align="center">
  <a href="#"><img src="./docs/images/banner.png" /></a>
</p>

<p align="center">
  A set of <em>tiny</em>, composable React components <br/>
  for handling state with render props.
</p>
<br/>

<p align="center">
  <a href="#why"><strong>Why?</strong></a> · 
  <a href="#principles"><strong>Principles</strong></a> · 
  <a href="http://slatejs.org"><strong>Demo</strong></a> · 
  <a href="#examples"><strong>Examples</strong></a> · 
  <a href="./docs/general/plugins.md"><strong>Plugins</strong></a> · 
  <a href="http://docs.slatejs.org"><strong>Documentation</strong></a> · 
  <a href="./Contributing.md"><strong>Contributing!</strong></a>
</p>
<br/>

<p align="center">
  <a href="https://www.npmjs.com/package/react-values">
    <img src="https://img.shields.io/npm/dt/localeval.svg?maxAge=3600">
  </a> 
  <a href="https://unpkg.com/react-values/dist/react-values.min.js">
    <img src="http://img.badgesize.io/https://unpkg.com/react-values/dist/react-values.min.js?compression=gzip&amp;label=react-values">
  </a>
  <a href="https://travis-ci.org/ianstormtaylor/react-values">
    <img src="https://travis-ci.org/ianstormtaylor/react-values.svg?branch=master">
  </a> 
  <a href="./packages/react-values/package.json">
    <img src="https://img.shields.io/npm/v/react-values.svg?maxAge=3600&label=react-values&colorB=007ec6">
  </a> 
  <a href="./License.md">
    <img src="https://img.shields.io/npm/l/react-values.svg?maxAge=3600">
  </a> 
</p>
<br/>

`react-values` gives you a set of simple, composable helpers that let you build more complex, stateful UI components like toggles, dropdowns, lists, checkbox groups, etc. It does this using a small render-prop-based API.

<br/>

### Why?

Why create `react-values`? Well... _(Beware: this section has a few of [my](https://github.com/ianstormtaylor) opinions!)_

Before creating Slate, I tried a lot of the other rich text libraries out there—[**Draft.js**](https://facebook.github.io/draft-js/), [**Prosemirror**](http://prosemirror.net/), [**Quill**](http://quilljs.com/), etc. What I found was that while getting simple examples to work was easy enough, once you started trying to build something like [Medium](https://medium.com/), [Dropbox Paper](https://www.dropbox.com/paper) or [Google Docs](https://www.google.com/docs/about/), you ran into deeper issues...

* **The editor's "schema" was hardcoded and hard to customize.** Things like bold and italic were supported out of the box, but what about comments, or embeds, or even more domain-specific needs?

* **Transforming the documents programmatically was very convoluted.** Writing as a user may have worked, but making programmatic changes, which is critical for building advanced behaviors, was needlessly complex.

* **Serializing to HTML, Markdown, etc. seemed like an afterthought.** Simple things like transforming a document to HTML or Markdown involved writing lots of boilerplate code, for what seemed like very common use cases.

* **Re-inventing the view layer seemed inefficient and limiting.** Most editors rolled their own views, instead of using existing technologies like React, so you have to learn a whole new system with new "gotchas".

* **Collaborative editing wasn't designed for in advance.** Often the editor's internal representation of data made it impossible to use to for a realtime, collaborative editing use case without basically rewriting the editor.

* **The repostories were monolithic, not small and reusable.** The code bases for many of the editors often didn't expose the internal tooling that could have been re-used by developers, leading to having to reinvent the wheel.

* **Building complex, nested documents was impossible.** Many editors were designed around simplistic "flat" documents, making things like tables, embeds and captions difficult to reason about and sometimes impossible.

Of course not every editor exhibits all of these issues, but if you've tried using another editor you might have run into similar problems. To get around the limitations of their API's and achieve the user experience you're after, you have to resort to very hacky things. And some experiences are just plain impossible to achieve.

If that sounds familiar, you might like Slate.

Which brings me to how Slate solves all of that...

<br/>

### Principles

`react-values` tries to solve the question of "[Why?](#why)" with a few principles:

1. **Use render props.** `react-values` uses a render-prop-based API with children functions to expose its state and to make transforming its state incredibly simple.

2. **Follow React's conventions.** The helper components in `react-values` follow React's own naming conventions for controlled/uncontrolled components, using familiar concepts like `value/defaultValue`. This makes it slot into existing frameworks extremely well.

3. **Follow JavaScript's conventions.** It also leverages JavaScript's existing functionality with familiar methods like `push/pop`, `filter`, etc. so that it's not reinventing the wheel and causing you to have to refer to documentation all the time.

4. **Be extremely lightweight.** `react-values` strives to be extremely lightweight (and tree-shakeable), such that most of its helper components are add only a few hundred bytes to your app's bundle size. This means you can even use them in public-facing components.

<br/>

### Examples

To get a sense for how you might use Slate, check out a few of the examples:

* [**Plain text**](./examples/plain-text) — showing the most basic case: a glorified `<textarea>`.
* [**Rich text**](./examples/rich-text) — showing the features you'd expect from a basic editor.
* [**Auto-markdown**](./examples/markdown-shortcuts) — showing how to add key handlers for Markdown-like shortcuts.
* [**Links**](./examples/links) — showing how wrap text in inline nodes with associated data.
* [**Images**](./examples/images) — showing how to use void (text-less) nodes to add images.
* [**Hovering menu**](./examples/hovering-menu) — showing how a contextual hovering menu can be implemented.
* [**Tables**](./examples/tables) — showing how to nest blocks to render more advanced components.
* [**Paste HTML**](./examples/paste-html) — showing how to use an HTML serializer to handle pasted HTML.
* [**Code Highlighting**](./examples/code-highlighting) — showing how to use decorators to dynamically mark text.
* [**See all the examples...**](./examples)

If you have an idea for an example that shows a common use case, pull request it!

<br/>

### Documentation

If you're using Slate for the first time, check out the [Getting Started](http://docs.slatejs.org/walkthroughs/installing-react-values) walkthroughs and the [Guides](http://docs.slatejs.org/guides) to familiarize yourself with Slate's architecture and mental models. Once you've gotten familiar with those, you'll probably want to check out the full [API Reference](http://docs.slatejs.org/react-values-core).

* [**Walkthroughs**](http://docs.slatejs.org/walkthroughs/installing-react-values)
* [**Guides**](http://docs.slatejs.org/guides)
* [**Reference**](http://docs.slatejs.org/react-values-core)
* [**FAQ**](http://docs.slatejs.org/general/faq)
* [**Resources**](http://docs.slatejs.org/general/resources)

If even that's not enough, you can always [read the source itself](./src), which is heavily commented.
