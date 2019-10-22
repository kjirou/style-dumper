type StylesWithMetaData = {
  children: StylesWithMetaData[],
  className: string,
  styles: {
    [key: string]: string,
  },
  tagName: string,
}

// TODO: Add "depth" option
// TODO: Add "selector(s)" option
// TODO: Add "truncateLongValues" option
export const dumpStyles = (element: HTMLElement): StylesWithMetaData => {
  const styleDeclaration = window.getComputedStyle(element)
  const styles: StylesWithMetaData['styles'] = {}
  for (let i = 0; i < styleDeclaration.length; i++) {
    const propertyName = styleDeclaration[i]
    styles[propertyName] = styleDeclaration.getPropertyValue(propertyName)
  }
  const sortedStyles: StylesWithMetaData['styles'] = {}
  Object.keys(styles).sort().forEach(key => {
    sortedStyles[key] = styles[key]
  })

  const childElements = Array.prototype.slice.call(element.children)

  return {
    tagName: element.tagName,
    className: element.getAttribute('class') || '',
    styles: sortedStyles,
    children: childElements.map(el => dumpStyles(el)),
  }
}
