import {NgModule} from '@angular/core';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';
import {en} from '../assets/i18n/en';
import {ru} from '../assets/i18n/ru';
import {AppLocals} from '@@app/constants/appLocals';

export class CustomTranslationLoader implements TranslateLoader {

  private static translations = {
    [AppLocals.EN]: en,
    [AppLocals.RU]: ru,
  };

  getTranslation(lang: string): Observable<any> {
    return of(CustomTranslationLoader.translations[lang]);
  }
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: AppLocals.DEFAULT,
      loader: {
        provide: TranslateLoader,
        useFactory: () => new CustomTranslationLoader()
      }
    })
  ],
  exports: [TranslateModule]
})
export class AppTranslationModule {

  constructor(translate: TranslateService) {
    translate.use(AppLocals.RU);
  }
}
