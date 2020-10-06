type Primitive = boolean | number | string;

class Noliter<K extends keyof HTMLElementTagNameMap> {
  dom: HTMLElementTagNameMap[K];

  constructor(tagName: K) {
    this.dom = document.createElement(tagName);
  }

  append(...children: (string | Node | Noliter<K>)[]) {
    let index = children.length;
    while (--index) {
      if (children[index] instanceof Noliter) {
        children[index] = (children[index] as Noliter<K>).dom;
      }
    }
    this.dom.append.apply(
      this.dom,
      children as (string | Node)[],
    );
    return this;
  }

  setAttributes(...attributes: Primitive[]) {
    let index = 0;
    const max = attributes.length;
    for (; index < max; ++index) {
      this.dom.setAttribute(
        attributes[index] as string,
        attributes[++index] as string,
      );
    }
    return this;
  }

  setProperties(...properties: Primitive[]) {
    let index = 0;
    const max = properties.length;
    for (; index < max; ++index) {
      (this.dom as any)
        [properties[index] as string]
          = properties[++index];
    }
    return this;
  }

  addEvent<E extends keyof HTMLElementEventMap>(
    type: E,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ) {
    this.dom.addEventListener(type, listener, options);
    return this;
  }
}

export default function $<
  K extends keyof HTMLElementTagNameMap
>(tagName: K): Noliter<keyof HTMLElementTagNameMap> {
  return new Noliter(tagName);
}
