import {isEmpty as _isEmpty} from 'lodash';

export class CollectionUtils {

  static getFirstElement<T>(arr: T[]): T | null {
    return arr && arr.length ? arr[0] : null;
  }

  /**
   * Checks if `value` is an empty object, collection, map, or set.
   *
   * Objects are considered empty if they have no own enumerable string keyed
   * properties.
   *
   * Array-like values such as `arguments` objects, arrays, buffers, strings, or
   * Similarly, maps and sets are considered empty if they have a `size` of `0`.
   *
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   *
   *  _.isEmpty({ });
   * // => true
   *
   *  _.isEmpty('');
   * // => true
   *
   *  _.isEmpty('abc');
   * // => false
   */
  static isEmpty(value: any): boolean {
    return _isEmpty(value);
  }

  static isNotEmpty(value: any): boolean {
    return !this.isEmpty(value);
  }
}
