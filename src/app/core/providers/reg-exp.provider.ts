interface StaticPatterns {
  integerNumber: RegExp;
}

interface DynamicPatterns {
  floatNumber: any[];
}

export class RegExpProvider {

  private static staticPatterns: StaticPatterns = {
    integerNumber: /^(0|([1-9]\d*))$/
  };

  private static dynamicPatterns: DynamicPatterns = {
    floatNumber: ['^(0|(0[\\.\\,]\\d{0,', 'precision', '})|([1-9]\\d*[\\.\\,]?\\d{0,', 'precision', '}))$'],
  };

  static getDynamic(patternName: keyof DynamicPatterns, params: {precision: number}): RegExp {
    const parts = RegExpProvider.dynamicPatterns[patternName];
    return new RegExp(parts.map(pp => params[pp] || pp).join(''));
  }

  static getStatic(patternName: keyof StaticPatterns): RegExp {
    return RegExpProvider.staticPatterns[patternName];
  }
}
