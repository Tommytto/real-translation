// @flow
import injectSharedService from 'logic/decorators/injectSharedService';
import TextFilterService from 'services/TextFilterService';

@injectSharedService(['translateApi', 'textFilterService'])
class TextRecognitionService {
    _textFilterService: TextFilterService;

    translate(translationList) {
        return this._translateApi.translate(translationList);
    }

    getTranslationHelper() {
        return this._textFilterService;
    }

    filterTranslationList(translationList) {
        const firstStageFiltered = this._textFilterService.filterTranslationList(translationList);
        return firstStageFiltered;
    }
}

export default TextRecognitionService;
