export default class ModuleClass {
  constructor(styles) {
    this.styles = styles;
  }

  class() {
    if (arguments.length < 1) {
      return null;
    } else if (arguments.length === 1) {
      return this.styleExists(arguments[0]) ? this.styles[arguments[0]] : null;
    } else if (arguments.length > 1) {
      let classArray = [];

      for (let argument of arguments) {
        if (this.styleExists(argument)) {
          classArray.push(this.styles[argument]);
        }
      }

      return this.classArrayJoin(classArray);
    }
  }

  compose() {
    let classArray = [];

    for (let argument of arguments) {
      if (argument) classArray.push(argument);
    }

    return this.classArrayJoin(classArray);
  }

  styleExists(style) {
    return typeof this.styles[style] === 'undefined' ? false : true;
  }

  classArrayJoin(classArray) {
    return classArray.length > 0 ? classArray.join(' ').trim() : '';
  }
}
