# Axept JavaScript Style Guide

Follow the original [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

This document describes only those rules which we decided to extend, to override or to add.

Other Style Guides:

+ [React](https://github.com/axept/javascript/tree/master/react)

TODO:

+ [ ] Make it as a shareable cards (Twitter, FB and other Social Media)
+ [ ] Apply https://google.github.io/styleguide/javascriptguide.xml

## Contents

  + [Comparison Operators & Equality](#comparison-operators--equality)
  + [Comments](#comments)
  + [Naming Conventions](#naming-conventions)
  + [Semicolons](#semicolons)
  + [Line Width](#line-width)
  + [Packages](#packages)
  + [Unsorted Yet](#unsorted-yet)

## Comparison Operators & Equality

Extends: [Section 15](https://github.com/airbnb/javascript#comparison-operators--equality)

  <a name="comparison--no-ternary-in-expression"></a>
  - [Link](#comparison--no-ternary-in-expression) Ternaries should not be as a part of expression, only whole expression.
  
  > Why? The following example demonstrate how it could be misunderstood.

  ```javascript
  // bad
  const query = { 'forward_url': '/' }
  const targetURL = 'https://qwe.com/auth?' + (typeof query === 'string') ? query : JSON.stringify(query)
  
  // Uncaught TypeError: split is not a function
  // because type of targetURL is Object
  const partsOfURL = targetURL.split('?')
    
    
  // may be
  const query = { 'forward_url': '/' }
  const queryString = typeof query === 'string' ? query : JSON.stringify(query)
  const targetURL = 'https://qwe.com/auth?' + queryString
    
    
  // good
  const query = { 'forward_url': '/' }
  const queryString = (typeof query === 'string') ? query : JSON.stringify(query)
  const targetURL = 'https://qwe.com/auth?' + queryString
  ```

**[⬆ back to top](#contents)**

## Comments

Extends: [Section 17](https://github.com/airbnb/javascript#comments)

  <a name="comments--no-obvious-comments"></a>
  - [Link](#comments--no-obvious-comments) Avoid using obvious comments.
  
  > Why? It makes code harder to read because you can think that here is something else than you see.
  
  ```javascript
  // bad - it duplicates the function name
  
  /**
   * Update hosts
   */
  function updateHosts(list) {
    hosts = list
  }
  
  
  // good - nothing bad is better than something bad
  function updateHosts(list) {
    hosts = list
  }
  
  
  // bad - it duplicates the module path
  import Drawer from 'react-native-drawer'

  // Components
  import DrawerMenu from './components/drawer-menu'
  
  
  // good - see the previous "good" explaination
  import Drawer from 'react-native-drawer'
  import DrawerMenu from './components/drawer-menu'
  
  
  // good
  if (!root.isAbstract()) {
    // No need to wrap child nodes of a known concrete type.
    return nextChildren;
  }
  ```

**[⬆ back to top](#contents)**

## Semicolons

Extends: [Section 20](https://github.com/airbnb/javascript#semicolons)

  <a name="semicolons--nope"></a>
  - [Link](#semicolons--nope) **Nope**.
  
  > Why? Since we always have linting tools we can detect dangerous situations automatically. But this style makes us really faster according to a few years experience.

**[⬆ back to top](#contents)**

## Line Width

  <a name="line-width"></a>
  - [Link](#line-width) 80 characters is good. But feel free to use up to 100 characters in a line.
  
  > Why? Almost all developers used to 80 characters. It's a very old practice. Now we have a wide screens and we used to seat a little bit more far from monitor. In this case we can use a bit more characters and code will be still readable.
  
  Read [this](http://softwareengineering.stackexchange.com/questions/312889/how-to-follow-the-80-character-limit-best-practice-while-writing-source-code) and [this](http://stackoverflow.com/questions/578059/studies-on-optimal-code-width) for more details.
  
  ```javascript
  // bad
  if ((this.props.suggestions.length === 0) && (newProps.suggestions.length > 0) && (newProps.autosuggestValue.length > 0) {
  
    return
  }
  
  // good
  const hasSuggestions = (this.props.suggestions.length === 0)
  const willHaveSuggestions = (newProps.suggestions.length > 0)
  if (hasSuggestions && willHaveSuggestions && (newProps.autosuggestValue.length > 0)) {
    return
  }
  
  // good
  const hasSuggestions = (this.props.suggestions.length === 0)
  const willHaveSuggestions = (newProps.suggestions.length > 0)
  const willHaveAutosuggest = (newProps.autosuggestValue.length > 0)
  if (hasSuggestions && willHaveSuggestions && willHaveAutosuggest) {
    return
  }
  ```

**[⬆ back to top](#contents)**

## Naming Conventions

Extends: [Section 22](https://github.com/airbnb/javascript#naming-conventions)

  <a name="naming--no-reduced-names"></a>
  - [Link](#naming--no-reduced-names) Avoid using reduced names.
  
  > Why? It makes code harder to understand. Names are for readability, not to appease a computer algorithm.
  
  ```javascript
  // bad - what does it mean "ref"? referals? references? single reference?
  const ref1 = fetch('/api/books')
  
  
  // good 
  const reference1 = fetch('/api/books')
  ```
  
**[⬆ back to top](#contents)**

## Imports

  <a name="imports--order"></a>
  - [Link](#imports--order) Use the following modules import order:
  
    + React
    + Relay
    + Redux
    + Tools from node_modules
    + Tools from current repo
    + Other components
    + Any kind of static assets
    + Styles
    + Constants

**[⬆ back to top](#contents)**

## Packages

  <a name="packages--lodash-and-ramda"></a>
  - [Link](#packages--lodash-and-ramda) Try to avoid using Lodash and Ramda.
  
  > Why? Underscore and Lodash has been made when ES6 has not been so popular. Ramda do not have performance benefits, but being opinionated custom approach increase unnecessary requirements for Developers skills. Besides of that Ramda did not stay "standard de-facto".

**[⬆ back to top](#contents)**

## Unsorted Yet

### Use brackets for expressions

```javascript
// bad
const useSrcKey = _srcKey !== undefined || this._srcKey !== undefined
const componentAsync = typeof src === 'function' ? src() : import(src)
const isProduction = process.env['NODE_ENV'] === 'production'

// good
const useSrcKey = (_srcKey !== undefined) || (this._srcKey !== undefined)
const componentAsync = (typeof src === 'function') ? src() : import(src)
const isProduction = (process.env['NODE_ENV'] === 'production')
```

### Do not use JavaScript "magic"

It makes source code more portable to other languages and available for reading by other developers.

```js
// bad
const b = !!a

// bad
const b = (~a.indexOf('k'))

// bad
const c = !!d.length

// good
const b = Boolean(a)

// good
const b = (a.indexOf('k') >= 0)

// good
const c = (d.length > 0)
```

### Fetch and combinate seperation

```javascript
// bad
const targetURL = `${getHost()}/search/?query=${query}`


// good
const targetHost = getHost()
const targetURL = `${targetHost}/search/?query=${query}`
```

### Don't use excess `else` for return

```javascript
// bad
if (rows) {
  return rows[0]
} else {
  return false
}


// good
if (rows) {
  return rows[0]
}
return false
```

### Don't use excess empty line

```javascript
// bad
const config = loadConfig()

if (config) {
  applyConfig(config)
}


// good
const config = loadConfig()
if (config) {
  applyConfig(config)
}
```

### Use dot syntax only for internal objects

Seperate importable/exportable JSON data objects and internal runtime objects.

> [Google Closure Advanced Compilation](https://developers.google.com/closure/compiler/docs/api-tutorial3):
> Whenever possible, use dot-syntax property names rather than quoted strings. Use quoted string property names only when you don't want Closure Compiler to rename a property at all. For example, to export a property you must use a quoted string. However, for properties used only within your compiled code, use dot syntax.


```javascript
// bad
fetch('/api/users')
  .then(response => response.json())
  .then(json => {
    if (!json.errors) {
      json.data.users.forEach(user => {
        const { id, name } = user
        if (users[id].name !== name) {
          setUserName(id, name)
        }
      })
    }
  })


// good
fetch('/api/users')
  .then(response => response.json())
  .then(json => {
    if (!json['errors']) {
      json['data']['users'].forEach(user => {
        const id = user['id']
        const name = user['name']
        if (users[id].name !== name) {
          setUserName(id, name)
        }
      })
    }
  })
```

It also means you can't rename stringifed keys because they are not in your code base only - in external API, data files, etc.

### Don't mix JS and JSX in one line

```javascript
// bad
return <ReferenceLink referenceKey={key} id={ref.id} title={ref.title}/>


// bad
const body = items.map(it => <li>{it.title}</li>)


// good
return (
  <ReferenceLink referenceKey={key} id={ref.id} title={ref.title}/>
);


// good
const body = items.map(it => (
  <li>{it.title}</li>
))


// good
return (
  <References>
    {items.map((it, index) => (
      <ReferenceLink referenceKey={index} id={it['id']} title={it['title']}/>
    ))}
  </References>
)
```

### Don't mix JSX and Text node in one line

```javascript
// bad
return (
  <Text style={style.openInSafariLink}>Open in Safari</Text>
)


// good
return (
  <Text style={style.openInSafariLink}>
    Open in Safari
  </Text>
)


// good - if you need a Text node for styling
return (
  <Text>&nbsp;</Text>
)
```

## One empty line before and after function declaration

No empty line needed after function declaration - if the following line is javascript brackets.

```javascript
// bad

function a() {
  return 1
}
const b = () => 2

// bad

class A {
  a() {
    return 1
  }
  b() {
    return 2
  }
}

// good

function a() {
  return 1
}

const b = () => 2

// good

class A {

  a() {
    return 1
  }
  
  b() {
    return 2
  }
}
```

## Static members should be declared in class body

```javascript
// bad

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
}


// good

class Profile extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    handleClick: PropTypes.func,
  } 
  
  // ...
}
```

## Do not mix expression in one-line objects as assignment

```js
// bad
this.setState({ hasErrors: true, route })


// bad
const state = { hasErrors: true, route }


// good
this.setState({ hasErrors, route })


// good
this.setState({ hasErrors: true })


// good
const state = { hasErrors, route }
```
