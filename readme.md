# Module Class helper

Class helper for CSS modules. We use it mostly in our React projects to provide better code readibility and some quality of life methods.

## Installation

1. install: `npm i module-class`
2. import: `import ModuleClass from 'module-class';`

## Usage

### class(argument1, argument2, ...)

Fetches and concatenates class names from module

component.module.scss

```
.big {
  font-size: 40px;
}

.red {
  color: red;
}
```

component.js

```
import ModuleClass from 'module-class';
import styles from './component.module.scss';

let css = new ModuleClass(styles);

<div class={css.class('big', 'red' ...)}></div>
```

Result

```
<div class="component_big__1fNF_ component_red__1fNF_"></div>
```

### compose(argument1, argument2, ...)

Simply stick together any amount of class name strings.

```
css.compose('big', 'red');
```

Results

```
<div class="big red"></div>
```

The main usage of this method is to combine different module names. Sometimes it is neccesery to just append classnames without translate its name to module name.

Practical exapmle would be a react component accepting an outside module classname via className prop.

form.js

```
import ModuleClass from 'module-class';
import styles from './form.module.scss';

let css = new ModuleClass(styles);

export default function Form() {
  return (
    <div class={css.class('form')}>
      <Button className={css.class('button')} />
    </div>
  )
}

```

button.js

```
import ModuleClass from 'module-class';
import styles from './button.module.scss';

let css = new ModuleClass(styles);

export default function Button({ className }) {
  return (
    <button class={css.compose(css.class('button'), className)}>Name</button>
  )
}
```
